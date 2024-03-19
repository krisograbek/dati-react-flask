# SQL Prompt Template
SQL_PROMPT_TEMPLATE = """
Based on the table schema below, write a SQL query that would answer the user's question.
{schema}

Question: {question}
SQL Query:
"""

# Chain Prompt Template
CHAIN_PROMPT_TEMPLATE = """
You role is to answer the user Question based on the SQL Response.
You will be given the Question, Sql Query, and Sql Response, and you'll write a natural language response:

Question: {question}
SQL Query: {query}
SQL Response: {response}

Now take the Question and answer it in natural language based on the SQL Response"""
