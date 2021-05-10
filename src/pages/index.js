import * as React from "react";

/**
 * Discover Saratoga Links - Make pages for the section.
 *
 * Complete charts and other nonsensein the page.
 * Needs links in the pages we've created.
 * Bottom Paddding does not fill a large screen.
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
