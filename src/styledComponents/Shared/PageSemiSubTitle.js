import * as React from "react";
import styled from "styled-components";

const H2Container = styled.h2`
  color: #680727;
  font-size: 2.1rem;
  text-transform: uppercase;
  text-align: center;
  letter-spacing: 1px;
  font-weight: 600;
  margin: 0;
  padding: 0;
`;

const PageSemiSubTitle = (props) => {
  const paddingBottom = props.extraBottomPadding ? "25px" : "0";
  if (props.id) {
    return (
      <H2Container id={props.id} style={{ paddingBottom }}>
        {props.children}
      </H2Container>
    );
  } else {
    return (
      <H2Container style={{ paddingBottom }}>{props.children}</H2Container>
    );
  }
};

export default PageSemiSubTitle;
