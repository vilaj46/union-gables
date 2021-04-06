import * as React from "react";
import styled from "styled-components";

const ParagraphContainer = styled.img`
  max-width: 740px;
  padding-top: 25px;
`;

const PageImage = (props) => {
  return <ParagraphContainer src={props.src} alt={props.alt} />;
};

export default PageImage;
