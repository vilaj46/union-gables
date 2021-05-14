import * as React from "react";
import styled from "styled-components";

const ImagesContainer = styled.div`
  display: flex;
  height: auto;

  @media screen and (max-width: 1020px) {
    width: 95%;
    margin: 0 auto;
    height: auto;
  }
`;

const Image = styled.img`
  width: 50%;
  height: auto;
`;

const PageImages = (props) => {
  const paddingBottom = props.extraBottomPadding ? "50px" : "25px";
  return (
    <ImagesContainer style={{ paddingBottom }}>
      {props.images.map((img, index) => {
        return <Image src={img} alt={`Saratoga Race Course${index}`} />;
      })}
    </ImagesContainer>
  );
};

export default PageImages;
