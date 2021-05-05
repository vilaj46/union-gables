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

const Header = () => {
  const [height, setHeight] = React.useState(0);
  const [loaded, setLoaded] = React.useState(false);

  React.useEffect(() => {
    if (!loaded) {
      setLoaded(true);
      if (window.innerWidth > 1100) {
        setHeight(document.getElementById("mainBackgroundImage").offsetHeight);
      } else {
        const percent = (63 * window.innerWidth) / 100 - 50;
        setHeight(percent);
      }
    }

    const handleResize = () => {
      if (window.innerWidth > 1100) {
        setHeight(document.getElementById("mainBackgroundImage").offsetHeight);
      } else {
        const percent = (63 * window.innerWidth) / 100 - 50;
        setHeight(percent);
      }
    };
    window.addEventListener("resize", handleResize);
  }, [loaded]);

  return (
    <Container style={{ height: height + "px" }}>
      <Logo />
      <BackgroundImage id="mainBackgroundImage" />
      <NavigationPanel />
      <BelowContainer>
        <NavigationHamburger />
        <MessageButtons />
      </BelowContainer>
    </Container>
  );
};

export default Header;
