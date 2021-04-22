import * as React from "react";
import styled from "styled-components";

const Ruler = styled.hr`
  margin: 40px 0 20px;
  opacity: 0.3;
`;

const HorizontalRule = (props) => {
  return <Ruler />;
};

export default HorizontalRule;
