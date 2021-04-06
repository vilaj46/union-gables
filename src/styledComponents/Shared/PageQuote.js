import * as React from "react";
import styled from "styled-components";

const QuoteContainer = styled.em`
  color: #333;
  font-size: 16px;
  line-height: 30px;

  @media screen and (max-width: 750px) {
    text-align: center;
    display: block;
    margin: 0 auto;
    width: 75%;
  }

  @media screen and (max-width: 363px) {
    width: 80%;
  }
`;

const PageQuote = (props) => {
  return <QuoteContainer>{props.children}</QuoteContainer>;
};

export default PageQuote;
