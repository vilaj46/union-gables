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
 * Reviews Page trip advisor link too large
 *
 * Library Room, Saratoga Room
 * Victoria Room, Wilson Room, Congress Spring, Deer Park Spring
 * State Seal Spring Suite, Charlie Spring Room, Geyser Spring Room
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
