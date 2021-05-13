import * as React from "react";

/**
 * Footer styling.
 *
 * Do we need to include "alt" property in the API?
 * Page Images needs a better "alt"
 * Shorten link names?
 * 
 * Image in amenities is larger than the other.
 * 
 * Spacing on the main page title is messed up when the developer
 * tab is off.
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
