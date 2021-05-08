import * as React from "react";

// Components
import Header from '../../styledComponents/Header/Header';

// Shared Components
import PageTitle from "../../styledComponents/Shared/PageTitle";
import FontContainer from "../../styledComponents/Shared/FontContainer";
import PageBodyContainer from "../../styledComponents/Shared/PageBodyContainer";

const title = "AMENITIES";

const Amenities = () => {
  return (
    <FontContainer>
      <Header />
      <title>Amenities Page!</title>
      <PageTitle>{title}</PageTitle>
      <PageBodyContainer>Just a test!</PageBodyContainer>
      </FontContainer>
  );
};

export default Amenities;
