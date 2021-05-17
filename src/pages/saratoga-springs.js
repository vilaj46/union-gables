import * as React from "react";
// import { useStaticQuery, graphql } from "gatsby";

// Components
import Header from "../styledComponents/Header/Header";
import Footer from "../styledComponents/Footer/Footer";

// Shared Components
import MainPageTitle from "../styledComponents/Shared/MainPageTitle";
import FontContainer from "../styledComponents/Shared/FontContainer";
import BottomPadding from "../styledComponents/Shared/BottomPadding";
import PageBodyContainer from "../styledComponents/Shared/PageBodyContainer";
// import NewPageImage from "../styledComponents/Shared/NewPageImage";
// import NewPageImages from "../styledComponents/Shared/NewPageImages";
// import PageSubTitle from "../styledComponents/Shared/PageSubTitle";
// import HorizontalRule from "../styledComponents/Shared/HorizontalRule";

const SaratogaSprings = () => {
  // const data = useStaticQuery(graphql`
  //   query {
  //     allFile(
  //       filter: {
  //         extension: { eq: "jpg" }
  //         relativeDirectory: { eq: "amenities" }
  //       }
  //     ) {
  //       edges {
  //         node {
  //           base
  //           childImageSharp {
  //             fluid(quality: 100) {
  //               ...GatsbyImageSharpFluid
  //             }
  //             fixed(quality: 100) {
  //               ...GatsbyImageSharpFixed
  //             }
  //           }
  //         }
  //       }
  //     }
  //   }
  // `);

  // Images
  // const { edges } = data.allFile;

  return (
    <FontContainer>
      <Header />
      <PageBodyContainer>
        <MainPageTitle>Saratoga Springs</MainPageTitle>
      </PageBodyContainer>
      <BottomPadding />
      <Footer />
    </FontContainer>
  );
};

export default SaratogaSprings;
