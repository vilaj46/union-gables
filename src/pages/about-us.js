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
  const lily = edges[0];
  const billiards = edges[1];
  const garden = edges[2];
  const daytime = edges[3];
  const fireplace = edges[4];
  const loungechairs = edges[5];
  const wine = edges[6];
  const porch = edges[7];

  return (
    <FontContainer>
      <Header />
      <PageBodyContainer>
        <MainPageTitle>{api.title}</MainPageTitle>
        {api.Section1}

        <NewPageImages
          images={[billiards, fireplace]}
          alts={["Billiards", "Fire Place"]}
        />

        {api.Section2}

        <NewPageImages
          images={[daytime, wine]}
          alts={["Daytime Inn", "Wine and Dinner"]}
        />

        {api.Section3}

        <NewPageImages
          images={[loungechairs, porch]}
          alts={["Lounge Chairs and Pool", "Porch"]}
        />

        {api.Section4}

        <NewPageImages
          images={[lily, garden]}
          alts={["Lily Flower", "Garden"]}
        />

        {api.Section5}
      </PageBodyContainer>
      <BottomPadding />
      <Footer />
    </FontContainer>
  );
};

export default AboutUs;
