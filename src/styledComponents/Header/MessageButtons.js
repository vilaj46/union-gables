import * as React from "react";
import styled from "styled-components";

const Container = styled.div`
  display: inline-block;
  color: #ffffff;
  padding: 14px 16px;
  background-color: #680727;
  box-shadow: 2px 2px 8px rgba(0, 0, 0, 0.5);
  position: absolute;

  &:hover {
    cursor: pointer;
    background-color: #74525d;
  }

  @media screen and (max-width: 1400px) {
    right: 0;
    top: 200px;
  }

  @media screen and (max-width: 600px) {
    top: 0;
  }
`;

const MessageButtons = (props) => {
  return <Container>Covid-19 Updates</Container>;
};
export default MessageButtons;
