import * as React from "react";
import styled from "styled-components";

import Logo from "./Logo";
import NavigationPanel from "./NavigationPanel";
import NavigationHamburger from "./NavigationHamburger";
import MessageButtons from "./MessageButtons.js";

import mainImage from "../../images/main_image.jpg";

const Container = styled.header`
  width: 100%;
  max-width: 1350px;
  margin: 0 auto;
  position: relative;

  @media screen and (max-width: 1400px) {
    font-size: 0.8rem;
  }

  @media screen and (max-width: 600px) {
    display: flex;
    flex-direction: column;
  }
`;

const BackgroundImage = styled.img`
  position: absolute;
  z-index: -1;
  top: 0;
  left: 0;
  max-width: 100%;
  height: auto;
  width: auto;
  transform: scale(1.1); 

  @media screen and (max-width: 730px) {
    height: 225%;
  }

  @media screen and (max-width: 350px) {
    height: 260%;
  }

  @media screen and (max-width: 300px) {
    height: 270%;
  }
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
`

const Background = (props) => {
  return <BackgroundImage src={props.src} alt={props.alt} />;
};

const Header = () => {
  return (
    <Container>
      <Logo />
      <Background src={mainImage} alt="Night Union Gables Inn" />
      <NavigationPanel />
      <BelowContainer>
        <NavigationHamburger />
        <MessageButtons />
      </BelowContainer>
    </Container>
  );
};

export default Header;
