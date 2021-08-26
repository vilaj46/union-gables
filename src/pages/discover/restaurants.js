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
              fluid(quality: 90) {
                ...GatsbyImageSharpFluid
              }
              fixed(quality: 90) {
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
  return (
    <FontContainer>
      <Header />
      <PageBodyContainer>
        <MainPageTitle>{api.title}</MainPageTitle>

        {api.Section1}

        <NewPageImages
          images={[getImage("table", edges), getImage("wine", edges)]}
          alts={["Table and Wine Glasses", "Wine and Steak"]}
          extraBottomPadding={true}
        />

        {api.Section2}

        <NewPageImages
          images={[getImage("chef", edges), getImage("cheese", edges)]}
          alts={["Chef Seasoning Appetizers", "Cheese Board"]}
          extraBottomPadding={true}
        />

        {api.Section3}

        <NewPageImages
          images={[getImage("pasta", edges), getImage("pork", edges)]}
          alts={["Seafood Linguine", "Pork Loin"]}
          extraBottomPadding={true}
        />

        {api.Section4}

        <HorizontalRule halfMargin={true} />

        {api.Section5}

        <RestaurantLinks
          images={[
            getImage("horse", edges),
            getImage("benedict", edges),
            getImage("concert", edges),
          ]}
        />
      </PageBodyContainer>
      <BottomPadding />
      <Footer />
    </FontContainer>
  );
};

function getImage(text, edges) {
  for (let i = 0; i < edges.length; i++) {
    const { base } = edges[i].node;
    if (base.includes(text)) {
      return edges[i];
    }
  }
  return -1;
}

export default Resaurants;
