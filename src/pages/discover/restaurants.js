import * as React from "react";
import { useStaticQuery, graphql } from "gatsby";

// Components
import Header from "../../styledComponents/Header/Header";
import Footer from "../../styledComponents/Footer/Footer";
import RestaurantLinks from "../../styledComponents/Restaurants/RestaurantLinks";

// Shared Components
import MainPageTitle from "../../styledComponents/Shared/MainPageTitle";
import NewPageImages from "../../styledComponents/Shared/NewPageImages";
import FontContainer from "../../styledComponents/Shared/FontContainer";
import PageBodyContainer from "../../styledComponents/Shared/PageBodyContainer";
import HorizontalRule from "../../styledComponents/Shared/HorizontalRule";

import BottomPadding from "../../styledComponents/Shared/BottomPadding";
import api from "../../api/restaurantsAPI";

const Resaurants = () => {
  const data = useStaticQuery(graphql`
    query {
      allFile(
        filter: {
          extension: { eq: "jpg" }
          relativeDirectory: { eq: "restaurants" }
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
  const pork = edges[0];
  const table = edges[1];
  const wine = edges[2];
  const pasta = edges[3];
  const chef = edges[4];
  const cheese = edges[5];

  const horse = edges[6];
  const benedict = edges[7];
  const concert = edges[8];

  return (
    <FontContainer>
      <Header />
      <PageBodyContainer>
        <MainPageTitle>{api.title}</MainPageTitle>

        {api.Section1}

        <NewPageImages
          images={[table, wine]}
          alts={["Table and Wine Glasses", "Wine and Steak"]}
          extraBottomPadding={true}
        />

        {api.Section2}

        <NewPageImages
          images={[chef, cheese]}
          alts={["Chef Seasoning Appetizers", "Cheese Board"]}
          extraBottomPadding={true}
        />

        {api.Section3}

        <NewPageImages
          images={[pasta, pork]}
          alts={["Seafood Linguine", "Pork Loin"]}
          extraBottomPadding={true}
        />

        {api.Section4}

        <HorizontalRule halfMargin={true} />

        {api.Section5}

        <RestaurantLinks images={[horse, benedict, concert]} />
      </PageBodyContainer>
      <BottomPadding />
      <Footer />
    </FontContainer>
  );
};

export default Resaurants;
