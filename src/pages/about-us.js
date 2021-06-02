import * as React from "react";
import { useStaticQuery, graphql } from "gatsby";

// Components
import Header from "../styledComponents/Header/Header";
import Footer from "../styledComponents/Footer/Footer";

// Shared Components
import MainPageTitle from "../styledComponents/Shared/MainPageTitle";
import FontContainer from "../styledComponents/Shared/FontContainer";
import BottomPadding from "../styledComponents/Shared/BottomPadding";
import PageBodyContainer from "../styledComponents/Shared/PageBodyContainer";
import NewPageImages from "../styledComponents/Shared/NewPageImages";

import api from "../api/aboutUsAPI";

// Utilities
import organizeEdges from "../utils/organizeEdges";

const AboutUs = () => {
  const data = useStaticQuery(graphql`
    query {
      allFile(
        filter: {
          extension: { eq: "jpg" }
          relativeDirectory: { eq: "aboutUs" }
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
        <MainPageTitle>{api.title}</MainPageTitle>
        {api.Section1}

        <NewPageImages
          images={[images.billiards.data, images.fireplace.data]}
          alts={[images.billiards.alt, images.fireplace.alt]}
        />

        {api.Section2}

        <NewPageImages
          images={[images.daytime.data, images.wine.data]}
          alts={[images.daytime.alt, images.wine.alt]}
        />

        {api.Section3}

        <NewPageImages
          images={[images.loungechairs.data, images.porch.data]}
          alts={[images.loungechairs.alt, images.porch.alt]}
        />

        {api.Section4}

        <NewPageImages
          images={[images.lily.data, images.garden.data]}
          alts={[images.lily.alt, images.garden.alt]}
        />

        {api.Section5}
      </PageBodyContainer>
      <BottomPadding />
      <Footer />
    </FontContainer>
  );
};

export default AboutUs;
