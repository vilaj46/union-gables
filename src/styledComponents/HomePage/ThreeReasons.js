import * as React from "react";
import { useStaticQuery } from "gatsby";
import styled from "styled-components";

import api from "../../api/homepageAPI";

// Sub Components
import ThreeReasonsNumber from "./ThreeReasonsNumber";
import ThreeReasonsBackground from "./ThreeReasonsBackground";

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

const NumbersContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
  width: 100%;
  position: absolute;
  z-index: 2;

  @media screen and (max-width: 731px) {
    padding-bottom: 50px;
  }
`;

const CenterText = styled.div`
  height: 50%;
  text-align: center;
  z-index: 1;
  position: absolute;
  top: 0;
  width: 100%;
`;

const Brightness = styled.div`
  filter: brightness(50%);
`;

const ThreeReasons = () => {
  const [reason, setReason] = React.useState(0);

  const data = useStaticQuery(graphql`
    query {
      allFile(
        filter: {
          extension: { eq: "jpg" }
          relativeDirectory: { eq: "homePage" }
        }
      ) {
        edges {
          node {
            base
            childImageSharp {
              fluid(quality: 100) {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      }
    }
  `);

  // Images
  const { edges } = data.allFile;
  const racetrack = edges[2];
  const room = edges[3];
  const food = edges[4];

  const reasons = [racetrack, room, food];
  const alts = ["Steak and Wine", "King Bed Room", "Race Track"];

  return (
    <Container>
      <Brightness>
        <ThreeReasonsBackground alt={alts[reason]} data={reasons[reason]} />
      </Brightness>
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
