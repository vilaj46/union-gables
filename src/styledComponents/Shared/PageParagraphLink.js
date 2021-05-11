import * as React from "react";
import styled from "styled-components";
import { Link } from "gatsby";

const StyledLink = styled(Link)`
  color: #680727;
  line-height: 40px;
  font-size: 1.4rem;

  &:hover {
    color: #aa4465;
  }
`;

const PageParagraphLink = (props) => {
  return (
    <StyledLink href={props.href}>
      <strong>{props.children}</strong>
    </StyledLink>
  );
};

export default PageParagraphLink;
