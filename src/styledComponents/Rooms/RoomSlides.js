import * as React from "react";
import styled from "styled-components";

// Shared Components
import NewPageImage from "../Shared/NewPageImage";

const DotContainer = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
`;

const Dot = styled.i`
  display: block;
  background-color: #333;
  width: 15px;
  height: 15px;
  margin: 15px;
  border-radius: 100%;

  &:hover {
    cursor: pointer;
  }
`;

const LargerDot = styled.i`
  display: block;
  background-color: #333;
  width: 20px;
  height: 20px;
  margin: 13px;
  border-radius: 100%;

  &:hover {
    cursor: pointer;
  }
`;

const RoomSlides = (props) => {
  const { rooms, alts } = props;
  const [num, setNum] = React.useState(0);

  const onClick = (n) => {
    setNum(n);
  };

  return (
    <React.Fragment>
      <NewPageImage
        data={rooms[num]}
        alt={alts[num]}
        type={props.type}
        removeContain={true}
      />
      <DotContainer>
        {rooms.map((i, index) => {
          if (index === num) {
            return (
              <LargerDot
                key={i}
                number={index}
                onClick={() => onClick(index)}
              />
            );
          } else {
            return (
              <Dot key={i} number={index} onClick={() => onClick(index)} />
            );
          }
        })}
      </DotContainer>
    </React.Fragment>
  );
};

export default RoomSlides;
