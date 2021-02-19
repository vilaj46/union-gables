import * as React from "react";
import styled from "styled-components";
import { Link } from "gatsby";

const NavigationItem = ({ item }) => {
  if (item.links.length > 0) {
    return <DropDownList item={item} key={item.url} />;
  } else {
    return <RegularItem item={item} key={item.url} />;
  }
};

const RegularContainer = styled.li`
  list-style-type: none;
  text-decoration: none;
  text-transform: uppercase;
  padding: 14px 16px;
  border: 3px solid yellow;
`;

const BookContainer = styled.li`
  background-color: #790028;
  color: #ffffff;
  /** NEEDS TO BE THE SAME AS navItem */
  list-style-type: none;
  text-decoration: none;
  text-transform: uppercase;
  padding: 14px 16px;
`;

const BooknowLinkContainer = styled.div`
  color: #ffffff;
  text-decoration: none;
`;

const RegularLinkContainer = styled.div`
  color: #ffffff;
  text-decoration: none;
`;

const LinkWrapper = ({ href, text }) => {
  return <Link to={href}>{text}</Link>;
};

const RegularItem = ({ item }) => {
  if (item.text === "Book Now") {
    return (
      <BookContainer>
        <BooknowLinkContainer>
          <LinkWrapper href={item.url} text={item.text} />
        </BooknowLinkContainer>
      </BookContainer>
    );
  } else {
    return (
      <RegularContainer>
        <RegularLinkContainer>
          <LinkWrapper href={item.url} text={item.text} />
        </RegularLinkContainer>
      </RegularContainer>
    );
  }
};

// Bottom portion also used in RegularContainer
const DropContainer = styled.li`
  position: relative;

  list-style-type: none;
  text-decoration: none;
  text-transform: uppercase;
  padding: 14px 16px;
  border: 3px solid yellow;
`;

const DropButtonContainer = styled.div`
  display: inline-block;
  color: white;
  text-align: center;
  text-decoration: none;
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
`;

const DropLinkContainer = styled.div`
  color: black;
  padding: 14px 16px;
  text-decoration: none;
  display: block;
  text-align: left;
  background-color: #e4e4e4;
  margin-left: -40px;
`;

const DropDownList = ({ item }) => {
  return (
    <DropContainer>
      <RegularLinkContainer>
        <DropButtonContainer>
          <LinkWrapper href={item.url} text={item.text} />
        </DropButtonContainer>
      </RegularLinkContainer>
      <ContentContainer>
        {item.links.map((link) => {
          return (
            <DropLinkContainer>
              <LinkWrapper href="#">{item.text}</LinkWrapper>
            </DropLinkContainer>
          );
        })}
      </ContentContainer>
    </DropContainer>
  );
};

export default NavigationItem;
