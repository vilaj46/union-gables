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

        <HorizontalRule />

        {api.Section2}

        <NewPageImages
          images={[
            getImage("brownhorse1", edges),
            getImage("brownhorse2", edges),
          ]}
          alts={["Horse Racing to Light", "Horse Racing in Mud"]}
        />

        {api.Section3}

        <NewPageImage
          extraBottomPadding={true}
          data={getImage("graduation", edges)}
          alt="Skidmore College Graduation"
        />

        {api.Section4}

        <NewPageImage
          data={getImage("whitehorse", edges)}
          alt="Whie Horse Walking"
          extraBottomPadding={true}
        />

        {api.Section5}

        <NewPageImage
          data={getImage("ballet", edges)}
          alt="Ballet at the Saratoga Performing Arts Center"
          extraBottomPadding={true}
        />

        {api.Section6}

        <NewPageImage
          data={getImage("park", edges)}
          alt="Saratoga State Park"
          extraBottomPadding={true}
        />

        {api.Section7}

        <NewPageImage
          data={getImage("downtown", edges)}
          alt="Downtown Saratoga Springs"
          extraBottomPadding={true}
        />

        {api.Section8}

        <NewPageImage
          data={getImage("horseracing2", edges)}
          alt="Saratoga Polo"
          extraBottomPadding={true}
        />

        {api.Section9}

        <NewPageImage
          data={getImage("horseracing1", edges)}
          alt="Saratoga Horse Racing Museum"
          extraBottomPadding={true}
        />

        {api.Section10}

        <HorizontalRule halfMargin={true} />

        {api.Section11}

        <ThingsLinks
          images={[
            getImage("breakfast", edges),
            getImage("treats", edges),
            getImage("daytime", edges),
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

export default SaratogaThingsToDo;
