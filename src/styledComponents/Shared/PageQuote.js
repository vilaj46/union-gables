import * as React from "react";
import styled from "styled-components";

const QuoteContainer = styled.em`
  color: #333;
  font-size: 16px;
  line-height: 30px;
`;

const PageQuote = (props) => {
  return <QuoteContainer>{props.children}</QuoteContainer>;
};

export default PageQuote;
