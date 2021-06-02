import * as React from "react";
import styled from "styled-components";
import { Link } from "gatsby";

const StyledLink = styled(Link)`
  color: #680727;
  font-size: 1.4rem;

  &:hover {
    color: #aa4465;
  }

  @media screen and (max-width: 775px) {
    font-size: 1.2rem;
  }
`;

const PageParagraphLink = (props) => {
  if (props.target) {
    return (
      <StyledLink to={props.href} target="_blank" style={{ ...props.style }}>
        <strong>{props.children}</strong>
      </StyledLink>
    );
  } else {
    return (
      <StyledLink to={props.href}>
        <strong>{props.children}</strong>
      </StyledLink>
    );
  }
};

export default PageParagraphLink;
