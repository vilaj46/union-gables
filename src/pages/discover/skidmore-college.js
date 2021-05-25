import * as React from "react";
import { useStaticQuery, graphql } from "gatsby";

// Components
import Header from "../../styledComponents/Header/Header";
import Footer from "../../styledComponents/Footer/Footer";

// Shared Components
import MainPageTitle from "../../styledComponents/Shared/MainPageTitle";
import NewPageImages from "../../styledComponents/Shared/NewPageImages";
import FontContainer from "../../styledComponents/Shared/FontContainer";
import PageBodyContainer from "../../styledComponents/Shared/PageBodyContainer";
import HorizontalRule from "../../styledComponents/Shared/HorizontalRule";
import BottomPadding from "../../styledComponents/Shared/BottomPadding";

import api from "../../api/skidmoreAPI";

const SkidmoreCollege = () => {
  const data = useStaticQuery(graphql`
    query {
      allFile(
        filter: {
          extension: { eq: "jpg" }
          relativeDirectory: { eq: "skidmore" }
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

  return (
    <FontContainer>
      <Header />
      <PageBodyContainer>
        <MainPageTitle>{api.title}</MainPageTitle>

        {api.Section1}

        <HorizontalRule />

        {api.Section2}

        <NewPageImages
          images={[edges[0], edges[2]]}
          alts={["Skidmore College Graduation", "Skidmore College Studying"]}
          extraBottomPadding={true}
        />

        {api.Section3}

        <NewPageImages
          images={[edges[1], edges[3]]}
          alts={["Bruce Room", "Pool and Lounge Chairs"]}
          extraBottomPadding={true}
        />

        {api.Section4}

        <HorizontalRule />

        {api.Section5}
      </PageBodyContainer>

      <BottomPadding />

      <Footer />
    </FontContainer>
  );
};

export default SkidmoreCollege;
