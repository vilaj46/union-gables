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

const Location = () => {
  const data = useStaticQuery(graphql`
    query {
      allFile(
        filter: {
          extension: { eq: "jpg" }
          relativeDirectory: { eq: "location" }
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
  const googleMap = edges[0];

  return (
    <FontContainer>
      <Header />
      <PageBodyContainer>
        <MainPageTitle>Location</MainPageTitle>
        <PageParagraphLink
          href="https://www.google.com/maps/place/Union+Gables+Inn/@43.0774983,-73.7818311,17z/data=!3m1!4b1!4m8!3m7!1s0x89de39db198dc42f:0x6cae1a6c359b6f02!5m2!4m1!1i2!8m2!3d43.0776007!4d-73.7796035"
          target={true}
          type="regular"
        >
          <NewPageImage
            data={googleMap}
            alt="Trip Advisor"
            dimensions={{
              width: "300px",
              height: "300px",
            }}
          />
        </PageParagraphLink>
      </PageBodyContainer>
      <BottomPadding />
      <Footer />
    </FontContainer>
  );
};

export default Location;
