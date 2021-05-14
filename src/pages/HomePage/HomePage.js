import * as React from "react";
import { useStaticQuery, graphql } from "gatsby";

// API Components
import api from "../../api/homepageAPI";

// Shared Components
import MainPageTitle from "../../styledComponents/Shared/MainPageTitle";
import PageImage from "../../styledComponents/Shared/PageImage";
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

  const { edges } = data.allFile;
  const statue = edges[0];
  const jockey = edges[1];
  const racetrack = edges[2];
  const room = edges[3];
  const food = edges[4];
  return (
    <div>
      <PageBodyContainer>
        <MainPageTitle>{api.title}</MainPageTitle>

        {api.Paragraph1}

        {/* <Img fluid={flu} fadeIn={true} durationFadeIn={2000} /> */}
        {/* <PageImage
          // src={images[0].node.publicURL}
          // alt="Pool and Statue"
          src={api.statue}
          alt="Pool and Garden"
          extraBottomPadding={true}
        /> */}

        <NewPageImage
          alt="Pool and Garden"
          extraBottomPadding={true}
          data={statue}
        />

        <PageSubTitle>{api.subTitle1}</PageSubTitle>

        {api.Paragraph2}

        <PageImage
          src={api.jockey}
          alt="Race Track"
          extraBottomPadding={true}
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
