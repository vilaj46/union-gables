import * as React from "react";
import styled from "styled-components";
import Img from "gatsby-image";

const ImageContainer = styled(Img)`
  display: block;
  max-width: 100%;
  padding: 25px auto;
  margin-left: auto;
  margin-right: auto;
  //   height: auto;

  @media screen and (max-width: 1020px) {
    width: 95%;
    margin: 0 auto;
  }
`;

const NewPageImage = (props) => {
  const paddingBottom = props.extraBottomPadding ? "50px" : "25px";
  console.log(props);
  console.log(paddingBottom);
  return (
    <ImageContainer
      //   src={props.src}
      alt={props.alt}
      style={{ paddingBottom, height: "100%" }}
      imgStyle={{ objectFit: "contain" }}
      fluid={props.data.node.childImageSharp.fluid}
    />
  );
};

export default NewPageImage;