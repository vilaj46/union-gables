import * as React from "react";
import styled from "styled-components";

const EventLink = styled.a`
  color: #680727;
  font-weight: 600;
  border-right: 1px solid #aa4465;
  padding-right: 10px;
  font-size: 1.2rem;

  &:hover {
    color: #aa4465;
  }
`;

const LastLink = styled.a`
  color: #680727;
  font-weight: 600;
  font-size: 1.2rem;

  &:hover {
    color: #aa4465;
  }
`;

const EventDivider = styled.div`
  height: 10px;
  width: 10px;
  color: black;
  display: inline-block;
`;

const EventsLinksContainer = styled.div`
  text-align: center;
  padding-bottom: 20px;
`;

const EventsCenter = styled.div`
  display: inline-block;
  margin: 0 auto;
`;

const EventsGuideLinks = () => {
  return (
    <EventsLinksContainer>
      <EventsCenter>
        <EventLink href="#ongoing">Ongoing</EventLink>
        <EventDivider />
        <EventLink href="#spring">Spring</EventLink>
        <EventDivider />
        <EventLink href="#summer">Summer</EventLink>
        <EventDivider />
        <EventLink href="#fall">Fall</EventLink>
        <EventDivider />
        <LastLink href="#winter">Winter</LastLink>
      </EventsCenter>
    </EventsLinksContainer>
  );
};

export default EventsGuideLinks;
