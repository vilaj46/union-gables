import * as React from "react";
import { useStaticQuery, graphql } from "gatsby";

// API Components
import api from "../../api/homepageAPI";

// Shared Components
import MainPageTitle from "../../styledComponents/Shared/MainPageTitle";
import PageQuote from "../../styledComponents/Shared/PageQuote";
import PageSubTitle from "../../styledComponents/Shared/PageSubTitle";
import HorizontalRule from "../../styledComponents/Shared/HorizontalRule";
import PageBodyContainer from "../../styledComponents/Shared/PageBodyContainer";
import BottomPadding from "../../styledComponents/Shared/BottomPadding";
import NewPageImage from "../../styledComponents/Shared/NewPageImage";

// HomePage Components
import ThreeReasons from "../../styledComponents/HomePage/ThreeReasons";
import DiscoverLinks from "../../styledComponents/HomePage/DiscoverLinks";

const HomePage = (props) => {
  const data = useStaticQuery(graphql`
    query {
      allFile(
        filter: {
          extension: { eq: "jpg" }
          relativeDirectory: { eq: "homePage" }
        }
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
  const jockey = edges[0];
  const statue = edges[1];

  return (
    <div>
      <PageBodyContainer>
        <MainPageTitle>{api.title}</MainPageTitle>

        {api.Paragraph1}

        <NewPageImage
          alt="Pool and Garden"
          extraBottomPadding={true}
          data={statue}
        />

        <PageSubTitle>{api.subTitle1}</PageSubTitle>

        {api.Paragraph2}

        <NewPageImage
          alt="Race Track"
          extraBottomPadding={true}
          data={jockey}
        />

        <PageSubTitle>{api.subTitle2}</PageSubTitle>

        {api.Paragraph3}

        <DiscoverLinks />

        <HorizontalRule />

        <PageQuote>{api.quote}</PageQuote>

        <PageSubTitle>{api.subTitle3}</PageSubTitle>

        {api.Paragraph4}

        {api.Paragraph5}

        {api.Paragraph6}

        {api.Paragraph7}
      </PageBodyContainer>

      <ThreeReasons />

      <BottomPadding />
    </div>
  );
};

export default HomePage;
