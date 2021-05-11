import * as React from "react";
import styled from "styled-components";

const H2Container = styled.h2`
  color: #350313;
  font-size: 1.9rem;
  text-transform: uppercase;
  text-align: center;
  letter-spacing: 1px;
  font-weight: 600;
  margin: 0;
  padding: 0;
`;

const PageSubTitle = (props) => {
  return <H2Container>{props.children}</H2Container>;
};

export default PageSubTitle;
