import * as React from "react";
import styled from "styled-components";

import api from "../../api/homepageAPI";

const Container = styled.ul`
  display: flex;
  justify-content: space-around;
  padding-left: 0;
  margin-left: 0;
`;

const Item = styled.a`
  display: block;
  text-align: center;
  text-decoration: underline;
  color: #350313;
  font-weight: 600;
  font-size: 1.4rem;
  letter-spacing: 0.7px;

  &:hover {
    cursor: pointer;
    color: #aa4465;
  }

  @media screen and (max-width: 435px) {
    font-size: 0.7rem;
  }

  @media screen and (max-width: 310px) {
    font-size: 0.6rem;
  }
`;

const Circle = styled.i`
  display: block;
  background-color: #350313;
  width: 10px;
  height: 10px;
  margin: 10px auto;
  border-radius: 100%;
`;

// const congress = "https://www.saratoga.com/hotspots/congress-park/";
// const saratogaRaceCourse = "./discover/saratoga-race-course";
// const performingArts = "./discover/saratoga-performing-arts";
// const springCenter = "./discover/saratoga-springs-center";
// const spaStatePark = "./discover/saratoga-spa-state-park";
// const annualFestivals = "./discover/saratoga-festivals-and-events";

const DiscoverLinks = () => {
  return (
    <Container>
      <div>
        <Item href={api.congressPark.href} target="_blank">
          {api.congressPark.text}
        </Item>
        <Circle />
        <Item href={api.saratogaRaceCourse.href}>
          {api.saratogaRaceCourse.text}
        </Item>
        <Circle />
        <Item href={api.saratogaPerformingArtsCenter.href}>
          {api.saratogaPerformingArtsCenter.text}
        </Item>
      </div>
      <div>
        <Item href={api.saratogaSpringsCityCenter.href}>
          {api.saratogaSpringsCityCenter.text}
        </Item>
        <Circle />
        <Item href={api.saratogaSpaStatePark.href}>
          {api.saratogaSpaStatePark.text}
        </Item>
        <Circle />
        <Item href={api.annualFestivalsAndEvents.href}>
          {api.annualFestivalsAndEvents.text}
        </Item>
      </div>
    </Container>
  );
};

export default DiscoverLinks;
