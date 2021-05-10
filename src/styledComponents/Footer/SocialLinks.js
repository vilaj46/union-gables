import * as React from "react";
import { Link } from "gatsby";
import styled from "styled-components";

// Sub Components
import FontContainer from "../Shared/FontContainer";

// Icons - from flaticon
import facebook from "../../icons/facebook.png";
import instagram from "../../icons/instagram.png";
import pinterest from "../../icons/pinterest.png";
import tripadvisor from "../../icons/tripadvisor.png";
import twitter from "../../icons/twitter.png";

const Container = styled.div`
  text-align: center;
  color: #333;
  padding-bottom: 100px;
  padding: 12.5px 0;
  max-width: 450px;
  margin: 0 auto;
`;

const Icon = styled.img`
  height: 25px;
  width: 25px;
  padding: 0 5px;
`;

const IconContainer = styled.a`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const WidthRestriction = styled.div`
  width: 50%;
  margin: 0 auto;
`;

const IconsContainer = styled.div`
  display: flex;
  justify-content: space-around;
`;

const SocialLinks = () => {
  return (
    <Container>
      <FontContainer>
        <WidthRestriction>
          <IconsContainer>
            <IconContainer
              href="https://www.facebook.com/UnionGables/"
              target="_blank"
            >
              <Icon src={facebook} alt="Facebook" />
            </IconContainer>
            <IconContainer
              href="https://twitter.com/uniongables"
              target="_blank"
            >
              <Icon src={twitter} alt="Twitter" />
            </IconContainer>
            <IconContainer
              href="https://instagram.com/uniongables/"
              target="_blank"
            >
              <Icon src={instagram} alt="Instagram" />
            </IconContainer>
            <IconContainer
              href="https://www.pinterest.com/uniongables/"
              target="_blank"
            >
              <Icon src={pinterest} alt="Pinterest" />
            </IconContainer>
            <IconContainer
              href="https://www.tripadvisor.com/Hotel_Review-g48562-d80181-Reviews-Union_Gables_Inn-Saratoga_Springs_New_York.html"
              target="_blank"
            >
              <Icon src={tripadvisor} alt="Trip Advisor" />
            </IconContainer>
          </IconsContainer>
        </WidthRestriction>
      </FontContainer>
    </Container>
  );
};
export default SocialLinks;
