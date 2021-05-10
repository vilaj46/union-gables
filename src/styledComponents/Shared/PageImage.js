import * as React from "react";
import styled from "styled-components";

const ParagraphContainer = styled.img`
  max-width: 100%;
  padding-top: 25px;
  margin: 0 auto;
`;

const PageImage = (props) => {
  return <ParagraphContainer src={props.src} alt={props.alt} />;
};

export default PageImage;
