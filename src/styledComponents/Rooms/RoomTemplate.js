import * as React from "react";
import styled from "styled-components";
import { useStaticQuery, graphql } from "gatsby";

// Sub Components
import Header from "../Header/Header";
import Footer from "../Footer/Footer";

// Shared Components
import MainPageTitle from "../../styledComponents/Shared/MainPageTitle";
import NewPageImage from "../../styledComponents/Shared/NewPageImage";
import PageSemiSubTitle from "../../styledComponents/Shared/PageSemiSubTitle";
import PageSubTitle from "../../styledComponents/Shared/PageSubTitle";
import FontContainer from "../../styledComponents/Shared/FontContainer";
import BottomPadding from "../../styledComponents/Shared/BottomPadding";
import HorizontalRule from "../../styledComponents/Shared/HorizontalRule";
import PageBodyContainer from "../../styledComponents/Shared/PageBodyContainer";

// Sub Components

const RoomTemplate = () => {
  const data = useStaticQuery(graphql`
    query {
      allFile(
        filter: { extension: { eq: "jpg" }, relativeDirectory: { eq: "rooms" } }
      ) {
        edges {
          node {
            base
            childImageSharp {
              fluid(quality: 100) {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      }
    }
  `);

  // Images
  const { edges } = data.allFile;
  console.log(edges);
  //   const kate = edges[0];
  return (
    <FontContainer>
      <Header />
      <PageBodyContainer>
        <MainPageTitle>Main Mansion Rooms</MainPageTitle>
      </PageBodyContainer>

      <BottomPadding />

      <Footer />
    </FontContainer>
  );
};

export default RoomTemplate;
