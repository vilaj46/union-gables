import * as React from "react";
import BackgroundImage from "gatsby-background-image";

const ThreeReasonsBackground = (props) => {
  return (
    <BackgroundImage
      alt={props.alt}
      style={{
        display: "block",
        position: "static",
        zIndex: "-1",
        minHeight: "450px",
      }}
      fluid={props.data.node.childImageSharp.fluid}
    />
  );
};

export default ThreeReasonsBackground;
