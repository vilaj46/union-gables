import * as React from "react";
import styled from "styled-components";

// Components
import Header from "../../styledComponents/Header/Header";
import Footer from "../../styledComponents/Footer/Footer";

// Shared Components
import MainPageTitle from "../../styledComponents/Shared/MainPageTitle";
import PageSubTitle from "../../styledComponents/Shared/PageSubTitle";
import PageImage from "../../styledComponents/Shared/PageImage";
import PageImages from "../../styledComponents/Shared/PageImages";
import PageQuote from "../../styledComponents/Shared/PageQuote";
import FontContainer from "../../styledComponents/Shared/FontContainer";
import PageBodyContainer from "../../styledComponents/Shared/PageBodyContainer";
import HorizontalRule from "../../styledComponents/Shared/HorizontalRule";
import BottomPadding from "../../styledComponents/Shared/BottomPadding";

// Sub Components
import AtThePark from "../../styledComponents/SpaStatePark/AtThePark";
import History from "../../styledComponents/SpaStatePark/History";
import Charts from "../../styledComponents/SpaStatePark/Charts";

import api from "../../api/spaStateParkAPI";

const SpecialPageTitle = styled.h2`
  color: #680727;
  font-size: 1.8rem;
  text-transform: uppercase;
  text-align: center;
  letter-spacing: 1px;
  font-weight: 600;
  margin-bottom: -30px;
`;

const SaratogaSpaStatePark = () => {
  return (
    <FontContainer>
      <Header />
      <PageBodyContainer>
        <MainPageTitle>{api.title}</MainPageTitle>

        {api.Paragraph1}

        <PageImages images={[api.park, api.bridge]} extraBottomPadding={true} />

        <PageSubTitle>{api.subTitle1}</PageSubTitle>

        <AtThePark />

        <History />

        <PageImage
          src={api.river}
          alt="Water and River"
          extraBottomPadding={true}
        />

        <PageSubTitle>{api.subTitle2}</PageSubTitle>

        {api.Paragraph2}

        <PageSubTitle>{api.subTitle3}</PageSubTitle>

        {api.Paragraph3}

        <SpecialPageTitle>{api.subTitle4}</SpecialPageTitle>

        <HorizontalRule />

        {api.Paragraph4}

        <PageSubTitle>{api.subTitle5}</PageSubTitle>

        {api.Paragraph5}

        <PageSubTitle>{api.subTitle6}</PageSubTitle>

        {api.Paragraph6}

        <PageSubTitle>{api.subTitle7}</PageSubTitle>

        {api.Paragraph7}

        <Charts />

        <HorizontalRule />

        <PageQuote>{api.quote}</PageQuote>
      </PageBodyContainer>

      <BottomPadding />

      <Footer />
    </FontContainer>
  );
};

export default SaratogaSpaStatePark;
