import * as React from "react";
import { useStaticQuery, graphql } from "gatsby";

// Components
import Header from "../../styledComponents/Header/Header";
import Footer from "../../styledComponents/Footer/Footer";

// Sub Components
import SpringsCenterEvents from "../../styledComponents/SpringsCenter/SpringsCenterEvents";

// Shared Components
import NewPageImage from "../../styledComponents/Shared/NewPageImage";
import NewPageImages from "../../styledComponents/Shared/NewPageImages";
import PageSubTitle from "../../styledComponents/Shared/PageSubTitle";
import MainPageTitle from "../../styledComponents/Shared/MainPageTitle";
import FontContainer from "../../styledComponents/Shared/FontContainer";
import BottomPadding from "../../styledComponents/Shared/BottomPadding";
import HorizontalRule from "../../styledComponents/Shared/HorizontalRule";
import PageBodyContainer from "../../styledComponents/Shared/PageBodyContainer";

import api from "../../api/springsCenterAPI";

const SaratogaPerformingArts = () => {
  const data = useStaticQuery(graphql`
    query {
      allFile(
        filter: {
          extension: { eq: "jpg" }
          relativeDirectory: { eq: "springsCenter" }
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
  const dancing = edges[0];
  const lecture = edges[1];
  const gathering = edges[2];
  return (
    <FontContainer>
      <Header />
      <PageBodyContainer>
        <MainPageTitle>{api.title}</MainPageTitle>

        {api.Paragraph1}

        <NewPageImages
          images={[gathering, lecture]}
          alts={["Gathering", "Lecture"]}
          extraBottomPadding={true}
        />

        <PageSubTitle>{api.subTitle1}</PageSubTitle>

        {api.Paragraph2}

        <NewPageImage data={dancing} alt="Dancing!" />

        <PageSubTitle>{api.subTitle2}</PageSubTitle>

        {api.Paragraph3}

        <SpringsCenterEvents />

        <HorizontalRule />

        {api.Paragraph4}
      </PageBodyContainer>

      <BottomPadding />

      <Footer />
    </FontContainer>
  );
};

export default SaratogaPerformingArts;
