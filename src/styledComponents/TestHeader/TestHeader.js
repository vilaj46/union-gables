import * as React from "react";
import styled from "styled-components";

import Logo from "../Header/Logo";
import NavigationPanel from "../Header/NavigationPanel";
import NavigationHamburger from "../Header/NavigationHamburger";
import MessageButtons from "../Header/MessageButtons.js";

import mainImage from "../../images/main_image.jpg";

const Container = styled.header`
  width: 100%;
  //   max-width: 1350px;
  margin: 0 auto;
  position: relative;
`;

const BackgroundImage = styled.div`
  background-image: url(${mainImage});
  background-size: 100%;
  width: 100%;
  height: 100vh;
  margin: 0;
  padding: 0;
  background-repeat: no-repeat;
  position: absolute;
  top: 0;
  z-index: -1;
`;

const BelowContainer = styled.div`
  display: flex;
  flex-direction: row;
  margin: 0 auto;
  justify-content: flex-end;
  padding-top: 15px;

  @media screen and (max-width: 600px) {
    width: 85%;
    margin: 0 auto;
    justify-content: space-around;
  }

  @media screen and (max-width: 350px) {
    padding-top: 0;
  }
`;

const TestHeader = () => {
  return (
    <Container>
      <Logo />
      <BackgroundImage />
      <NavigationPanel />
      <BelowContainer>
        <NavigationHamburger />
        <MessageButtons />
      </BelowContainer>
    </Container>
  );
};

export default TestHeader;
