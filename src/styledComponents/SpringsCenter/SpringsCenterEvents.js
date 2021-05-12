import * as React from "react";
import styled from "styled-components";

const ListsContainer = styled.div`
  display: flex;
  justify-content: space-around;
  width: 75%;
  margin: 0 auto;
`;

const List = styled.ul`
  color: #333;
`;

const Item = styled.li`
  padding: 10px 0;
  font-size: 1.4rem;
`;

const SpringsCenterEvents = () => {
  const one = [
    "The Flurry Festival",
    "Chess Tournaments",
    "Saratoga Beer Summit",
  ];
  const two = [
    "Summer Sports Expo",
    "Woodworkers Showcase",
    "Skidmore SpringsCenterEvents;",
  ];

  return (
    <ListsContainer>
      <List>
        {one.map((item) => {
          return <Item>{item}</Item>;
        })}
      </List>
      <List>
        {two.map((item) => {
          return <Item>{item}</Item>;
        })}
      </List>
    </ListsContainer>
  );
};

export default SpringsCenterEvents;
