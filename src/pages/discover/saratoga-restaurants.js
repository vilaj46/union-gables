import * as React from "react";

// Components
import Header from "../../styledComponents/Header/Header";
import Footer from "../../styledComponents/Footer/Footer";

// Shared Components
import PageTitle from "../../styledComponents/Shared/PageTitle";
import PageSubTitle from "../../styledComponents/Shared/PageSubTitle";
import PageImages from "../../styledComponents/Shared/PageImages";
import PageParagraph from "../../styledComponents/Shared/PageParagraph";
import FontContainer from "../../styledComponents/Shared/FontContainer";
import PageBodyContainer from "../../styledComponents/Shared/PageBodyContainer";
import HorizontalRule from "../../styledComponents/Shared/HorizontalRule";

import BottomPadding from "../../styledComponents/Shared/BottomPadding";

// Images
import mainImage from "../../images/saratogaPerformingArts.jpg";
import mainImage1 from "../../images/saratogaPerformingArts1.jpg";
import mainImage2 from "../../images/saratogaPerformingArts2.jpg";
import mainImage3 from "../../images/saratogaPerformingArts3.jpg";

const title = "Places to Eat in Saratoga Springs, NY";

const splitImages = [mainImage, mainImage1];
const splitImages2 = [mainImage2, mainImage3];

const SaratogaPerformingArts = () => {
  return (
    <FontContainer>
      <Header />
      <title>Saratoga Restaurants Page!</title>
      <PageTitle>{title}</PageTitle>
      <PageBodyContainer></PageBodyContainer>
      <BottomPadding />
      <Footer />
    </FontContainer>
  );
};

export default SaratogaPerformingArts;
