import * as React from "react";
import styled from "styled-components";

const Container = styled.ul`
  display: flex;
  justify-content: space-between;
`;

const Item = styled.li`
  text-align: center;
  list-style-type: none;
`;

const Circle = styled.i`
  display: block;
  background-color: #350313;
  width: 10px;
  height: 10px;
  margin: 10px auto;
  border-radius: 100%;
`;

const DiscoverLinks = () => {
  return (
    <Container>
      <div>
        <Item>Congress Park</Item>
        <Circle />
        <Item>Saratoga Race Course</Item>
        <Circle />
        <Item>Saratoga Performing Arts Center</Item>
      </div>
      <div>
        <Item>Saratoga Springs City Center</Item>
        <Circle />
        <Item>Saratoga Spa State Park</Item>
        <Circle />
        <Item>Annual festivals and events</Item>
      </div>
    </Container>
  );
};

export default DiscoverLinks;
