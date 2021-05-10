import * as React from "react";
import styled from "styled-components";

const Container = styled.div`
  max-width: 960px;
  margin: 0 auto;

  @media screen and (max-width: 300px) {
    padding-top: 25px;
  }
`;

const PageBodyContainer = ({ children }) => {
  return <Container>{children}</Container>;
};

export default PageBodyContainer;
