import * as React from "react";

/**
 * Need Page page links.
 * 
 * Space navigation links on smaller screens.
 * They are overflowing the main image.
 * 
 * Warning in the Header
 * 
 * Minimizing causing problems before hamburger appears.
 * 
 * Even after hamburger appears there is 'x' scrolling available.
 * 
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
