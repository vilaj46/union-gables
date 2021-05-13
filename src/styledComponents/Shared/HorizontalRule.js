import * as React from "react";
import styled from "styled-components";

const Ruler = styled.hr`
  margin: 40px 0 20px;
  opacity: 0.3;
`;

const HorizontalRule = (props) => {
  const margin = props.halfMargin ? "20px 0" : "40px 0 20px";
  return <Ruler style={{ margin }} />;
};

export default HorizontalRule;
