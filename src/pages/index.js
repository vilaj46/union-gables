import * as React from "react";

/**
 * Change alt in NewPageImages
 */

// Pages
import HomePage from "./HomePage/HomePage";

// Shared
import FontContainer from "../styledComponents/Shared/FontContainer";

// Components
import Header from "../styledComponents/Header/Header";
import Footer from "../styledComponents/Footer/Footer";

// styles
import "./style.css";

const IndexPage = () => {
  return (
    <FontContainer>
      <Header />
      <HomePage />
      <Footer />
    </FontContainer>
  );
};

export default IndexPage;
