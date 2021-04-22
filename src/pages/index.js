import * as React from "react";

/**
 * TestHeader component needs many more media queries for scaling.
 * Percent not working.
 *
 * Not using ThreeReasons, instead using ThreeReason2.
 * Delete ThreeReasons.
 *
 * Not using Header, instead using TestHeader.
 * Delete Header.
 *
 * Need Page page links.
 *
 * ThreeReasons image on full screen is too zoomed in.
 */

// Pages
import HomePage from "./HomePage/HomePage";

// Components
import Header from "../styledComponents/Header/Header";
import TestHeader from "../styledComponents/TestHeader/TestHeader";
// import Footer from "../components/Footer/Footer.js";

// styles
import styles from "./Index.module.css";
import "./style.css";

const IndexPage = () => {
  return (
    <main className={styles.mainPage} id="main">
      {/* <Header /> */}
      <TestHeader />
      <HomePage />
      {/*<Footer /> */}
    </main>
  );
};

export default IndexPage;
