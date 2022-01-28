import * as React from "react";
import { Link } from "gatsby";
import styled from "styled-components";

const Container = styled.li`
  position: relative;
  list-style-type: none;
  text-decoration: none;
  text-transform: uppercase;
  white-space: nowrap;

  &:hover {
    background-color: #ffffff;
    cursor: pointer;
  }

  @media screen and (max-width: 860px) {
    font-size: 0.8rem;
  }
`;

// Bottom portion is navLink.
const NavItemContainer = styled(Link)`
  color: white;
  text-align: center;
  text-decoration: none;
  height: 100%;
  color: #ffffff;
  margin: 0;
  padding: 0;
  width: auto;
  z-index: 1;
  width: 100%;

  ${Container}:hover & {
    color: #ffffff;
    background-color: #b25a75;
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
  background-color: rgba(255, 255, 255, 1);
  top: 30px;
  padding-left: 0; // not sure why this was even there.

  ${Container}:hover & {
    display: flex;
    flex-direction: column;
  }

  @media screen and (max-width: 860px) {
    top: 15px;
  }

`;

const DownLinkContainer = styled(Link)`
  color: black;
  padding: 14px 16px;
  text-decoration: none;
  display: block;
  text-align: left;
  white-space: nowrap;
  position: relative;
  width: 100%;

  &:hover {
    color: #ffffff;
    background-color: #b25a75;
  }

  @media screen and (max-width: 860px) {
    padding: 7px 8px;
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
    color: #ffffff;
    background-color: #b25a75;
  }

  @media screen and (max-width: 860px) {
    padding: 7px 8px;
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
  margin-left: auto;

  transform: rotate(270deg);

  ${DownLinkContainer}:hover & {
    border-top: 5px solid #ffffff;
  }
`;

const TextContainer = styled.div`
  display: flex;
  justtify-content: space-evenly;
  width: 100%;
  height: 100%;
  padding: 14px 16px;
  
  @media screen and (max-width: 860px) {
    padding: 7px 8px;
  }
`;

const NewDownContainer = styled.div`
  display: flex;
  position: relative;
  z-index: -1;
`;

const SideLinksContainer = styled.ul`
  display: none;
  position: absolute;
  top: 0;
  min-width: 160px;
  box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
  z-index: 1;
  margin-left: -16px;
  background-color: rgba(255, 255, 255, 1);
  right: -112%;
  top: 0;

  ${NewDownContainer}:hover & {
    display: block;
  }
`;

const NewNavContainer = styled.div`
  color: white;
  text-align: center;
  text-decoration: none;
  color: #ffffff;
  display: flex;

  ${Container}:hover & {
    color: #b25a75;
  }

  &:active {
    text-decoration: underline;
  }
`;

const DropDownList = ({ item }) => {
  const { text, links } = item;
  return (
    <Container>
      <NewNavContainer>
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
              <NewDownContainer key={link.url}>
                <DownLinkContainer
                  to={link.url}
                  activeStyle={{ backgroundColor: "#AA4465", color: "white" }}
                >
                  {link.label}

                  {sideLinks.length > 0 && <RightArrow />}
                </DownLinkContainer>

                <SideLinksContainer>
                  {sideLinks.map((link) => {
                    return (
                      <DownLinkContainer2
                        to={link.url}
                        key={link.url}
                        activeStyle={{
                          backgroundColor: "#AA4465",
                          color: "white",
                        }}
                      >
                        {link.label}
                      </DownLinkContainer2>
                    );
                  })}
                </SideLinksContainer>
              </NewDownContainer>
            );
          })}
        </ContentContainer>
      </NewNavContainer>
    </Container>
  );
};

export default DropDownList;
