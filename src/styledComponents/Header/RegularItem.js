import * as React from "react";
import { Link } from "gatsby";
import styled from "styled-components";

const NavItemLink = styled(Link)`
  color: #ffffff;
  text-decoration: none;

  &:hover {
    color: #ffffff;
    background-color: #b25a75;
  }
`;

const NavItemContainer = styled.li`
  list-style-type: none;
  text-decoration: none;
  text-transform: uppercase;
  padding: 14px 16px;
  color: #ffffff;

  &:hover {
    color: #ffffff;
    background-color: #b25a75;
    cursor: pointer;
  }

  @media screen and (max-width: 815px) {
    font-size: 0.8rem;
  }

  ${NavItemLink}:hover & {
    color: #b25a75;
    color: #ffffff;
    background-color: #b25a75;
  }

  &:hover {
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
    font-size: 0.8rem;
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
      <NavItemLink
        to={item.url}
        key={item.url}
        activeStyle={{ textDecoration: "underline" }}
      >
        <NavItemContainer>{item.text}</NavItemContainer>
      </NavItemLink>
    );
  }
};

export default RegularItem;
