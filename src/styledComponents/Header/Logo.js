import * as React from "react";
import { Link } from "gatsby";
import styled from "styled-components";

import logo from "../../images/logo.png";

const Container = styled.div`
  width: 33.3%;
  color: #680727;
  text-decoration: underline;
  z-index: 10;

  @media screen and (max-width: 600px) {
    width: 52%;
    margin: 0 auto;
  }

  @media screen and (max-width: 450px) {
    width: 55%;
    margin: 0 auto;
  }
`;

const Image = styled.img`
  max-height: 120px;
  display: block;
  height: auto;

  @media screen and (max-width: 450px) {
    width: 98%;
  }
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
