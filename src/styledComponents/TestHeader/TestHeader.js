import * as React from "react";
import styled from "styled-components";

import Logo from "../Header/Logo";
import NavigationPanel from "../Header/NavigationPanel";
import NavigationHamburger from "../Header/NavigationHamburger";
import MessageButtons from "../Header/MessageButtons.js";

import mainImage from "../../images/main_image.jpg";

const Container = styled.header`
  margin: 0 auto;
  position: relative;
  width: 100%;
  height: 100vh;

  @media screen and (max-width: 1300px) {
    height: 97vh;
  }

  @media screen and (max-width: 1200px) {
    height: 96vh;
  }

  @media screen and (max-width: 1100px) {
    height: 92vh;
  }

  @media screen and (max-width: 1000px) {
    height: 80vh;
  }

  @media screen and (max-width: 900px) {
    height: 75vh;
  }

  @media screen and (max-width: 800px) {
    height: 70vh;
  }

  @media screen and (max-width: 700px) {
    height: 65vh;
  }

  @media screen and (max-width: 600px) {
    height: 60vh;
  }

  @media screen and (max-width: 500px) {
    height: 55vh;
  }

  @media screen and (max-width: 400px) {
    height: 50vh;
  }

  @media screen and (max-width: 300px) {
    height: 45vh;
  }
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
