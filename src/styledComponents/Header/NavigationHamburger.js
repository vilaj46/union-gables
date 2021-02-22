import * as React from "react";
import styled from "styled-components";

import HamburgerItems from "./HamburgerItems";

const Container = styled.div`
  display: block;
  margin-top: 50px;
  margin-bottom: 50px;
  position: relative;

  @media screen and (min-width: 600px) {
    display: none;
  }

  @media screen and (max-width: 500px) {
    margin-right: 55px;
  }

  @media screen and (max-width: 450px) {
    margin-right: 50px;
  }

  @media screen and (max-width: 350px) {
    margin-top: 20px;
    margin-left: 10px;
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
