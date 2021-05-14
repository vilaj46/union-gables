import * as React from "react";

// Components
import Header from "../../styledComponents/Header/Header";
import Footer from "../../styledComponents/Footer/Footer";

// Shared Components
import MainPageTitle from "../../styledComponents/Shared/MainPageTitle";
import FontContainer from "../../styledComponents/Shared/FontContainer";
import BottomPadding from "../../styledComponents/Shared/BottomPadding";
import PageBodyContainer from "../../styledComponents/Shared/PageBodyContainer";

import PageImage from "../../styledComponents/Shared/PageImage";
import PageImages from "../../styledComponents/Shared/PageImages";
import PageSubTitle from "../../styledComponents/Shared/PageSubTitle";
import HorizontalRule from "../../styledComponents/Shared/HorizontalRule";

import api from "../../api/amenitiesAPI";

const Amenities = () => {
  return (
    <FontContainer>
      <Header />
      <PageBodyContainer>
        <MainPageTitle>{api.title}</MainPageTitle>
        {api.Paragraph1}

        <PageImages images={[api.benedict, api.pool]} />

        <PageImages images={[api.billiards, api.fireplace]} />

        <PageSubTitle>{api.subTitle1}</PageSubTitle>

        {api.Paragraph2}

        {api.Paragraph3}

        <PageSubTitle>{api.subTitle2}</PageSubTitle>

        {api.Paragraph4Half}

        <PageImage src={api.loungechairs} alt="Lounge Chairs" />

        <PageImages images={[api.statue, api.pool]} />

        <PageSubTitle>{api.subTitle3}</PageSubTitle>

        {api.Paragraph4}

        <PageSubTitle>{api.subTitle4}</PageSubTitle>

        {api.Paragraph5}

        <PageSubTitle>{api.subTitle5}</PageSubTitle>

        {api.Paragraph6}

        <PageImages images={[api.garden, api.garden2]} />

        <PageImages
          images={[api.porch, api.loungechairs2]}
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
