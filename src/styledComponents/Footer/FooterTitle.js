import * as React from "react";
import styled from "styled-components";

// Sub Components
import FontContainer from "../Shared/FontContainer";

const FooterHomeLink = styled.a`
  text-decoration: none;
  color: #aa4465;
  font-family: times;
  text-transform: uppercase;
  font-weight: 200;
  letter-spacing: 1px;
  font-size: 1.5rem;
`;

const FooterTitle = (props) => {
  const fontSize = props.size ? "1.8rem" : "1.5rem";
  return (
    <FontContainer>
      <h3>
        <FooterHomeLink style={{ fontSize }} href="/">
          Union Gables Inn
        </FooterHomeLink>
      </h3>
    </FontContainer>
  );
};

export default FooterTitle;
