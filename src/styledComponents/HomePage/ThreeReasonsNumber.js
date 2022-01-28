import * as React from "react";
import styled from "styled-components";

const ButtonContainer = styled.div`
  border: 2px solid #ffffff;
  border-radius: 100%;
  height: 90px;
  width: 90px;
  background: rgba(0, 0, 0, 0);

  &:hover {
    cursor: pointer;
    background-color: #2a0511;
    opacity: 0.6;
  }

  @media screen and (max-width: 550px) {
    height: 65px;
    width: 65px;
    display: flex;
  }
`;

const ActivatedContainer = styled.div`
  border: 2px solid #ffffff;
  border-radius: 100%;
  height: 90px;
  width: 90px;
  background-color: #2a0511;

  &:hover {
    cursor: pointer;
    opacity: 0.6;
  }

  @media screen and (max-width: 550px) {
    height: 65px;
    width: 65px;
    display: flex;
  }
`;

const Button = styled.div`
  color: #ffffff;
  text-align: center;
  margin: auto;
  font-size: 72px;

  @media screen and (max-width: 550px) {
    font-size: 40px;
  }
`;

const ThreeReasonsNumber = ({ text, activated, setReason, num }) => {
  if (activated) {
    return (
      <ActivatedContainer onClick={() => setReason(num)}>
        <Button type="button">{text}</Button>
      </ActivatedContainer>
    );
  } else {
    return (
      <ButtonContainer onClick={() => setReason(num)}>
        <Button type="button">{text}</Button>
      </ButtonContainer>
    );
  }
};

export default ThreeReasonsNumber;
