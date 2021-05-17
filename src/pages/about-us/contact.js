import * as React from "react";

// Components
import Header from "../../styledComponents/Header/Header";

// Shared Components
import MainPageTitle from "../../styledComponents/Shared/MainPageTitle";
import FontContainer from "../../styledComponents/Shared/FontContainer";
import PageBodyContainer from "../../styledComponents/Shared/PageBodyContainer";
import HorizontalRule from "../../styledComponents/Shared/HorizontalRule";
import Footer from "../../styledComponents/Footer/Footer";

const ContactNow = () => {
  return (
    <FontContainer>
      <Header />
      <PageBodyContainer>
        <MainPageTitle>Contact Us</MainPageTitle>
        <Footer size="larger" />
      </PageBodyContainer>
    </FontContainer>
  );
};

export default ContactNow;
