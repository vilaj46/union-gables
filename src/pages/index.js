import * as React from "react";

/**
 * Clean DiscoverLinks file and 3 Reasons File (Also, add 3 reason to the API).
 * Footer styling.
 * Complete charts and other nonsensein the page.
 * Needs links in the pages we've created.
 *
 * Do we need to include "alt" property in the API?
 * PPage Images needs a better "alt"
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
