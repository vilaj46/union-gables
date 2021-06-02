import * as React from "react";
import { Link } from "gatsby";
import styled from "styled-components";

import headerItems from "../../api/headerItems.js";

// Components
import MessageButtons from "./MessageButtons";

const Container = styled.ul`
  position: absolute;
  margin: 0;
  padding: 0;
  background-color: #ffffff;
`;

const LinkContainer = styled.li`
  list-style-type: none;
  text-transform: uppercase;

  &:last-child {
    background-color: #b25a75;
    color: #ffffff;
  }

  &:last-child:hover {
    background-color: #680727;
  }

  @media screen and (max-width: 600px) {
    font-size: 0.8rem;
  }

  @media screen and (max-width: 450px) {
    font-size: 0.7rem;
  }
`;

const HamburgerLink = styled(Link)`
  display: block;
  color: #ffffff;
  text-decoration: none;
  padding: 8px;
  wrap: nowrap;
  color: #333;

  &:hover {
    color: #ffffff;
    background-color: #b25a75;
  }
`;

const BookNowLink = styled(Link)`
  display: block;
  color: #ffffff;
  text-decoration: none;
  padding: 8px;
  background-color: #b25a75;

  &:hover {
    background-color: #680727;
  }
`;

const HamburgerItems = () => {
  return (
    <Container>
      {headerItems.map((item) => {
        return (
          <LinkContainer key={item.url}>
            {item.text === "Book Now" ? (
              <BookNowLink to={item.url}>{item.text}</BookNowLink>
            ) : (
              <HamburgerLink to={item.url}>{item.text}</HamburgerLink>
            )}
          </LinkContainer>
        );
      })}
      <MessageButtons />
    </Container>
  );
};
export default HamburgerItems;
