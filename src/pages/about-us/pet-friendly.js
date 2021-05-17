import * as React from "react";
import { useStaticQuery, graphql } from "gatsby";

// Components
import Header from "../../styledComponents/Header/Header";

// Shared Components
import MainPageTitle from "../../styledComponents/Shared/MainPageTitle";
import FontContainer from "../../styledComponents/Shared/FontContainer";
import PageBodyContainer from "../../styledComponents/Shared/PageBodyContainer";
import PageParagraph from "../../styledComponents/Shared/PageParagraph";
import PageSubTitle from "../../styledComponents/Shared/PageSubTitle";
import RedCircle from "../../styledComponents/Shared/RedCircle";
import NewPageImage from "../../styledComponents/Shared/NewPageImage";
import NewPageImages from "../../styledComponents/Shared/NewPageImages";

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
        <PageParagraph extraBottomPadding={true}>
          Union Gables Inn is proud to be a pet-friendly hotel in Saratoga
          Springs, New York. We will happily allow your well-behaved, furry
          friend to stay with us for a small fee. Pets are provided with a
          blanket, bowl, and a breakfast menu of their own!
        </PageParagraph>

        <NewPageImages images={[dog, treats]} alts={["Dog", "Dog Treats"]} />

        <PageSubTitle>Our Policy</PageSubTitle>

        <PageParagraph center={true}>
          There is a one-time, per pet fee of $50 for large dogs, and $25 for
          small dogs (20 lbs. and under)
        </PageParagraph>
        <RedCircle />

        <PageParagraph center={true}>
          During breakfast we allow dogs on the porch, patio, and a designated
          breakfast area in the Billiards room.
        </PageParagraph>
        <RedCircle />

        <PageParagraph center={true}>
          Our cleaning staff will not go into rooms to change towels or sheets
          unless you notify us that your dog is not present in the room. If you
          allow your dog on the furniture, please use the blanket provided.
        </PageParagraph>
        <RedCircle />

        <PageParagraph center={true}>
          If you leave your pet in the room, please provide a cell phone number
          where you can be reached in the event of any noise complaints.
        </PageParagraph>
        <RedCircle />

        <PageParagraph center={true}>
          Please do not walk your pet on the side lawn, however the surrounding
          neighborhood is wonderful for walking.
        </PageParagraph>
        <RedCircle />

        <PageParagraph center={true}>
          Please clean up after your pet when walking them and before leaving
          your room.
        </PageParagraph>
        <RedCircle />

        <PageParagraph center={true} extraBottomPadding={true}>
          A dog waste bin can be found at the back side of the main mansion near
          the parking lot before the Dakota Garden Statue.
        </PageParagraph>

        <NewPageImages
          images={[room1, room2]}
          alts={["Room with Couch", "Room with Lounges"]}
        />

        <PageSubTitle>Our Rooms</PageSubTitle>
        <PageParagraph>
          There are nine designated pet-friendly rooms in the hotel – some with
          a private patio. Please contact us for details or to book one of the
          following pet-friendly rooms:
        </PageParagraph>
      </PageBodyContainer>
    </FontContainer>
  );
};

export default PetFriendly;
