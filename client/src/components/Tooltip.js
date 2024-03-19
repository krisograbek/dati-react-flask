import React from 'react';
import styled from 'styled-components';


const TooltipText = styled.span`
visibility: hidden;
width: 120px;
background-color: #555;
color: #fff;
text-align: center;
padding: 8px;
  border-radius: 6px;
  position: absolute;
  z-index: 1;
  bottom: 125%;
  left: 50%;
  margin-left: -60px;
  opacity: 0;
  transition: visibility 0s, opacity 0.3s linear;
  transition-delay: 0.3s;
  
  // Tooltip arrow
  &::after {
    content: '';
    position: absolute;
    top: 100%;
    left: 50%;
    margin-left: -5px;
    border-width: 5px;
    border-style: solid;
    border-color: #555 transparent transparent transparent;
  }
  `;

const TooltipContainer = styled.div`
    position: relative;
    display: inline-block;
    cursor: pointer;
  
    &:hover ${TooltipText} {
      visibility: visible;
      opacity: 1;
    }
  `;

const Tooltip = ({ children, text }) => {
  return (
    <TooltipContainer>
      {children}
      <TooltipText>{text}</TooltipText>
    </TooltipContainer>
  );
};

export default Tooltip;
