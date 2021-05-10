import * as React from "react";

/**
 * Discover Saratoga Links - Make pages for the section.
 * Gray block above 3 reasons
 *
 *
 * Spacing below 3 reasons to stay with us is weird.
 * Not using CoronaModal
 */

/**
 * Created font container as a shared component.'
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
