import * as React from "react";
import { useStaticQuery, graphql } from "gatsby";

// Components
import Header from "../../styledComponents/Header/Header";
import Footer from "../../styledComponents/Footer/Footer";

// Shared Components
import MainPageTitle from "../../styledComponents/Shared/MainPageTitle";
import FontContainer from "../../styledComponents/Shared/FontContainer";
import BottomPadding from "../../styledComponents/Shared/BottomPadding";
import PageBodyContainer from "../../styledComponents/Shared/PageBodyContainer";

import NewPageImage from "../../styledComponents/Shared/NewPageImage";
import NewPageImages from "../../styledComponents/Shared/NewPageImages";
import PageSubTitle from "../../styledComponents/Shared/PageSubTitle";
import HorizontalRule from "../../styledComponents/Shared/HorizontalRule";

import api from "../../api/amenitiesAPI";

// Utilities
import organizeEdges from "../../utils/organizeEdges";

const Amenities = () => {
  const data = useStaticQuery(graphql`
    query {
      allFile(
        filter: {
          extension: { eq: "jpg" }
          relativeDirectory: { eq: "amenities" }
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

  const images = organizeEdges(edges);

  return (
    <FontContainer>
      <Header image={images.pool.data.node.childImageSharp.fluid.src} />
      <PageBodyContainer>
        <MainPageTitle>{api.title}</MainPageTitle>
        {api.Paragraph1}

        <NewPageImages
          images={[images.benedict.data, images.lamps.data]}
          alts={[images.benedict.alt, images.lamps.alt]}
        />

        <NewPageImages
          images={[images.billiards.data, images.fireplace.data]}
          alts={[images.billiards.alt, images.fireplace.alt]}
        />

        <PageSubTitle>{api.subTitle1}</PageSubTitle>

        {api.Paragraph2}

        {api.Paragraph3}

        <PageSubTitle>{api.subTitle2}</PageSubTitle>

        {api.Paragraph4Half}

        <NewPageImage
          data={images.loungechairs.data}
          alt={images.loungechairs.alt}
        />

        <NewPageImages
          images={[images.statue.data, images.pool.data]}
          alts={[images.statue.alt, images.pool.alt]}
        />

        <PageSubTitle>{api.subTitle3}</PageSubTitle>

        {api.Paragraph4}

        <PageSubTitle>{api.subTitle4}</PageSubTitle>

        {api.Paragraph5}

        <PageSubTitle>{api.subTitle5}</PageSubTitle>

        {api.Paragraph6}

        <NewPageImages
          images={[images.garden.data, images.garden2.data]}
          alts={[images.garden.alt, images.garden2.alt]}
        />

        <NewPageImages
          images={[images.porch.data, images.loungechairs2.data]}
          alts={[images.porch.alt, images.loungechairs2.alt]}
          extraBottomPadding={true}
        />

        <PageSubTitle>{api.subTitle6}</PageSubTitle>

        {api.Paragraph7}

        <PageSubTitle>{api.subTitle7}</PageSubTitle>

        {api.Paragraph8}

        <PageSubTitle>{api.subTitle8}</PageSubTitle>

        {api.Paragraph9}

        <HorizontalRule />

        {api.Paragraph10}
      </PageBodyContainer>
      <BottomPadding />
      <Footer />
    </FontContainer>
  );
};

export default Amenities;
