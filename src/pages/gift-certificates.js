import * as React from "react";
import styled from "styled-components";
import { Link } from "gatsby";

// Components
import Header from "../styledComponents/Header/Header";
import Footer from "../styledComponents/Footer/Footer";

// Shared Components
import MainPageTitle from "../styledComponents/Shared/MainPageTitle";

import FontContainer from "../styledComponents/Shared/FontContainer";
import BottomPadding from "../styledComponents/Shared/BottomPadding";
import PageBodyContainer from "../styledComponents/Shared/PageBodyContainer";
import api from "../api/giftCertificatesAPI";

const BookNowContainer = styled.li`
  background-color: #b25a75;
  color: #ffffff;
  list-style-type: none;
  text-decoration: none;
  text-transform: uppercase;
  padding: 14px 16px;
  white-space: nowrap;
  text-align: center;
  margin-bottom: 40px;

  &:hover {
    background-color: #680727;
    cursor: pointer;
  }

  @media screen and (max-width: 815px) {
    font-size: 0.8rem;
  }

  @media screen and (max-width: 815px) {
    padding: 5px 8px;
  }
`;

const BookNowLink = styled(Link)`
  color: #ffffff;
  text-decoration: none;
`;

const GiftCertificates = () => {
  return (
    <FontContainer>
      <Header />
      <PageBodyContainer>
        <MainPageTitle>{api.title}</MainPageTitle>
        {api.Section1}

        <BookNowContainer>
          <BookNowLink
            to="https://reserve1.resnexus.com/resnexus/reservations/lodging/5888F13B-7306-4082-89C2-B6F42CC9CD92?ID=2704"
            target="_blank"
          >
            PURCHASE YOUR GIFT CERTIFICATE
          </BookNowLink>
        </BookNowContainer>

        {api.Section2}
      </PageBodyContainer>
      <BottomPadding />
      <Footer />
    </FontContainer>
  );
};

export default GiftCertificates;
