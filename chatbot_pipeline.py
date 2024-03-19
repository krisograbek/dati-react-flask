import re
from typing import Optional
import pandas as pd
from sqlalchemy import create_engine
from langchain_community.utilities import SQLDatabase
from langchain_openai import ChatOpenAI
from langchain_core.runnables import RunnablePassthrough
from langchain_core.prompts import ChatPromptTemplate
from langchain_core.output_parsers import StrOutputParser

from dotenv import load_dotenv

from constants import SQL_PROMPT_TEMPLATE, CHAIN_PROMPT_TEMPLATE

load_dotenv()


class ChatbotPipeline:
    def __init__(self, csv_file=None, db_name="dati", model=4):
        self.model_name = "gpt-3.5-turbo" if model == 3 else "gpt-4-0125-preview"
        self.engine = self.create_db_engine(csv_file, db_name)
        self.db = SQLDatabase(engine=self.engine)
        self.llm = ChatOpenAI(temperature=0.0, model=self.model_name)
        self.sql_prompt = ChatPromptTemplate.from_template(SQL_PROMPT_TEMPLATE)
        self.chain_prompt = ChatPromptTemplate.from_template(CHAIN_PROMPT_TEMPLATE)

        self.sql_chain = (
            RunnablePassthrough.assign(schema=self.get_schema)
            | self.sql_prompt
            | self.llm.bind(stop="\nSQL Result:")
            | StrOutputParser()
        )

    @staticmethod
    def create_db_engine(csv_file, name):
        engine = None
        if csv_file is not None:
            df = pd.read_csv(csv_file)
            engine = create_engine(f"sqlite:///{name}.db")
            df.to_sql(name, engine, index=False, if_exists="replace")
        return engine

    def get_schema(self, _):
        return self.db.get_table_info()

    def run_query(self, query: str) -> Optional[str]:
        """
        Runs a read-only SQL query on the database.

        This function handles three types of input:
        1. Non-SQL text or non-read-only SQL commands: Returns None.
        2. Pure read-only SQL query (SELECT): Executes the query directly.
        3. Text containing a read-only SQL query within ```sql``` delimiters: Extracts and executes the SQL query.

        Parameters:
        - query (str): A string that may contain a read-only SQL query.

        Returns:
        - The result of the SQL query if a valid read-only SQL query is provided; otherwise, None.
        """

        # Check if the input string is a pure SELECT SQL query (ignoring case)
        if re.match(r"^\s*SELECT\s+", query, re.I):
            return self.db.run(query)

        # Extract SELECT SQL query from a string delimited by ```sql``` blocks
        sql_block_pattern = r"```sql\s*(SELECT\s+.+?)\s*```"
        sql_query_match = re.search(sql_block_pattern, query, re.DOTALL | re.IGNORECASE)
        if sql_query_match:
            sql_query = sql_query_match.group(1)
            return self.db.run(sql_query)

        # If the input does not include a read-only SQL query or is not enclosed in ```sql``` blocks, return None
        return None

    def run_full_chain(self, query):
        full_chain = (
            RunnablePassthrough.assign(query=self.sql_chain).assign(
                schema=self.get_schema,
                response=lambda vars: self.run_query(vars["query"]),
            )
            | self.chain_prompt
            | self.llm
            | StrOutputParser()
        )
        response = full_chain.invoke({"question": query})
        return response
