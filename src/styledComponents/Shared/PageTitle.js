import * as React from "react";
import styled from "styled-components";

const H1Container = styled.h1`
  color: #aa4465;
  font-size: 36px;
  text-transform: uppercase;
  text-align: center;
`;

const PageTitle = (props) => {
  return <H1Container>{props.children}</H1Container>;
};

export default PageTitle;
