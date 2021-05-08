import * as React from "react";

// Components
import Header from '../../styledComponents/Header/Header';

// Shared Components
import PageTitle from "../../styledComponents/Shared/PageTitle";
import FontContainer from "../../styledComponents/Shared/FontContainer";
import PageBodyContainer from "../../styledComponents/Shared/PageBodyContainer";

const title = "BREAKFAST BASKET";

const Breakfast = () => {
  return (
    <FontContainer>
      <Header />
      <title>Breakfast Page!</title>
      <PageTitle>{title}</PageTitle>
      <PageBodyContainer>Just a test!</PageBodyContainer>
      </FontContainer>
  );
};

export default Breakfast;
