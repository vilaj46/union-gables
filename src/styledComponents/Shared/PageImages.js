import * as React from "react";
import styled from "styled-components";

const ImagesContainer = styled.div`
  display: flex;
`;

const Image = styled.img`
  width: 50%;
  height: auto;
`;

const PageImages = ({ images }) => {
  return (
    <ImagesContainer>
      {images.map((img, index) => {
        return <Image src={img} alt={`Saratoga Race Course${index}`} />;
      })}
    </ImagesContainer>
  );
};

export default PageImages;
