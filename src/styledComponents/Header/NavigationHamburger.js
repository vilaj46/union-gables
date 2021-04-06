import * as React from "react";
import styled from "styled-components";

import HamburgerItems from "./HamburgerItems";

const Container = styled.div`
  display: block;
  position: relative;
  
  @media screen and (min-width: 601px) {
    display: none;
  }
`;

const HoverContainer = styled.div`
  &:hover {
    cursor: pointer;
  }
`;

const Bar = styled.div`
  width: 35px;
  height: 5px;
  background-color: #ffffff;
  margin: 6px 0;
  transition: 0.4s;
  cursor: pointer;
`;

const NavigationHamburger = () => {
  const [activated, setActivated] = React.useState(false);

  const bar1 = {
    transform: "rotate(-45deg) translate(-9px, 6px)",
  };
  const bar2 = {
    opacity: 0,
  };
  const bar3 = {
    transform: "rotate(45deg) translate(-8px, -8px)",
  };

  return (
    <Container>
      <HoverContainer onClick={() => setActivated(!activated)}>
        <Bar style={activated ? bar1 : {}} />
        <Bar style={activated ? bar2 : {}} />
        <Bar style={activated ? bar3 : {}} />
      </HoverContainer>
      {activated && <HamburgerItems />}
    </Container>
  );
};
export default NavigationHamburger;
