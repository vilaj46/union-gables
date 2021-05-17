import * as React from "react";
import { useStaticQuery, graphql } from "gatsby";

// Components
import Header from "../../styledComponents/Header/Header";
import Footer from "../../styledComponents/Footer/Footer";

// Shared Components
import MainPageTitle from "../../styledComponents/Shared/MainPageTitle";
import NewPageImage from "../../styledComponents/Shared/NewPageImage";
import PageSemiSubTitle from "../../styledComponents/Shared/PageSemiSubTitle";
import PageSubTitle from "../../styledComponents/Shared/PageSubTitle";
import FontContainer from "../../styledComponents/Shared/FontContainer";
import BottomPadding from "../../styledComponents/Shared/BottomPadding";
import HorizontalRule from "../../styledComponents/Shared/HorizontalRule";
import PageBodyContainer from "../../styledComponents/Shared/PageBodyContainer";

// Sub Components
import EventsGuideLinks from "../../styledComponents/FestivalsAndEvents/EventsGuideLinks";

import api from "../../api/festivalsAndEventsAPI";

const SaratogaPerformingArts = () => {
  const data = useStaticQuery(graphql`
    query {
      allFile(
        filter: {
          extension: { eq: "jpg" }
          relativeDirectory: { eq: "festivalsAndEvents" }
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
  const dining = edges[0];
  const market = edges[1];
  const dancing = edges[2];
  const nightlife = edges[3];
  const violins = edges[4];
  const saxaphone = edges[5];
  return (
    <FontContainer>
      <Header />
      <PageBodyContainer>
        <MainPageTitle>{api.title}</MainPageTitle>

        {api.Paragraph1}

        <PageSubTitle extraBottomPadding={true}>{api.subTitle1}</PageSubTitle>

        <EventsGuideLinks />

        <NewPageImage data={saxaphone} alt="Music" extraBottomPadding={true} />

        <PageSemiSubTitle id="ongoing" extraBottomPadding={true}>
          {api.semiSubTitle1}
        </PageSemiSubTitle>

        <PageSubTitle>{api.subTitle2}</PageSubTitle>

        {api.OngoingParagraph}

        <NewPageImage data={dancing} alt="Dancing!" />

        <PageSemiSubTitle>{api.semiSubTitle2}</PageSemiSubTitle>

        <HorizontalRule halfMargin={true} />

        <PageSemiSubTitle id="winter" extraBottomPadding={true}>
          {api.semiSubTitle3}
        </PageSemiSubTitle>

        <PageSubTitle>{api.subTitle3}</PageSubTitle>

        {api.WinterParagraph}

        <NewPageImage data={dining} alt="Drinks" extrabottomPadding={true} />

        <PageSemiSubTitle id="spring" extraBottomPadding={true}>
          {api.semiSubTitle4}
        </PageSemiSubTitle>

        <PageSubTitle>{api.subTitle4}</PageSubTitle>

        {api.SpringParagraph}

        <NewPageImage data={violins} alt="Concert" extraBottomPadding={true} />

        <PageSemiSubTitle id="summer" extraBottomPadding={true}>
          {api.semiSubTitle5}
        </PageSemiSubTitle>

        <PageSubTitle>{api.subTitle5}</PageSubTitle>

        {api.SummerParagraph}

        <NewPageImage
          data={market}
          alt="Farmer's Market"
          extraBottomPadding={true}
        />

        <PageSemiSubTitle id="fall" extraBottomPadding={true}>
          {api.semiSubTitle6}
        </PageSemiSubTitle>

        <PageSubTitle>{api.subTitle6}</PageSubTitle>

        {api.FallParagraph}

        <NewPageImage data={nightlife} alt="Downtown Nightlife" />
      </PageBodyContainer>

      <BottomPadding />

      <Footer />
    </FontContainer>
  );
};

export default SaratogaPerformingArts;
