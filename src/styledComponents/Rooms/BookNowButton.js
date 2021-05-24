import * as React from "react";
import { Link } from "gatsby";
import styled from "styled-components";

const BookNowContainer = styled.button`
  background-color: #b25a75;
  color: #ffffff;
  text-decoration: none;
  text-transform: uppercase;
  padding: 14px 16px;
  white-space: nowrap;
  margin: 0 auto;
  // display: block;
  outline: none;
  border: none;
  font-weight: 600;
  letter-spacing: 1.5px;

  &:hover {
    background-color: #680727;
    cursor: pointer;
  }
`;

const BookNowLink = styled(Link)`
  color: #ffffff;
  text-decoration: none;
  margin: 0 auto;
`;

const Container = styled.div`
  text-align: center;
`;

const BookNowButton = () => {
  return (
    <Container>
      <BookNowLink
        to="https://reserve1.resnexus.com/resnexus/reservations/lodging/5888F13B-7306-4082-89C2-B6F42CC9CD92?ID=2704"
        target="_blank"
      >
        <BookNowContainer>Book Now</BookNowContainer>
      </BookNowLink>
    </Container>
  );
};

export default BookNowButton;
