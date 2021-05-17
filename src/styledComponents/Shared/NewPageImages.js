import * as React from "react";
import Img from "gatsby-image";
import styled from "styled-components";

const ImagesContainer = styled.div`
  display: flex;
  height: auto;
  justify-content: center;

  @media screen and (max-width: 1020px) {
    width: 95%;
    margin: 0 auto;
    height: auto;
  }
`;

const NewPageImages = (props) => {
  const paddingBottom = props.extraBottomPadding ? "50px" : "25px";
  const largestHeight = findLargestHeight(props.images);
  return (
    <ImagesContainer style={{ paddingBottom }}>
      {props.images.map((img, index) => {
        return (
          <Img
            imgStyle={{
              width: "100%",
              height: `${largestHeight}px`,
            }}
            style={{ height: `${largestHeight}px`, width: "100%" }}
            fixed={img.node.childImageSharp.fixed}
            alt={props.alts[index]}
            key={img.node.base}
          />
        );
      })}
    </ImagesContainer>
  );
};

const findLargestHeight = (images) => {
  let largestHeight = 0;
  images.forEach((img) => {
    const { height } = img.node.childImageSharp.fixed;
    if (height > largestHeight) {
      largestHeight = height;
    }
  });
  return largestHeight;
};

export default NewPageImages;
