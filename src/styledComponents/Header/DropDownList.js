import * as React from "react";
import { Link } from "gatsby";
import styled from "styled-components";

const Container = styled.li`
  position: relative;
  list-style-type: none;
  text-decoration: none;
  text-transform: uppercase;
  white-space: nowrap;
  padding: 14px 16px;

  &:hover {
    background-color: #ffffff;
    cursor: pointer;
  }

  @media screen and (max-width: 815px) {
    padding: 5px 8px;
  }
`;

// Bottom portion is navLink.
const NavItemContainer = styled(Link)`
  display: block;
  color: white;
  text-align: center;
  text-decoration: none;
  height: 100%;
  color: #ffffff;
  text-decoration: none;
  margin: 0;
  padding: 0;
  width: auto;

  ${Container}:hover & {
    color: #b25a75;
  }
`;

const ContentContainer = styled.ul`
  display: none;
  position: absolute;
  min-width: 160px;
  box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
  z-index: 1;
  margin-left: -16px;
  background-color: rgba(255, 255, 255, 0.5);
  top: 30px;

  ${Container}:hover & {
    display: block;
  }

  @media screen and (max-width: 815px) {
    top: 12px;
    margin-left: -8px;
  }
`;

const DownLinkContainer = styled(Link)`
  color: black;
  padding: 14px 16px;
  text-decoration: none;
  display: block;
  text-align: left;
  margin-left: -40px;
  white-space: nowrap;
  position: relative;

  &:hover {
    color: #790028;
    background-color: #ffffff;
  }
`;

const DownArrow = styled.i`
  width: 0;
  height: 0;
  border-left: 5px solid transparent;
  border-right: 5px solid transparent;

  border-top: 5px solid #ffffff;
  margin-top: 8px;
  margin-left: 5px;

  ${Container}:hover & {
    border-top: 5px solid #b25a75;
  }

  @media screen and (max-width: 1400px) {
    margin-top: 5px;
  }
`;

const RightArrow = styled.i`
  display: inline-block;
  width: 0;
  height: 0;
  border-left: 5px solid transparent;
  border-right: 5px solid transparent;

  border-top: 5px solid black;
  margin-left: 5px;
  margin-bottom: 3px;

  transform: rotate(270deg);

  ${DownLinkContainer}:hover & {
    border-top: 5px solid #b25a75;
  }
`;

const TextContainer = styled.div`
  display: flex;
  justtify-content: space-evenly;
  width: 100%;
  height: 100%;
`;

const SideLinksContainer = styled.ul`
  display: none;
  position: absolute;
  min-width: 160px;
  box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
  z-index: 1;
  margin-left: -16px;
  background-color: rgba(255, 255, 255, 0.5);
  left: 216px;
  top: 0;

  ${DownLinkContainer}:hover & {
    display: block;
  }
`;

const DropDownList = ({ item }) => {
  const { text, links } = item;
  return (
    <Container>
      <NavItemContainer to={item.url}>
        <TextContainer>
          {text}
          <DownArrow />
        </TextContainer>
      </NavItemContainer>
      <ContentContainer>
        {links.map((link) => {
          let sideLinks;
          try {
            if (link.links.length > 0) {
              sideLinks = link.links;
            }
          } catch (err) {
            sideLinks = [];
          }
          return (
            <DownLinkContainer key={link} to={link.urk}>
              {link.label}
              {sideLinks.length > 0 && <RightArrow />}
              <SideLinksContainer>
                {sideLinks.map((link) => {
                  return <DownLinkContainer>{link.label}</DownLinkContainer>;
                })}
              </SideLinksContainer>
            </DownLinkContainer>
          );
        })}
      </ContentContainer>
    </Container>
  );
};

export default DropDownList;
