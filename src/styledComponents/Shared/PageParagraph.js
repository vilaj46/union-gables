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

  @media screen and (max-width: 1020px) {
    width: 95%;
    margin-left: auto;
    margin-right: auto;
  }

  @media screen and (max-width: 775px) {
    font-size: 1.2rem;
  }
`;

const PageParagraph = (props) => {
  const paddingBottom = props.extraBottomPadding ? "22.4px" : "0";
  try {
    if (props.center) {
      return (
        <CenterContainer style={{ paddingBottom }}>
          {props.children}
        </CenterContainer>
      );
    } else {
      return (
        <ParagraphContainer style={{ paddingBottom }}>
          {props.children}
        </ParagraphContainer>
      );
    }
  } catch (err) {
    return (
      <ParagraphContainer style={{ paddingBottom }}>
        {props.children}
      </ParagraphContainer>
    );
  }
};

export default PageParagraph;
