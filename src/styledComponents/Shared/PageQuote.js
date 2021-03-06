import * as React from "react";
import styled from "styled-components";

const QuoteContainer = styled.em`
  color: #333;
  font-size: 1.4rem;
  line-height: 30px;
  display: block;
  margin: 0 auto;
  text-align: center;
  padding-bottom: 80px;
`;

const PageQuote = (props) => {
  const textAlign = props.left ? "left" : "center";
  const paddingBottom = props.halfPadding ? "40px" : "80px";
  const paddingTop = props.extraTopPadding ? "20px" : "0";

  return (
    <QuoteContainer style={{ textAlign, paddingBottom, paddingTop }}>
      {props.children}
    </QuoteContainer>
  );
};

export default PageQuote;
