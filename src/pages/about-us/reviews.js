import * as React from "react";
import { useStaticQuery, graphql } from "gatsby";

// Components
import Header from "../../styledComponents/Header/Header";

// Shared Components
import Footer from "../../styledComponents/Footer/Footer";
import MainPageTitle from "../../styledComponents/Shared/MainPageTitle";
import NewPageImage from "../../styledComponents/Shared/NewPageImage";
import BottomPadding from "../../styledComponents/Shared/BottomPadding";
import FontContainer from "../../styledComponents/Shared/FontContainer";
import PageBodyContainer from "../../styledComponents/Shared/PageBodyContainer";
import PageParagraphLink from "../../styledComponents/Shared/PageParagraphLink";

const Reviews = () => {
  const data = useStaticQuery(graphql`
    query {
      allFile(
        filter: {
          extension: { eq: "png" }
          relativeDirectory: { eq: "reviews" }
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
  const tripAdvisor = edges[0];

  return (
    <FontContainer>
      <Header />
      <PageBodyContainer>
        <MainPageTitle>Reviews</MainPageTitle>
        <PageParagraphLink
          href="https://www.tripadvisor.com/Hotel_Review-g48562-d80181-Reviews-Union_Gables_Inn-Saratoga_Springs_New_York-m14348-m14348.html"
          target={true}
          type="regular"
        >
          <NewPageImage
            data={tripAdvisor}
            alt="Trip Advisor"
            dimensions={{
              width: "500px",
              height: "250px",
            }}
          />
        </PageParagraphLink>
      </PageBodyContainer>
      <BottomPadding />
      <Footer />
    </FontContainer>
  );
};

export default Reviews;
