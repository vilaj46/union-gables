import * as React from "react";
import { Link } from "gatsby";
import styled from "styled-components";

import logo from "../../images/logo.png";

const Container = styled.div`
  width: 33.3%;
  color: #680727;
  text-decoration: underline;
  z-index: 10;
`;

const Image = styled.img`
  mmargin: 10px 0;
  max-height: 120px;
  display: block;
  height: auto;
`;

const Logo = (props) => {
  return (
    <Container>
      <Link to="/">
        <Image src={logo} alt="Union Gables Inn" />
      </Link>
    </Container>
  );
};
export default Logo;
