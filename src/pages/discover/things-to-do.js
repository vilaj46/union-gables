import * as React from "react";
import { useStaticQuery, graphql } from "gatsby";

// Components
import Header from "../../styledComponents/Header/Header";
import Footer from "../../styledComponents/Footer/Footer";
import ThingsLinks from "../../styledComponents/ThingsToDo/ThingsLinks";

// Shared Components
import MainPageTitle from "../../styledComponents/Shared/MainPageTitle";
import FontContainer from "../../styledComponents/Shared/FontContainer";
import PageBodyContainer from "../../styledComponents/Shared/PageBodyContainer";
import HorizontalRule from "../../styledComponents/Shared/HorizontalRule";
import BottomPadding from "../../styledComponents/Shared/BottomPadding";
import NewPageImages from "../../styledComponents/Shared/NewPageImages";
import NewPageImage from "../../styledComponents/Shared/NewPageImage";

import api from "../../api/thingsToDoAPI";

const SaratogaThingsToDo = () => {
  const data = useStaticQuery(graphql`
    query {
      allFile(
        filter: {
          extension: { eq: "jpg" }
          relativeDirectory: { eq: "thingsToDo" }
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
  const brownhorse1 = edges[2];
  const brownhorse2 = edges[4];
  const graduation = edges[0];
  const downtown = edges[1];
  const whitehorse = edges[3];
  const ballet = edges[5];
  const horseracing1 = edges[6];
  const horseracing2 = edges[7];
  const park = edges[8];

  // ThingsToDo Bottom Link Images
  const breakfast = edges[9];
  const treats = edges[10];
  const daytime = edges[11];

  return (
    <FontContainer>
      <Header />
      <PageBodyContainer>
        <MainPageTitle>{api.title}</MainPageTitle>

        {api.Section1}

        <HorizontalRule />

        {api.Section2}

        <NewPageImages
          images={[brownhorse1, brownhorse2]}
          alts={["Horse Racing to Light", "Horse Racing in Mud"]}
        />

        {api.Section3}

        <NewPageImage
          extraBottomPadding={true}
          data={graduation}
          alt="Skidmore College Graduation"
        />

        {api.Section4}

        <NewPageImage
          data={whitehorse}
          alt="Whie Horse Walking"
          extraBottomPadding={true}
        />

        {api.Section5}

        <NewPageImage
          data={ballet}
          alt="Ballet at the Saratoga Performing Arts Center"
          extraBottomPadding={true}
        />

        {api.Section6}

        <NewPageImage
          data={park}
          alt="Saratoga State Park"
          extraBottomPadding={true}
        />

        {api.Section7}

        <NewPageImage
          data={downtown}
          alt="Downtown Saratoga Springs"
          extraBottomPadding={true}
        />

        {api.Section8}

        <NewPageImage
          data={horseracing2}
          alt="Saratoga Polo"
          extraBottomPadding={true}
        />

        {api.Section9}

        <NewPageImage
          data={horseracing1}
          alt="Saratoga Horse Racing Museum"
          extraBottomPadding={true}
        />

        {api.Section10}

        <HorizontalRule halfMargin={true} />

        {api.Section11}

        <ThingsLinks images={[breakfast, treats, daytime]} />
      </PageBodyContainer>
      <BottomPadding />
      <Footer />
    </FontContainer>
  );
};

export default SaratogaThingsToDo;
