import * as React from "react";
import { Link } from "gatsby";
import styled from "styled-components";

export const PageSubLinksContainer = styled.ul`
  display: flex;
  justify-content: space-around;
  padding-left: 0;
  margin-left: 0;
`;

const RegularItem = styled.a`
  display: block;
  text-align: center;
  text-decoration: underline;
  color: #350313;
  font-weight: 600;
  font-size: 1.4rem;
  letter-spacing: 0.7px;

  &:hover {
    cursor: pointer;
    color: #aa4465;
  }

  @media screen and (max-width: 435px) {
    font-size: 0.7rem;
  }

  @media screen and (max-width: 310px) {
    font-size: 0.6rem;
  }
`;

const GatsbyItem = styled(Link)`
  display: block;
  text-align: center;
  text-decoration: underline;
  color: #350313;
  font-weight: 600;
  font-size: 1.4rem;
  letter-spacing: 0.7px;

  &:hover {
    cursor: pointer;
    color: #aa4465;
  }

  @media screen and (max-width: 435px) {
    font-size: 0.7rem;
  }

  @media screen and (max-width: 310px) {
    font-size: 0.6rem;
  }
`;

export const PageSubLinksItem = (props) => {
  if (props.type === "gatsby") {
    return <GatsbyItem to={props.href}>{props.children}</GatsbyItem>;
  } else if (props.type === "regular" && props.target) {
    return (
      <RegularItem href={props.href} target="_blank">
        {props.children}
      </RegularItem>
    );
  } else {
    return <RegularItem href={props.href}>{props.children}</RegularItem>;
  }
};
