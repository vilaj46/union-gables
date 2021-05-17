import * as React from "react";
import { useStaticQuery, graphql } from "gatsby";

// Components
import Header from "../../styledComponents/Header/Header";
import Footer from "../../styledComponents/Footer/Footer";

// Shared Components
import NewPageImage from "../../styledComponents/Shared/NewPageImage";
import PageQuote from "../../styledComponents/Shared/PageQuote";
import NewPageImages from "../../styledComponents/Shared/NewPageImages";
import PageSubTitle from "../../styledComponents/Shared/PageSubTitle";
import MainPageTitle from "../../styledComponents/Shared/MainPageTitle";
import FontContainer from "../../styledComponents/Shared/FontContainer";
import BottomPadding from "../../styledComponents/Shared/BottomPadding";
import HorizontalRule from "../../styledComponents/Shared/HorizontalRule";
import PageBodyContainer from "../../styledComponents/Shared/PageBodyContainer";

import api from "../../api/raceCourseAPI";

const SaratogaRaceCourse = () => {
  const data = useStaticQuery(graphql`
    query {
      allFile(
        filter: {
          extension: { eq: "jpg" }
          relativeDirectory: { eq: "raceCourse" }
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
  const jockeys = edges[0];
  const race = edges[1];
  const horse = edges[2];
  const racetrack = edges[3];

  return (
    <FontContainer>
      <Header />

      <PageBodyContainer>
        <MainPageTitle>{api.title}</MainPageTitle>

        {api.Paragraph1}

        <NewPageImage data={racetrack} alt="Race Track" />

        <NewPageImages
          images={[race, jockeys]}
          extraBottomPadding={true}
          alts={["Horses Racing", "Jockeys Talking"]}
        />

        <PageSubTitle>{api.subTitle1}</PageSubTitle>

        {api.Paragraph2}

        <PageSubTitle>{api.subTitle2}</PageSubTitle>

        <PageSubTitle>{api.subTitle3}</PageSubTitle>

        {api.Paragraph4}

        <NewPageImage data={horse} alt="White Horse" />

        <PageSubTitle>{api.subTitle4}</PageSubTitle>

        {api.Paragraph5}

        <PageSubTitle>{api.subTitle5}</PageSubTitle>

        {api.Paragraph6}

        <PageSubTitle>{api.subTitle6}</PageSubTitle>

        {api.Paragraph7}

        <HorizontalRule />

        <PageQuote>{api.quote}</PageQuote>
      </PageBodyContainer>

      <BottomPadding />

      <Footer />
    </FontContainer>
  );
};

export default SaratogaRaceCourse;
