import * as React from "react";
import styled from "styled-components";
import { Link } from "gatsby";

// Shared Components
import FontContainer from "../../styledComponents/Shared/FontContainer";
import NewPageImage from "../../styledComponents/Shared/NewPageImage";

const Container = styled.div`
  display: flex;
  justify-content: space-evenly;
  flex-wrap: wrap;
`;

const ImageContainer = styled.div`
  width: 32%;
  position: relative;

  @media screen and (max-width: 900px) {
    width: 49%;
  }

  @media screen and (max-width: 570px) {
    width: 75%;
  }
`;

const TextContainer = styled.div`
  background: rgba(42, 5, 17, 0.5);
  width: 40%;
  height: 30%;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  transition: all 0.5s ease-in-out;

  ${ImageContainer}:hover & {
    transform: translateX(-3000px);
  }
`;

const Text = styled.p`
  color: #ffffff;
  margin: 0;
  text-align: center;
  text-transform: uppercase;
  letter-spacing: 1px;
`;

const DescriptionContainer = styled.div`
  width: 40%;
  height: 30%;
  position: absolute;
  top: 50%;
  right: -3000px;
  transform: translate(-50%, -50%);
  z-index: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  transition: all 0.5s ease-in-out;

  ${ImageContainer}:hover & {
    right: 10%;
  }
`;

const Description = styled.p`
  color: #ffffff;
  margin: 0;
  text-align: center;
  text-transform: uppercase;
  letter-spacing: 1px;
`;

const ReadMore = styled(Link)`
  color: #680727;
  border: 1px solid rgba(42, 5, 17, 1);
  padding: 14px 16px;
  font-weight: bolder;
  text-align: center;
  text-transform: uppercase;
  cursor: pointer;
`;

const MainMansionRoomLinks = ({ rooms, descriptions }) => {
  const keys = Object.keys(rooms);
  const [dark, setDark] = React.useState("");

  const mouseEnter = (k) => {
    setDark(k);
  };

  const mouseLeave = () => {
    setDark("");
  };

  return (
    <FontContainer>
      <Container>
        {keys.map((k, index) => {
          return (
            <ImageContainer
              onMouseEnter={() => mouseEnter(k)}
              onMouseLeave={mouseLeave}
            >
              <TextContainer>
                <Text>{k}</Text>
                <Text>Room</Text>
              </TextContainer>
              <DescriptionContainer>
                <Description>{descriptions[index]}</Description>
                <ReadMore to={`/rooms/${k}`}>Read More</ReadMore>
              </DescriptionContainer>

              <NewPageImage
                data={rooms[k][0]}
                alt={k}
                removeContain={true}
                paddingAround={true}
                dimensions={{
                  height: "300px",
                  zIndex: "-1",
                }}
                dark={dark}
              />
            </ImageContainer>
          );
        })}
      </Container>
    </FontContainer>
  );
};

export default MainMansionRoomLinks;
