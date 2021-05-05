import * as React from "react";
import styled from "styled-components";

const ParagraphContainer = styled.p`
  color: #333;
  font-size: 16px;
  line-height: 30px;

  @media screen and (max-width: 800px) {
    margin: 0 auto;
    width: 95%;
  }
`;

const CenterContainer = styled.p`
  color: #333;
  text-align: center;
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