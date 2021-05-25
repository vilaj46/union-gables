import * as React from "react";
import styled from "styled-components";

const Title = styled.p`
  color: #333;
  text-transform: uppercase;
  font-weight: 600;
  letter-spacing: 1px;
  padding-left: 25px;
`;

const List = styled.ul`
  width: 50%;
  margin: 0;
`;

const Item = styled.li`
  color: #333;
  padding: 12px 14px;
  font-size: 16px;
`;

const ListContainer = styled.div`
  display: flex;
  margin: 0;
  padding: 0;
`;

const Amenities = (props) => {
  const half = Math.floor(props.amenities.length / 2);
  return (
    <div>
      <Title>AMENITIES</Title>
      <ListContainer>
        <List>
          {props.amenities.map((amen, index) => {
            if (index < half) {
              return <Item key={amen}>{amen}</Item>;
            } else {
              return <React.Fragment></React.Fragment>;
            }
          })}
        </List>
        <List>
          {props.amenities.map((amen, index) => {
            if (index >= half) {
              return <Item key={amen}>{amen}</Item>;
            } else {
              return <React.Fragment></React.Fragment>;
            }
          })}
        </List>
      </ListContainer>
    </div>
  );
};

export default Amenities;
