import * as React from "react";
import { useStaticQuery, graphql } from "gatsby";

// Components
import Header from "../../styledComponents/Header/Header";
import Footer from "../../styledComponents/Footer/Footer";

// Shared Components
import MainPageTitle from "../../styledComponents/Shared/MainPageTitle";
import FontContainer from "../../styledComponents/Shared/FontContainer";
import BottomPadding from "../../styledComponents/Shared/BottomPadding";
import PageBodyContainer from "../../styledComponents/Shared/PageBodyContainer";

import NewPageImage from "../../styledComponents/Shared/NewPageImage";
import NewPageImages from "../../styledComponents/Shared/NewPageImages";
import PageSubTitle from "../../styledComponents/Shared/PageSubTitle";
import HorizontalRule from "../../styledComponents/Shared/HorizontalRule";

import api from "../../api/amenitiesAPI";

const Amenities = () => {
  const data = useStaticQuery(graphql`
    query {
      allFile(
        filter: {
          extension: { eq: "jpg" }
          relativeDirectory: { eq: "amenities" }
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
  const benedict = edges[0];
  const lamps = edges[1];
  const loungechairs2 = edges[2];
  const billiards = edges[3];
  const fireplace = edges[4];
  const garden = edges[5];
  const garden2 = edges[6];
  const loungechairs = edges[7];
  const porch = edges[8];
  const statue = edges[9];
  const pool = edges[10];

  return (
    <FontContainer>
      <Header />
      <PageBodyContainer>
        <MainPageTitle>{api.title}</MainPageTitle>
        {api.Paragraph1}

        <NewPageImages
          images={[benedict, pool]}
          alts={["Breakfast Eggs Benedict", "Pool"]}
        />

        <NewPageImages
          alts={["Billiards Table", "Fireplace"]}
          images={[billiards, fireplace]}
        />

        <PageSubTitle>{api.subTitle1}</PageSubTitle>

        {api.Paragraph2}

        {api.Paragraph3}

        <PageSubTitle>{api.subTitle2}</PageSubTitle>

        {api.Paragraph4Half}

        <NewPageImage data={loungechairs} alt="Lounge Chairs" />

        <NewPageImages alts={["Statue", "Pool"]} images={[statue, pool]} />

        <PageSubTitle>{api.subTitle3}</PageSubTitle>

        {api.Paragraph4}

        <PageSubTitle>{api.subTitle4}</PageSubTitle>

        {api.Paragraph5}

        <PageSubTitle>{api.subTitle5}</PageSubTitle>

        {api.Paragraph6}

        <NewPageImages
          alts={["Garden View One", "Garden View Two"]}
          images={[garden, garden2]}
        />

        <NewPageImages
          images={[porch, loungechairs2]}
          alts={["Porch", "Lounge Chairs"]}
          extraBottomPadding={true}
        />

        <PageSubTitle>{api.subTitle6}</PageSubTitle>

        {api.Paragraph7}

        <PageSubTitle>{api.subTitle7}</PageSubTitle>

        {api.Paragraph8}

        <PageSubTitle>{api.subTitle8}</PageSubTitle>

        {api.Paragraph9}

        <HorizontalRule />

        {api.Paragraph10}
      </PageBodyContainer>
      <BottomPadding />
      <Footer />
    </FontContainer>
  );
};

export default Amenities;
