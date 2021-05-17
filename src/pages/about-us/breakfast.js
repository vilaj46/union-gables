import * as React from "react";
import { useStaticQuery, graphql } from "gatsby";

// Components
import Header from "../../styledComponents/Header/Header";
import Footer from "../../styledComponents/Footer/Footer";

// Shared Components
import MainPageTitle from "../../styledComponents/Shared/MainPageTitle";
import FontContainer from "../../styledComponents/Shared/FontContainer";
import PageBodyContainer from "../../styledComponents/Shared/PageBodyContainer";
import BottomPadding from "../../styledComponents/Shared/BottomPadding";

import api from "../../api/breakfastAPI";

import NewPageImage from "../../styledComponents/Shared/NewPageImage";

const Breakfast = () => {
  const data = useStaticQuery(graphql`
    query {
      allFile(
        filter: {
          extension: { eq: "jpg" }
          relativeDirectory: { eq: "breakfast" }
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
  const toast = edges[0];
  const benedict = edges[1];

  return (
    <FontContainer>
      <Header />
      <MainPageTitle>{api.title}</MainPageTitle>
      <PageBodyContainer>
        {api.Paragraph1}

        <NewPageImage data={benedict} alt="Eggs Benedict" />

        {api.Paragraph2}

        <NewPageImage data={toast} alt="Eggs and Toast" />

        {api.Paragraph3}

        <iframe
          width="95%"
          height="315"
          src="https://www.youtube.com/embed/lLu-Hkdum0I"
          allowFullScreen=""
          frameBorder="0"
          style={{ display: "block", margin: "0 auto" }}
        ></iframe>
      </PageBodyContainer>
      <BottomPadding />
      <Footer />
    </FontContainer>
  );
};

export default Breakfast;
