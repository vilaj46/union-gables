import * as React from "react";
import styled from "styled-components";

const H2Container = styled.h2`
  color: #350313;
  font-size: 1.6rem;
  text-transform: uppercase;
  text-align: center;
  padding-top: 20px;
  margin-bottom: 0;
  letter-spacing: 1px;
  font-weight: 600;
`;

const PageSubTitle = (props) => {
  return <H2Container>{props.children}</H2Container>;
};

export default PageSubTitle;
