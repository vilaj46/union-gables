import * as React from "react";

// Components
import Header from '../../styledComponents/Header/Header';

// Shared Components
import PageTitle from "../../styledComponents/Shared/PageTitle";
import FontContainer from "../../styledComponents/Shared/FontContainer";
import PageBodyContainer from "../../styledComponents/Shared/PageBodyContainer";

const title = "Reservation Policies";

const ReservationPolicies = () => {
  return (
    <FontContainer>
      <Header />
      <title>Reservation Policies Page!</title>
      <PageTitle>{title}</PageTitle>
      <PageBodyContainer>Just a test!</PageBodyContainer>
      </FontContainer>
  );
};

export default ReservationPolicies;
