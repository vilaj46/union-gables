import * as React from "react";
import styled from "styled-components";

const ParagraphContainer = styled.img`
  max-width: 100%;
  padding: 25px 0;
`;

const PageImage = (props) => {
  const paddingBottom = props.extraBottomPadding ? "50px" : "25px";
  return (
    <ParagraphContainer
      src={props.src}
      alt={props.alt}
      style={{ paddingBottom }}
    />
  );
};

export default PageImage;
