import * as React from "react";

/**
 * Corona Virus Modal:
 * No scrolling available and not scaling properly.
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
