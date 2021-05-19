import * as React from "react";
import styled from "styled-components";

// Shared Components
import NewPageImage from "../Shared/NewPageImage";

const Container = styled.div`
  padding-bottom: 50px;
  position: relative;
`;

const DotContainer = styled.div`
  display: flex;
  justify-content: center;
  position: absolute;
  bottom: 0;
  width: 100%;
  // left: 50%;
  // right: 50%;
  // transition: transformX(-50%);
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
    <Container>
      <NewPageImage
        data={rooms[num]}
        alt={alts[num]}
        type={props.type}
        extraBottomPadding={true}
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
    </Container>
  );
};

export default RoomSlides;
