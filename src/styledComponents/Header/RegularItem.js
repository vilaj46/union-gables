import * as React from "react";
import { Link } from "gatsby";
import styled from "styled-components";

const NavItemContainer = styled.li`
  list-style-type: none;
  text-decoration: none;
  text-transform: uppercase;
  padding: 14px 16px;
  color: #ffffff;

  &:hover {
    background-color: #ffffff;
    cursor: pointer;
  }

  @media screen and (max-width: 815px) {
    padding: 5px 8px;
  }
`;

const NavItemLink = styled(Link)`
  color: #ffffff;
  text-decoration: none;
  // pointer-events: none;

  ${NavItemContainer}:hover & {
    color: #b25a75;
  }
`;

const BookNowContainer = styled.li`
  background-color: #b25a75;
  color: #ffffff;
  list-style-type: none;
  text-decoration: none;
  text-transform: uppercase;
  padding: 14px 16px;
  white-space: nowrap;

  &:hover {
    background-color: #680727;
    cursor: pointer;
  }

  @media screen and (max-width: 815px) {
    padding: 5px 8px;
  }
`;

const BookNowLink = styled(Link)`
  color: #ffffff;
  text-decoration: none;
`;

const RegularItem = ({ item }) => {
  if (item.text === "Book Now") {
    return (
      <BookNowLink key={item.url} to={item.url} target="_blank">
        <BookNowContainer>{item.text}</BookNowContainer>
      </BookNowLink>
    );
  } else {
    return (
      <NavItemContainer key={item.url}>
        <NavItemLink to={item.url}>{item.text}</NavItemLink>
      </NavItemContainer>
    );
  }
};

export default RegularItem;
