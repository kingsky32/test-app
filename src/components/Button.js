import React from "react";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 60px;
  border-radius: 30px;
  width: 100%;
  max-width: 300px;
  background-color: ${props => props.theme.mainColor};
  font-weight: bold;
  color: white;
  font-size: 18px;
  cursor: pointer;
  &:hover {
    opacity: 0.7;
  }
`;

const Button = ({ text, onClick }) => {
  return (
    <Container onClick={onClick}>
      {text}
    </Container>
  );
};

export default Button;
