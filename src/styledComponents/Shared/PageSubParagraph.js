import * as React from "react";
import styled from "styled-components";

const ParagraphContainer = styled.span`
  display: block;
  color: #333;
  font-size: 1.4rem;
  margin: 0;
  padding: 0;
  line-height: 25px;

  @media screen and (max-width: 1020px) {
    width: 95%;
  }

  @media screen and (max-width: 775px) {
    font-size: 1.2rem;
  }
`;

const PageSubParagraph = (props) => {
  let paddingBottom = props.last ? "0" : "20px"; // Too much padding when image was below.

  paddingBottom = props.moreBottomPadding ? "44.8px" : paddingBottom;
  return (
    <ParagraphContainer style={{ paddingBottom }}>
      {props.children}
    </ParagraphContainer>
  );
};

export default PageSubParagraph;
