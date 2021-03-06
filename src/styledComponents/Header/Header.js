import * as React from "react";
import styled from "styled-components";

import Logo from "../Header/Logo";
import NavigationPanel from "../Header/NavigationPanel";
import NavigationHamburger from "../Header/NavigationHamburger";
import MessageButtons from "../Header/MessageButtons.js";

import mainImage from "../../images/header/main_image.jpg";

const Container = styled.header`
  margin: 0 auto;
  position: relative;
  width: 100%;
  height: 100vh;

  @media screen and (min-width: 1100px) {
    height: 50vh;
  }

  @media screen and (max-width: 600px) {
    display: flex;
  }
`;

const BackgroundImage = styled.div`
  background-size: 100%;
  width: 100%;
  height: 100vh;
  margin: 0;
  padding: 0;
  background-repeat: no-repeat;
  position: absolute;
  top: 0;
  z-index: -1;

  @media screen and (min-width: 1100px) {
    height: 50vh;
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
`;

const HideMessagesContainer = styled.div`
  @media screen and (max-width: 600px) {
    display: none;
  }
`;

const Header = ({ image = "" }) => {
  const [height, setHeight] = React.useState(0);
  const [loaded, setLoaded] = React.useState(false);

  React.useEffect(() => {
    if (!loaded) {
      setLoaded(true);
      if (window.innerWidth < 1200 && window.innerWidth > 1100) {
        const body = document.querySelector("body");
        const percent = (43 * body.clientWidth) / 100;
        setHeight(percent);
      } else if (window.innerWidth > 1100) {
        setHeight(document.getElementById("mainBackgroundImage").offsetHeight);
      } else {
        const percent = (63 * window.innerWidth) / 100 - 50;
        setHeight(percent);
      }
    }

    const handleResize = () => {
      if (window.innerWidth < 1200 && window.innerWidth > 1099) {
        const body = document.querySelector("body");
        const percent = (43 * body.clientWidth) / 100;
        setHeight(percent);
      } else if (window.innerWidth > 1100) {
        setHeight(document.getElementById("mainBackgroundImage").offsetHeight);
      } else {
        const percent = (63 * window.innerWidth) / 100 - 50;
        setHeight(percent);
      }
    };
    window.addEventListener("resize", handleResize);
  }, [loaded]);

  let customImage = image === "" ? mainImage : image;

  return (
    <Container style={{ height: height + "px" }}>
      <BackgroundImage
        id="mainBackgroundImage"
        style={{ backgroundImage: `url(${customImage})` }}
      />
      <NavigationPanel />
      <Logo />
      <BelowContainer>
        <NavigationHamburger />
        <HideMessagesContainer>
          <MessageButtons />
        </HideMessagesContainer>
      </BelowContainer>
    </Container>
  );
};

export default Header;

// const handleResize = () => {
//   console.log(window.innerWidth);
//   if (window.innerWidth < 1675 && window.innerWidth > 1100) {
//     const body = document.querySelector("body");
//     const percent = (57 * body.clientWidth) / 100;
//     setHeight(percent);
//   } else if (window.innerWidth > 1100) {
//     setHeight(document.getElementById("mainBackgroundImage").offsetHeight);
//   } else {
//     const percent = (63 * window.innerWidth) / 100 - 50;
//     setHeight(percent);
//   }
// };
