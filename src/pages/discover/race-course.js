import * as React from "react";

// Components
import Header from "../../styledComponents/Header/Header";
import Footer from "../../styledComponents/Footer/Footer";

// Shared Components
import PageImage from "../../styledComponents/Shared/PageImage";
import PageQuote from "../../styledComponents/Shared/PageQuote";
import PageImages from "../../styledComponents/Shared/PageImages";
import PageSubTitle from "../../styledComponents/Shared/PageSubTitle";
import MainPageTitle from "../../styledComponents/Shared/MainPageTitle";
import FontContainer from "../../styledComponents/Shared/FontContainer";
import BottomPadding from "../../styledComponents/Shared/BottomPadding";
import HorizontalRule from "../../styledComponents/Shared/HorizontalRule";
import PageBodyContainer from "../../styledComponents/Shared/PageBodyContainer";

import api from "../../api/raceCourseAPI";

const SaratogaRaceCourse = () => {
  return (
    <FontContainer>
      <Header />

      <PageBodyContainer>
        <MainPageTitle>{api.title}</MainPageTitle>

        {api.Paragraph1}

        <PageImage src={api.racetrack} alt="Race Course" />

        <PageImages
          images={[api.race, api.jockeys]}
          extraBottomPadding={true}
        />

        <PageSubTitle>{api.subTitle1}</PageSubTitle>

        {api.Paragraph2}

        <PageSubTitle>{api.subTitle2}</PageSubTitle>

        <PageSubTitle>{api.subTitle3}</PageSubTitle>

        {api.Paragraph4}

        <PageImage src={api.horse} alt="White Horse" />

        <PageSubTitle>{api.subTitle4}</PageSubTitle>

        {api.Paragraph5}

        <PageSubTitle>{api.subTitle5}</PageSubTitle>

        {api.Paragraph6}

        <PageSubTitle>{api.subTitle6}</PageSubTitle>

        {api.Paragraph7}

        <HorizontalRule />

        <PageQuote>{api.quote}</PageQuote>
      </PageBodyContainer>

      <BottomPadding />

      <Footer />
    </FontContainer>
  );
};

export default SaratogaRaceCourse;
