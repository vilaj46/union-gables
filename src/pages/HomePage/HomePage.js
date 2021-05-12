import * as React from "react";

// API Components
import api from "../../api/homepageAPI";

// Shared Components
import MainPageTitle from "../../styledComponents/Shared/MainPageTitle";
import PageImage from "../../styledComponents/Shared/PageImage";
import PageQuote from "../../styledComponents/Shared/PageQuote";
import PageSubTitle from "../../styledComponents/Shared/PageSubTitle";
import HorizontalRule from "../../styledComponents/Shared/HorizontalRule";
import PageBodyContainer from "../../styledComponents/Shared/PageBodyContainer";
import BottomPadding from "../../styledComponents/Shared/BottomPadding";

// HomePage Components
import ThreeReasons from "../../styledComponents/HomePage/ThreeReasons";
import DiscoverLinks from "../../styledComponents/HomePage/DiscoverLinks";

const HomePage = () => {
  return (
    <div>
      <PageBodyContainer>
        <MainPageTitle>{api.title}</MainPageTitle>

        {api.Paragraph1}

        <PageImage
          src={api.statue}
          alt="Pool and Garden"
          extraBottomPadding={true}
        />

        <PageSubTitle>{api.subTitle1}</PageSubTitle>

        {api.Paragraph2}

        <PageImage
          src={api.jockey}
          alt="Race Track"
          extraBottomPadding={true}
        />

        <PageSubTitle>{api.subTitle2}</PageSubTitle>

        {api.Paragraph3}

        <DiscoverLinks />

        <HorizontalRule />

        <PageQuote>{api.quote}</PageQuote>

        <PageSubTitle>{api.subTitle3}</PageSubTitle>

        {api.Paragraph4}

        {api.Paragraph5}

        {api.Paragraph6}

        {api.Paragraph7}
      </PageBodyContainer>

      <ThreeReasons />

      <BottomPadding />
    </div>
  );
};

export default HomePage;
