import * as React from "react";

/**
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
