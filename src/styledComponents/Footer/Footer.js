import * as React from "react";
import styled from "styled-components";

// Sub Components
import FontContainer from "../Shared/FontContainer";
import SocialLinks from "./SocialLinks";
import FooterTitle from "./FooterTitle";

// Icons - from flaticon
import pin from "../../icons/pin.png";
import telephone from "../../icons/phone.png";
import email from "../../icons/email.png";

const Container = styled.div`
  text-align: center;
  color: #333;
  padding-bottom: 100px;
  display: flex;
  flex-direction: column;
`;

const SubContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
  width: 95%;
  margin: 0 auto;

  @media screen and (max-width: 750px) {
    flex-direction: column;
  }
`;

const Icon = styled.img`
  height: 25px;
  width: 25px;
  padding-right: 5px;
`;

const Anchor = styled.a`
  color: #333;
  text-decoration: none;
`;

const IconContainer = styled.div`
  display: flex;
  // flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 12.5px 0;
`;

const Paragraph = styled.p`
  margin: 0;
  padding: 0;
`;

const Span = styled.span`
  @media screen and (min-width: 450px) {
    display: none;
  }
`;

const Span2 = styled.span`
  @media screen and (max-width: 450px) {
    display: none;
  }
`;

const Footer = () => {
  return (
    <FontContainer>
      <Container>
        <FooterTitle>Union Gables Inn</FooterTitle>
        <SubContainer>
          <IconContainer>
            <Icon src={pin} alt="Location" />
            <Paragraph>
              55 Union Ave, Saratoga Springs, NY 12866,{" "}
              <Span2>United States</Span2>
              <Span>US</Span>
            </Paragraph>
          </IconContainer>
          <IconContainer>
            <Icon src={telephone} alt="Phone Call" />
            <Anchor href="tel:518-584-1558">518-584-1558</Anchor>
          </IconContainer>
          <IconContainer>
            <Icon src={email} alt="Email" />
            <Anchor href="mailto:stay@uniongables.com">
              stay@uniongables.com
            </Anchor>
          </IconContainer>
        </SubContainer>
        <SocialLinks />
      </Container>
    </FontContainer>
  );
};

export default Footer;
