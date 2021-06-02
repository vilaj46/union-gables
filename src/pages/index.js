import * as React from "react";

/**
 * Fix Header try and get custom image in the header.
 * Sticky header
 *
 * Figure out how to handle images per page.
 *
 * Social media icons need a hover effect.
 *
 * Pet Friendly needs bottom links
 *
 * Go over images make sure they are not blurry
 * Spacing on the main page titles.
 * Look at hamburger menu
 * spacing on all rooms texts
 * add beds to the rooms pages
 * restyle room format
 *
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
