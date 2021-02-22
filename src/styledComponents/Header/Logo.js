import * as React from "react";
import { Link } from "gatsby";
import styled from "styled-components";

import logo from "../../images/logo.png";

const Container = styled.div`
  width: 33.3%;
  color: #680727;
  text-decoration: underline;
  z-index: 10;

  @media screen and (max-width: 400px) {
    width: 25%;
  }

  @media screen and (max-width: 350px) {
    height: 15%;
  }
`;

const Image = styled.img`
  max-height: 120px;
  display: block;
  height: auto;

  @media screen and (max-width: 400px) {
    height: 75%;
  }

  @media screen and (max-width: 350px) {
    width: 200%;
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
