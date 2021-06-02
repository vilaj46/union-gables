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
import NewPageImage from "../../styledComponents/Shared/NewPageImage";

import api from "../../api/breakfastAPI";

// Utilities
import ogranizeEdges from "../../utils/organizeEdges";

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

  const images = ogranizeEdges(edges);

  return (
    <FontContainer>
      <Header image={images.eggsbenedict.data.node.childImageSharp.fluid.src} />
      <PageBodyContainer>
        <MainPageTitle>{api.title}</MainPageTitle>
        {api.Paragraph1}

        {api.Paragraph2}

        <NewPageImage
          extraExtraBottomPadding={true}
          data={images.eggstoast.data}
          alt={images.eggstoast.alt}
        />

        {api.Paragraph3}

        <iframe
          width="95%"
          height="315"
          src="https://www.youtube.com/embed/lLu-Hkdum0I"
          allowFullScreen=""
          frameBorder="0"
          style={{ display: "block", margin: "0 auto" }}
          title="Union Gables Tour Video"
        ></iframe>
      </PageBodyContainer>
      <BottomPadding />
      <Footer />
    </FontContainer>
  );
};

export default Breakfast;
