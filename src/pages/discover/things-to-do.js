import * as React from "react";

// Components
import Header from "../../styledComponents/Header/Header";
import Footer from "../../styledComponents/Footer/Footer";

// Shared Components
import PageTitle from "../../styledComponents/Shared/PageTitle";
import PageSubTitle from "../../styledComponents/Shared/PageSubTitle";
import PageImage from "../../styledComponents/Shared/PageImage";
import PageImages from "../../styledComponents/Shared/PageImages";
import PageQuote from "../../styledComponents/Shared/PageQuote";
import PageParagraph from "../../styledComponents/Shared/PageParagraph";
import FontContainer from "../../styledComponents/Shared/FontContainer";
import PageBodyContainer from "../../styledComponents/Shared/PageBodyContainer";
import HorizontalRule from "../../styledComponents/Shared/HorizontalRule";

// Images

const title = "Things to Do in Saratoga Springs, NY";

const SaratogaThingsToDo = () => {
  return (
    <FontContainer>
      <Header />
      <title>Saratoga Things To Do Page!</title>
      <PageTitle>{title}</PageTitle>
      <PageBodyContainer></PageBodyContainer>
      <Footer />
    </FontContainer>
  );
};

export default SaratogaThingsToDo;
