import * as React from "react";
import { Link } from "gatsby";
import styled from "styled-components";

const Container = styled.li`
  position: relative;
  list-style-type: none;
  text-decoration: none;
  text-transform: uppercase;
  padding: 14px 16px;

  &:hover {
    background-color: #ffffff;
    cursor: pointer;
  }
`;

// Bottom portion is navLink.
const NavItemContainer = styled(Link)`
  display: block;
  color: white;
  text-align: center;
  text-decoration: none;

  color: #ffffff;
  text-decoration: none;

  ${Container}:hover & {
    color: #aa4465;
  }
`;

const ContentContainer = styled.ul`
  display: none;
  position: absolute;
  background-color: #f9f9f9;
  min-width: 160px;
  box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
  z-index: 1;
  margin-left: -16px;
  top: 31px;

  ${Container}:hover & {
    display: block;
  }
`;

// const DownLinkContainer = styled.li`
const DownLinkContainer = styled(Link)`
  color: black;
  padding: 14px 16px;
  text-decoration: none;
  display: block;
  text-align: left;
  background-color: #e4e4e4;
  margin-left: -40px;

  &:hover {
    color: #790028;
    background-color: #ffffff;
  }
`;

const DropDownList = ({ item }) => {
  const { text, links } = item;
  return (
    <Container>
      <NavItemContainer to={item.url}>{text}</NavItemContainer>
      <ContentContainer>
        {links.map((link) => {
          return (
            <DownLinkContainer key={link} to="#">
              {link}
            </DownLinkContainer>
          );
        })}
      </ContentContainer>
    </Container>
  );
};

export default DropDownList;
