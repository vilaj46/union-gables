import * as React from "react";
import styled from "styled-components";

import mainImage4 from "../../images/main_image4.jpg";
import mainImage5 from "../../images/main_image5.jpg";
import mainImage6 from "../../images/main_image6.jpg";

const Container = styled.div`
  position: relative;
  min-height: 450px;
`;

const H3Container = styled.h3`
  text-transform: uppercase;
  text-align: center;
  color: #ffffff;
  padding-top: 100px;
  font-size: 24px;
  font-weight: 600;
`;

const ParagraphContainer = styled.p`
  text-align: center;
  color: #ffffff;
  font-size: 20px;
  font-weight: 600;
`;

const ImageContainer = styled.img`
  background-size: cover;
  background-position: center;
  position: absolute;
  min-width: 100%;
  height: 100%;
  z-index: -1;
  filter: brightness(50%);
`;

const NumbersContainer = styled.div`
  display: flex;
  justify-content: center;
`;

const ButtonContainer = styled.div`
  border: 2px solid #ffffff;
  border-radius: 100%;
  height: 90px;
  width: 90px;
  margin: 0 40px;
  background: rgba(0, 0, 0, 0);

  &:hover {
    cursor: pointer;
    background-color: #2a0511;
    opacity: 0.6;
  }
`;

const ActivatedContainer = styled.div`
  border: 2px solid #ffffff;
  border-radius: 100%;
  height: 90px;
  width: 90px;
  margin: 0 40px;
  background-color: #2a0511;

  &:hover {
    cursor: pointer;
    opacity: 0.6;
  }
`;

const Button = styled.div`
  color: #ffffff;
  text-align: center;
  margin: auto;
  font-size: 72px;
`;

const reasons = [
  {
    img: mainImage5,
    text:
      "Easily walk to over 125 restaurants, music venues, bars, museums, galleries, and adowntown shopping.",
  },
  {
    img: mainImage4,
    text:
      "Discover romantic and historic rooms with antique furnishingsm natural gas fireplaces, and luxury linens.",
  },
  {
    img: mainImage6,
    text:
      "Stay one and a half blocks from the oldest racetrack in the country.",
  },
];

const ThreeReasons = () => {
  const [reason, setReason] = React.useState(0);

  return (
    <Container>
      <ImageContainer src={reasons[reason].img} alt="Heyyy" />
      <H3Container>3 Reasons to Stay with us</H3Container>
      <ParagraphContainer>{reasons[reason].text}</ParagraphContainer>
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
