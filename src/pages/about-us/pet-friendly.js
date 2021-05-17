import * as React from "react";
import { useStaticQuery, graphql } from "gatsby";

// Components
import Header from "../../styledComponents/Header/Header";

// Sub Components
import OurRooms from "../../styledComponents/PetFriendly/OurRooms";

// Shared Components
import Footer from "../../styledComponents/Footer/Footer";
import RedCircle from "../../styledComponents/Shared/RedCircle";
import PageSubTitle from "../../styledComponents/Shared/PageSubTitle";
import NewPageImage from "../../styledComponents/Shared/NewPageImage";
import MainPageTitle from "../../styledComponents/Shared/MainPageTitle";
import FontContainer from "../../styledComponents/Shared/FontContainer";
import BottomPadding from "../../styledComponents/Shared/BottomPadding";
import NewPageImages from "../../styledComponents/Shared/NewPageImages";
import HorizontalRule from "../../styledComponents/Shared/HorizontalRule";
import PageSemiSubTitle from "../../styledComponents/Shared/PageSemiSubTitle";
import PageBodyContainer from "../../styledComponents/Shared/PageBodyContainer";

import api from "../../api/petFriendlyAPI";

const PetFriendly = () => {
  const data = useStaticQuery(graphql`
    query {
      allFile(
        filter: {
          extension: { eq: "jpg" }
          relativeDirectory: { eq: "petFriendly" }
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

  const { edges } = data.allFile;
  const room1 = edges[0];
  const room2 = edges[1];
  const treats = edges[2];
  const dog = edges[3];

  return (
    <FontContainer>
      <Header />
      <PageBodyContainer>
        <MainPageTitle>{api.title}</MainPageTitle>
        {api.Paragraph1}

        <NewPageImage data={dog} alt="Dog" />

        <PageSubTitle>{api.subTitle1}</PageSubTitle>
        {api.Paragraph2}
        <RedCircle />

        {api.Paragraph3}
        <RedCircle />

        {api.Paragraph4}
        <RedCircle />

        {api.Paragraph5}
        <RedCircle />

        {api.Paragraph6}
        <RedCircle />

        {api.Paragraph7}
        <RedCircle />

        {api.Paragraph8}

        <NewPageImages
          images={[room1, room2]}
          alts={["Room with Couch", "Room with Lounges"]}
        />

        <PageSubTitle>{api.subTitle2}</PageSubTitle>
        {api.Paragraph9}

        <OurRooms />

        <NewPageImage data={treats} alt="Dog Treats" />

        <PageSemiSubTitle>{api.subTitle3}</PageSemiSubTitle>
        {api.Paragraph10}

        <PageSubTitle>{api.subTitle4}</PageSubTitle>
        {api.Paragraph11}

        <PageSubTitle>{api.subTitle5}</PageSubTitle>
        {api.Paragraph12}

        <PageSubTitle>{api.subTitle6}</PageSubTitle>
        {api.Paragraph13}

        <HorizontalRule />

        {api.Paragraph14}
      </PageBodyContainer>

      <BottomPadding />

      <Footer />
    </FontContainer>
  );
};

export default PetFriendly;
