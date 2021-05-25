import * as React from "react";
import { useStaticQuery, graphql } from "gatsby";

// Components
import Header from "../styledComponents/Header/Header";
import Footer from "../styledComponents/Footer/Footer";

// Shared Components
import MainPageTitle from "../styledComponents/Shared/MainPageTitle";
import FontContainer from "../styledComponents/Shared/FontContainer";
import BottomPadding from "../styledComponents/Shared/BottomPadding";
import PageBodyContainer from "../styledComponents/Shared/PageBodyContainer";
import PageParagraph from "../styledComponents/Shared/PageParagraph";
import PageSubParagraph from "../styledComponents/Shared/PageSubParagraph";
import PageParagraphLink from "../styledComponents/Shared/PageParagraphLink";
import PromotionLinks from "../styledComponents/Promotions/PromotionLinks";

const Promotions = () => {
  const data = useStaticQuery(graphql`
    query {
      allFile(
        filter: {
          extension: { eq: "jpg" }
          relativeDirectory: { eq: "promotions" }
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

  return (
    <FontContainer>
      <Header />
      <PageBodyContainer>
        <MainPageTitle>
          Special Promotions & Hotel Deals in Saratoga Springs, NY
        </MainPageTitle>

        <PageParagraph>
          <PageSubParagraph>
            Experience old world hospitality at the luxurious Union Gables Inn
            and plan your stay with our hotel deals in Saratoga Springs, NY. We
            offer seasonal promotions and special offers around Saratoga’s most
            popular events, perfect for guests looking to stay less than a
            ten-minute walk from downtown. Voted the Best of Saratoga Region for
            Six Years in a Row, our historic Queen Anne mansion offers travelers
            an unparalleled stay in the Spa City.
          </PageSubParagraph>
          <PageSubParagraph>
            Visiting for a{" "}
            <PageParagraphLink href="/discover/skidmore-college">
              Skidmore College
            </PageParagraphLink>{" "}
            Graduation? We offer a special 10% discount for parents staying at
            Union Gables Inn and are just a short drive from campus.
          </PageSubParagraph>
        </PageParagraph>

        <PageParagraph>
          <PageSubParagraph>
            We encourage guests to simply feel at home at The Inn and linger on
            the wraparound front porch, in the elegant sitting room with period
            antiques, and by the Romanesque pool and flowering gardens. Included
            in your stay is exemplary concierge service, complimentary wireless
            internet, and romantic rooms with in-room fireplaces. One of our
            guests’ favorite features is our{" "}
            <PageParagraphLink href="/about-us/breakfast">
              complimentary breakfast
            </PageParagraphLink>
            , its menu changing every day and made fresh daily by our Cordon
            Bleu chef.
          </PageSubParagraph>
          <PageSubParagraph>
            We always offer a best rate guarantee for guests who book direct
            with us. Reserve your room today with our latest promotions and
            Saratoga Springs, NY hotel deals.{" "}
          </PageSubParagraph>
        </PageParagraph>

        <PromotionLinks images={edges} />
      </PageBodyContainer>
      <BottomPadding />
      <Footer />
    </FontContainer>
  );
};

export default Promotions;
