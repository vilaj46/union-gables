import * as React from "react";
import styled from "styled-components";

const H1Container = styled.h1`
  color: #aa4465;
  font-size: 36px;
  text-transform: uppercase;
  text-align: center;
  margin-bottom: 0;

  @media screen and (max-width: 800px) {
    width: 95%;
    margin-left: auto;
    margin-right: auto;
  }

  @media screen and (max-width: 400px) {
    font-size: 1.7rem;
  }

  @media screen and (max-width: 300px) {
    font-size: 1.5rem;
    padding-top: 25px;
  }
`;

const PageTitle = (props) => {
  return <H1Container>{props.children}</H1Container>;
};

export default PageTitle;
