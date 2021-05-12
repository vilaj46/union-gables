import * as React from "react";
import styled from "styled-components";

import api from "../../api/homepageAPI";

// Sub Components
import ThreeReasonsNumber from "./ThreeReasonsNumber";

const Container = styled.div`
  position: relative;
  min-height: 450px;
  display: flex;
  flex-direction: column;
  justify-content: center;

  @media screen and (max-width: 731px) {
    min-height: 0;
    height: auto;
  }
`;

const H3Container = styled.h3`
  text-transform: uppercase;
  text-align: center;
  color: #ffffff;
  letter-spacing: 1px;
  font-size: 1.4rem;

  @media screen and (max-width: 731px) {
    font-weight: 200;
    padding-top: 50px;
    padding-bottom: 25px;
    margin: 0;
  }
`;

const ParagraphContainer = styled.p`
  text-align: center;
  color: #ffffff;
  font-size: 20px;
  width: 95%;
  margin: auto;
  height: 80px;
  letter-spacing: 1px;
  font-size: 1.4rem;

  @media screen and (max-width: 731px) {
    font-weight: 200;
    height: auto;
    padding: 0;
    min-height: 60px;
    padding-bottom: 25px;
  }

  @media screen and (max-width: 550px) {
    width: 90%;
  }
`;

const BackgroundImage = styled.div`
  background-image: url(${api.food});
  background-size: 100%;
  background-repeat: no-repeat;
  background-position: center center;
  width: 100%;
  height: 100%;
  position: absolute;
  z-index: -1;
  overflow: hidden;
  filter: brightness(50%);
`;

const NumbersContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
  width: 100%;

  @media screen and (max-width: 731px) {
    padding-bottom: 50px;
  }
`;

const CenterText = styled.div`
  height: 50%;
`;

const ThreeReasons = () => {
  const [reason, setReason] = React.useState(0);
  return (
    <Container>
      <BackgroundImage
        style={{ backgroundImage: `url(${api.threeReasons[reason].img})` }}
      />
      <CenterText>
        <H3Container>{api.threeReasonsTitle}</H3Container>
        <ParagraphContainer>{api.threeReasons[reason].text}</ParagraphContainer>
      </CenterText>
      <NumbersContainer>
        <ThreeReasonsNumber
          text="1"
          activated={reason === 0 ? true : false}
          setReason={setReason}
          num={0}
        />
        <ThreeReasonsNumber
          text="2"
          num={1}
          activated={reason === 1 ? true : false}
          setReason={setReason}
        />
        <ThreeReasonsNumber
          text="3"
          num={2}
          activated={reason === 2 ? true : false}
          setReason={setReason}
        />
      </NumbersContainer>
    </Container>
  );
};

export default ThreeReasons;
