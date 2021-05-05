import * as React from "react";
import styled from "styled-components";

// Shared Components
import PageTitle from "../styledComponents/Shared/PageTitle";

const Container = styled.div`
  // border: 2px solid black;
`;

const CustomContainer = styled.div`
  max-width: 960px;
  margin: 0 auto;

  @media screen and (max-width: 300px) {
    padding-top: 25px;
  }
`;

const title = "BREAKFAST BASKET";

const Breakfast = () => {
  return (
    <Container>
      <title>Breakfast Page!</title>
      <PageTitle>{title}</PageTitle>
      {/* <CustomContainer></CustomContainer> */}
    </Container>
  );
};

export default Breakfast;
