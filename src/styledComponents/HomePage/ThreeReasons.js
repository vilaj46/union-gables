import * as React from "react";
import styled from "styled-components";

import mainImage4 from "../../images/main_image4.jpg";
import mainImage5 from "../../images/main_image5.jpg";
import mainImage6 from "../../images/main_image6.jpg";

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
  background-image: url(${mainImage4});
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

const ButtonContainer = styled.div`
  border: 2px solid #ffffff;
  border-radius: 100%;
  height: 90px;
  width: 90px;
  background: rgba(0, 0, 0, 0);

  &:hover {
    cursor: pointer;
    background-color: #2a0511;
    opacity: 0.6;
  }

  @media screen and (max-width: 731px) {
    height: 65px;
    width: 65px;
    display: flex;
  }
`;

const ActivatedContainer = styled.div`
  border: 2px solid #ffffff;
  border-radius: 100%;
  height: 90px;
  width: 90px;
  background-color: #2a0511;

  &:hover {
    cursor: pointer;
    opacity: 0.6;
  }

  @media screen and (max-width: 731px) {
    height: 65px;
    width: 65px;
    display: flex;
  }
`;

const Button = styled.div`
  color: #ffffff;
  text-align: center;
  margin: auto;
  font-size: 72px;

  @media screen and (max-width: 731px) {
    font-size: 40px;
  }
`;

const CenterText = styled.div`
  height: 50%;
`;

const reasons = [
  {
    img: mainImage5,
    text:
      "Easily walk to over 125 restaurants, music venues, bars, museums, galleries, and downtown shopping.",
  },
  {
    img: mainImage6,
    text:
      "Discover romantic and historic rooms with antique furnishings natural gas fireplaces, and luxury linens.",
  },
  {
    img: mainImage4,
    text:
      "Stay one and a half blocks from the oldest racetrack in the country.",
  },
];

const ThreeReasons = () => {
  const [reason, setReason] = React.useState(0);
  return (
    <Container>
      <BackgroundImage
        style={{ backgroundImage: `url(${reasons[reason].img})` }}
      />
      <CenterText>
        <H3Container>3 Reasons to Stay with us</H3Container>
        <ParagraphContainer>{reasons[reason].text}</ParagraphContainer>
      </CenterText>
      <NumbersContainer>
        <Number
          text="1"
          activated={reason === 0 ? true : false}
          setReason={setReason}
          num={0}
        />
        <Number
          text="2"
          num={1}
          activated={reason === 1 ? true : false}
          setReason={setReason}
        />
        <Number
          text="3"
          num={2}
          activated={reason === 2 ? true : false}
          setReason={setReason}
        />
      </NumbersContainer>
    </Container>
  );
};

const Number = ({ text, activated, setReason, num }) => {
  if (activated) {
    return (
      <ActivatedContainer onClick={() => setReason(num)}>
        <Button type="button">{text}</Button>
      </ActivatedContainer>
    );
  } else {
    return (
      <ButtonContainer onClick={() => setReason(num)}>
        <Button type="button">{text}</Button>
      </ButtonContainer>
    );
  }
};

export default ThreeReasons;
