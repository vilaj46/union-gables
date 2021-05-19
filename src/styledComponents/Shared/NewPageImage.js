import * as React from "react";
import Img from "gatsby-image";
import styled from "styled-components";

const ImageContainer = styled(Img)`
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

const NewPageImage = (props) => {
  const paddingBottom = props.extraBottomPadding ? "50px" : "25px";
  const objectFit = props.removeContain ? "fill" : "contain";
  const paddingTop = props.paddingAround ? "20px" : "0px";

  const filter =
    props.dark === props.alt ? "brightness(50%)" : "brightness(100%)";

  return (
    <ImageContainer
      alt={props.alt}
      style={{
        paddingBottom,
        ...props.dimensions,
      }}
      imgStyle={{
        objectFit,
        height: "100%",
        paddingTop,
        filter,
      }}
      fluid={props.data.node.childImageSharp.fluid}
    />
  );
};

export default NewPageImage;
