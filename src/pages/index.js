import * as React from "react";

/**
 * Discover Saratoga Links
 * Add Space in Good to Know
 * Gray block above 3 reasons
 * Footer
 *
 *
 *
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
// import Footer from "../components/Footer/Footer.js";

// styles
import "./style.css";

const IndexPage = () => {
  return (
    <FontContainer>
      <Header />
      <HomePage />
      {/*<Footer /> */}
    </FontContainer>
  );
};

export default IndexPage;
