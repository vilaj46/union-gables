import * as React from "react";
import { useStaticQuery, graphql } from "gatsby";
// import mediumZoom from "medium-zoom";
import ImageZoom from "react-medium-image-zoom";
// import styled from "styled-components";

// Components
import Header from "../styledComponents/Header/Header";
import Footer from "../styledComponents/Footer/Footer";

// Shared Components
import MainPageTitle from "../styledComponents/Shared/MainPageTitle";
import FontContainer from "../styledComponents/Shared/FontContainer";
import BottomPadding from "../styledComponents/Shared/BottomPadding";
import PageBodyContainer from "../styledComponents/Shared/PageBodyContainer";
// import ImageZoom from "../styledComponents/Shared/ImageZoom";

const Gallery = () => {
  const data = useStaticQuery(graphql`
    query {
      allFile(
        filter: {
          extension: { eq: "jpg" }
          relativeDirectory: { eq: "gallery" }
        }
      ) {
        edges {
          node {
            base
            childImageSharp {
              fluid(quality: 100) {
                ...GatsbyImageSharpFluid
              }
              fixed(quality: 100) {
                ...GatsbyImageSharpFixed
              }
            }
          }
        }
      }
    }
  `);

  // Images
  const { edges } = data.allFile;
  const images = organizeEdges(edges);

  return (
    <FontContainer>
      <Header />
      <PageBodyContainer>
        <MainPageTitle>Gallery</MainPageTitle>
        {images.map((img) => {
          const src = img.data.node.childImageSharp.fluid.src;
          const { alt } = img;
          return (
            <ImageZoom
              key={src}
              image={{
                src,
                alt,
                className: "img",
                style: { width: "33%", height: "200px", margin: "20px" },
              }}
              zoomImage={{
                src,
                alt,
              }}
            />
          );
        })}
      </PageBodyContainer>
      <BottomPadding />
      <Footer />
    </FontContainer>
  );
};

const organizeEdges = (edges) => {
  // Alt, data,
  const images = edges.map((edge) => {
    const split = edge.node.base.split("- ");
    const alt = split[1].slice(0, split[1].length - 4).trim();
    return {
      data: edge,
      alt,
    };
  });

  return images;
};

export default Gallery;
