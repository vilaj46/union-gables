import * as React from "react";
import styled from "styled-components";

// Components
import Header from '../../styledComponents/Header/Header';
import Footer from "../../styledComponents/Footer/Footer";

// Shared Components
import MainPageTitle from "../../styledComponents/Shared/MainPageTitle";
import FontContainer from "../../styledComponents/Shared/FontContainer";
import PageBodyContainer from "../../styledComponents/Shared/PageBodyContainer";
import BottomPadding from "../../styledComponents/Shared/BottomPadding";

import api from "../../api/breakfastAPI";

import PageImage from "../../styledComponents/Shared/PageImage";

const Breakfast = () => {
  return (
    <FontContainer>
      <Header />
      <MainPageTitle>{api.title}</MainPageTitle>
      <PageBodyContainer>
        {api.Paragraph1}

        <PageImage src={api.benedict} alt="Eggs Benedict" />

        {api.Paragraph2}

        <PageImage src={api.toast} alt="Eggs and Toast" />

        {api.Paragraph3}

        <iframe width="95%" height="315"
          src="https://www.youtube.com/embed/lLu-Hkdum0I"
          allowFullScreen=""
          frameBorder="0"
          style={{display: "block", margin: "0 auto"}}
        >
        </iframe>

      </PageBodyContainer>
      <BottomPadding />
      <Footer />
      </FontContainer>
  );
};

export default Breakfast;
