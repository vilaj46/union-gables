import * as React from "react";
import BackgroundImage from "gatsby-background-image";

const ThreeReasonsBackground = (props) => {
  const setFluid = (data) => {
    if (data && Object.keys(data).length > 0) {
      return data.node.childImageSharp.fluid;
    }
  };
  return (
    <BackgroundImage
      alt={props.alt}
      style={{
        display: "block",
        position: "static",
        zIndex: "-1",
        minHeight: "450px",
      }}
      fluid={setFluid(props.data)}
    />
  );
};

export default ThreeReasonsBackground;
