import * as React from "react";
import styled from "styled-components";

const H2Container = styled.h2`
  color: #350313;
  font-size: 24px;
  text-transform: uppercase;
  text-align: center;
  padding-top: 20px;
`;

const PageSubTitle = (props) => {
  return <H2Container>{props.children}</H2Container>;
};

export default PageSubTitle;
