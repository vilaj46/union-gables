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
    font-size: 0.8rem;
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
  margin: 0;
  padding: 0;
  width: auto;

  ${Container}:hover & {
    color: #b25a75;
  }

  &:active {
    text-decoration: underline;
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

  @media screen and (max-width: 900px) {
    padding: 7px 8px;
  }

  &:hover {
    color: #790028;
    background-color: #ffffff;
  }
`;

const DownLinkContainer2 = styled(Link)`
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

  @media screen and (max-width: 1140px) {
    font-size: 0.8rem;
    padding: 7px 8px;
  }

  @media screen and (max-width: 830px) {
    font-size: 0.8rem;
    padding: 3.5px 4px;
  }

  @media screen and (max-width: 680px) {
    font-size: 0.7rem;
  }

  @media screen and (max-width: 630px) {
    font-size: 0.6rem;
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

  // @media screen and (max-width: 1140px) {
  //   font-size: 0.8rem;
  // }

  // @media screen and (max-width: 1080px) {
  //   font-size: 0.7rem;
  // }

  // @media screen and (max-width: 815px) {
  //   padding: 5px 8px;
  // }
`;

const DropDownList = ({ item }) => {
  const { text, links } = item;

  return (
    <Container>
      <NavItemContainer
        activeStyle={{ textDecoration: "underline" }}
        to={item.url}
      >
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
            <DownLinkContainer
              key={link.url}
              to={link.url}
              activeStyle={{ backgroundColor: "#AA4465", color: "white" }}
            >
              {link.label}
              {sideLinks.length > 0 && <RightArrow />}
              <SideLinksContainer>
                {sideLinks.map((link) => {
                  return (
                    <DownLinkContainer2 to={link.url} key={link.url}>
                      {link.label}
                    </DownLinkContainer2>
                  );
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
