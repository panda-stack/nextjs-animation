import React from "react";
import styled, { keyframes } from "styled-components";
import { slideInRight } from "react-animations";
const slideAnimationUp = keyframes`${slideInRight}`;

export default function ProgressBar({progress, color,show=true}) {
  return (
    <Div1>
      <Div2>
        <Div3 style={{ width: progress, backgroundColor: color,transition:" width 2s"}} />
      </Div2>
      {(show) &&
      <P>{progress}</P>
}    </Div1>
  );
}

const Div1 = styled.div`
  display: flex;
  background-color: inherit;
  padding: 0.5rem 1rem;
  border-radius: 8px;
  width: 100%;
  margin-top:1rem;  
  `;

const Div2 = styled.div`
  width: 100%;
  height: 1rem;
  background-color: #a6a4a7;
  border-radius: 1rem;
  animation: 1s ${slideAnimationUp};

  `;

const Div3 = styled.div`
  height: 100%;
  border-radius: 1rem;

  `;

const P = styled.p`
  color: white;
  margin: 0;
  margin-left: 5px;
  font-size: 12px;
  font-weight: bolder;
`;
