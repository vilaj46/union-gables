import * as React from "react";
import styled from "styled-components";

import headerItems from "../../api/headerItems.js";

import NavigationItem from "./NavigationItem";

const Container = styled.nav`
  display: flex;
  max-width: 960px;
  margin: 0 auto;
  justify-content: space-around;

  @media screen and (max-width: 600px) {
    flex-direction: column;
  }
`;

const NavigationPanel = (props) => {
  return (
    <Container>
      {headerItems.map((item) => (
        <NavigationItem item={item} key={item.url} />
      ))}
    </Container>
  );
};
export default NavigationPanel;
