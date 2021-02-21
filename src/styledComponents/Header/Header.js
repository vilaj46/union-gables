import * as React from "react";
import styled from "styled-components";

import Logo from "./Logo";
import NavigationPanel from "./NavigationPanel";

import mainImage from "../../images/main_image.jpg";

const Container = styled.header`
  width: 100%;
  max-width: 1350px;
  margin: 0 auto;

  @media screen and (max-width: 1400px) {
    max-width: 980px;
    font-size: 0.8rem;
  }

  @media screen and (max-width: 1000px) {
    max-width: 740px;
  }

  @media screen and (max-width: 900px) {
    min-width: 100%;
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
`;

const Background = (props) => {
  return <BackgroundImage src={props.src} alt={props.alt} />;
};

const Header = () => {
  return (
    <Container>
      <Logo />
      <Background src={mainImage} alt="Night Union Gables Inn" />
      <NavigationPanel />
    </Container>
  );
};

export default Header;
