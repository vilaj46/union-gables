import * as React from "react";
import styled from "styled-components";

// Components
import Header from "../../styledComponents/Header/Header";
import Footer from "../../styledComponents/Footer/Footer";

// Shared Components
import MainPageTitle from "../../styledComponents/Shared/MainPageTitle";
import PageImage from "../../styledComponents/Shared/PageImage";
import PageSemiSubTitle from "../../styledComponents/Shared/PageSemiSubTitle";
import PageSubTitle from "../../styledComponents/Shared/PageSubTitle";
import FontContainer from "../../styledComponents/Shared/FontContainer";
import PageParagraph from "../../styledComponents/Shared/PageParagraph";
import BottomPadding from "../../styledComponents/Shared/BottomPadding";
import HorizontalRule from "../../styledComponents/Shared/HorizontalRule";
import PageSubParagraph from "../../styledComponents/Shared/PageSubParagraph";
import PageBodyContainer from "../../styledComponents/Shared/PageBodyContainer";
import PageParagraphLink from "../../styledComponents/Shared/PageParagraphLink";

// Sub Components
import EventsGuideLinks from "../../styledComponents/FestivalsAndEvents/EventsGuideLinks";

import api from "../../api/festivalsAndEventsAPI";

const SaratogaPerformingArts = () => {
  return (
    <FontContainer>
      <Header />
      <PageBodyContainer>
        <MainPageTitle>{api.title}</MainPageTitle>

        {api.Paragraph1}

        <PageSubTitle extraBottomPadding={true}>{api.subTitle1}</PageSubTitle>

        <EventsGuideLinks />

        <PageImage src={api.saxaphone} alt="Music" extraBottomPadding={true} />

        <PageSemiSubTitle id="ongoing" extraBottomPadding={true}>
          {api.semiSubTitle1}
        </PageSemiSubTitle>

        <PageSubTitle>{api.subTitle2}</PageSubTitle>

        {api.OngoingParagraph}
        
        <PageImage src={api.dancing} alt="Dancing" />

        <PageSemiSubTitle>{api.semiSubTitle2}</PageSemiSubTitle>

        <HorizontalRule halfMargin={true} />

        <PageSemiSubTitle id="winter" extraBottomPadding={true}>
          {api.semiSubTitle3}
        </PageSemiSubTitle>

        <PageSubTitle>{api.subTitle3}</PageSubTitle>

        {api.WinterParagraph}

        <PageImage src={api.dining} alt="Drinks" extraBottomPadding={true} />

        <PageSemiSubTitle id="spring" extraBottomPadding={true}>
          {api.semiSubTitle4}
        </PageSemiSubTitle>

        <PageSubTitle>{api.subTitle4}</PageSubTitle>

        {api.SpringParagraph}

        <PageImage src={api.violins} alt="Music" extraBottomPadding={true} />

        <PageSemiSubTitle id="summer" extraBottomPadding={true}>
          {api.semiSubTitle5}
        </PageSemiSubTitle>

        <PageSubTitle>{api.subTitle5}</PageSubTitle>

        {api.SummerParagraph}

        <PageImage
          src={api.market}
          alt="Farmer's Market"
          extraBottomPadding={true}
        />

        <PageSemiSubTitle id="fall" extraBottomPadding={true}>
          {api.semiSubTitle6}
        </PageSemiSubTitle>

        <PageSubTitle>{api.subTitle6}</PageSubTitle>

        {api.FallParagraph}

        <PageImage src={api.nightlife} alt="Downtown" />

      </PageBodyContainer>

      <BottomPadding />
      
      <Footer />
    </FontContainer>
  );
};

export default SaratogaPerformingArts;
