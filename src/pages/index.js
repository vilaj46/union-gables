import * as React from "react";
/**
 * Need to add google analytics tracking id.
 *
 * Mobile styling on the header.
 * Change color schemes and get photo.
 * The maroons need to be more contrast and the gray is too dark.
 *
 * The spacing on smaller screens seems to be slightly messed up. IE on the laptop.
 * Font size needs improvement.
 *
 * Need to fill in links for the navigation items + check spelling.
 *
 *
 * TODO: Ignore image on main page and continue AWARD-WINNING section.
 *
 * Remove unecessary code such as unused images.
 * Make it so Tj can add items easier if wanted.
 *
 * Fix gradient and gray background.
 */

// Pages
// import HomePage from "./HomePage";
import HomePage from "./HomePage/HomePage";

// Components
import Header from "../styledComponents/Header/Header";
// import Footer from "../components/Footer/Footer.js";

// styles
import styles from "./Index.module.css";
import "./style.css";

const IndexPage = () => {
  return (
    <main className={styles.mainPage} id="main">
      <Header />
      <HomePage />
      {/*<Footer /> */}
    </main>
  );
};

export default IndexPage;
