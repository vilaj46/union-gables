import * as React from "react";
import styled from "styled-components";
import { Link } from "gatsby";

const StyledLink = styled(Link)`
  color: #680727;
  font-size: 1.4rem;

  &:hover {
    color: #aa4465;
  }
`;

const PageParagraphLink = (props) => {
  if (props.target) {
    return (
      <StyledLink href={props.href} target="_blank">
        <strong>{props.children}</strong>
      </StyledLink>
    );
  } else {
    return (
      <StyledLink href={props.href}>
        <strong>{props.children}</strong>
      </StyledLink>
    );
  }
};

export default PageParagraphLink;
