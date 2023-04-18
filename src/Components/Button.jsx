import React from "react";
import styled from "styled-components";

const Button = ({ text , blue=false}) => {
  return (
    <Div>
      <button className={`${blue ? "blue" : "" }`} >{text}</button>
    </Div>
  );
};

const Div = styled.div`

button{
  color: #fff;
  font-size: 1.1rem;
  padding: 0.8rem 2rem;
  border: none;
  border-radius: 4rem;
  cursor: pointer;
  :not(.blue){
    background-color: transparent;
    border: 1px solid #fff;
  }
}

.blue{
  background-color: #2d69fd;
}

`;

export default Button;
