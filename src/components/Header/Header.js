import * as React from "react";
import styled from "styled-components";

import styles from "./Header.module.css";

// Sub Components
// import NavigationItem from "./subs/NavigationItem/NavigationItem";
import Logo from "../../styledComponents/Logo";
import NavigationPanel from "../../styledComponents/NavigationPanel";

import mainImage from "../../images/main_image.jpg";

const Container = styled.header`
  padding-top: 20px;
  padding-bottom: 150px;
  width: 100%;
  max-width: 1350px;
  margin: 0 auto;
  border: none;
  display: flex;

  @media screen and (max-width: 1400px) {
    max-width: 980px;
  }

  @media screen and (max-width: 1000px) {
    max-width: 740px;
    flex-direction: column;
  }
`;

// Fallback if main image does not load.
// background-image: linear-gradient(to bottom,rgba(0,0,0,.5) 0%,rgba(0,0,0,0) 340px);

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

const Header = (props) => {
  // Slide show on main page.
  // Image on other pages.
  return (
    <Container>
      <Logo />
      <Background src={mainImage} alt="Night Union Gables Inn" />
      <NavigationPanel />
      {/* <nav className={styles.nav}>
        {headerItems.map((item) => (
          <NavigationItem item={item} key={item.url} />
        ))}
      </nav> */}
    </Container>
  );
};

export default Header;
