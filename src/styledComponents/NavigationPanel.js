import * as React from "react";
import styled from "styled-components";

import headerItems from "../components/Header/headerItems.js";

import NavigationItem from "../components/Header/subs/NavigationItem/NavigationItem";

const Container = styled.nav`
  display: flex;
  padding-top: 30px;
  font-size: 1rem;
  max-width: 960px;
  margin: 0 auto;
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
