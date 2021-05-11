import * as React from "react";
import styled from "styled-components";

const ParagraphContainer = styled.p`
  color: #333;
  font-size: 1.4rem;
  margin: 0;
  padding: 0;
  line-height: 25px;
  padding-bottom: 20px;

  @media screen and (max-width: 1020px) {
    width: 95%;
  }

  @media screen and (max-width: 775px) {
    font-size: 1.2rem;
  }
`;

const CenterContainer = styled.p`
  color: #333;
  text-align: center;
  font-size: 1.4rem;

  @media screen and (max-width: 1020px) {
    width: 95%;
    margin-left: auto;
    margin-right: auto;
  }

  @media screen and (max-width: 775px) {
    font-size: 1.2rem;
  }
`;

const PageSubParagraph = (props) => {
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

export default PageSubParagraph;
