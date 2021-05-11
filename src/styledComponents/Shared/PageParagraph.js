import * as React from "react";
import styled from "styled-components";

const ParagraphContainer = styled.p`
  color: #333;
  line-height: 40px;
  font-size: 1.4rem;

  @media screen and (max-width: 1020px) {
    width: 95%;
    margin: 0 auto;
  }

  @media screen and (max-width: 775px) {
    font-size: 1.2rem;
  }
`;

const CenterContainer = styled.p`
  color: #333;
  text-align: center;
  font-size: 1.4rem;
`;

const PageParagraph = (props) => {
  try {
    if (props.center) {
      return <CenterContainer>{props.children}</CenterContainer>;
    } else {
      return <ParagraphContainer>{props.children}</ParagraphContainer>;
    }
  } catch (err) {
    return <ParagraphContainer>{props.children}</ParagraphContainer>;
  }
};

export default PageParagraph;
