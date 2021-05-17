import * as React from "react";

// Components
import Header from "../../styledComponents/Header/Header";

// Shared Components
import Footer from "../../styledComponents/Footer/Footer";
import MainPageTitle from "../../styledComponents/Shared/MainPageTitle";
import FontContainer from "../../styledComponents/Shared/FontContainer";
import BottomPadding from "../../styledComponents/Shared/BottomPadding";
import PageBodyContainer from "../../styledComponents/Shared/PageBodyContainer";

import api from "../../api/reservationPoliciesAPI";

const title = "Reservation Policies";

const ReservationPolicies = () => {
  return (
    <FontContainer>
      <Header />
      <PageBodyContainer>
        <MainPageTitle>{title}</MainPageTitle>
        {api.Section1}

        {api.Section2}

        {api.Section3}

        {api.Section4}

        {api.Section5}

        {api.Section6}

        {api.Section7}

        {api.Section8}

        {api.Section9}

        {api.Section10}

        {api.Section11}
      </PageBodyContainer>
      <BottomPadding />
      <Footer />
    </FontContainer>
  );
};

export default ReservationPolicies;
