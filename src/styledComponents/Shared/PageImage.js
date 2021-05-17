import * as React from "react";
import styled from "styled-components";

const ImageContainer = styled.img`
  display: block;
  max-width: 100%;
  padding: 25px auto;
  margin-left: auto;
  margin-right: auto;

  @media screen and (max-width: 1020px) {
    width: 95%;
    margin: 0 auto;
  }
`;

const PageImage = (props) => {
  const paddingBottom = props.extraBottomPadding ? "50px" : "25px";
  return (
    <ImageContainer src={props.src} alt={props.alt} style={{ paddingBottom }} />
  );
};

export default PageImage;
