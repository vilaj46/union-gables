import * as React from "react";
import styled from "styled-components";
import { Link } from "gatsby";

// Shared Components
import FontContainer from "../Shared/FontContainer";
import NewPageImage from "../Shared/NewPageImage";

const Container = styled.div`
  display: flex;
  justify-content: space-evenly;
  flex-wrap: wrap;

  overflow-x: hidden;

  @media screen and (max-width: 650px) {
    flex-direction: column;
    justify-content: center;
  }
`;

const ImageContainer = styled.div`
  width: 33%;
  position: relative;
  margin: 0 auto;

  @media screen and (max-width: 730px) {
    width: 55%;
  }

  @media screen and (max-width: 650px) {
    width: 75%;
  }

  @media screen and (max-width: 520px) {
    width: 85%;
  }
`;

const TextContainer = styled.div`
  background: rgba(42, 5, 17, 0.7);
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
  transition: all 1s ease-in-out;

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
  width: 50%;
  position: absolute;
  top: 50%;
  right: -3000px;
  transform: translate(-50%, -50%);
  z-index: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  transition: all 1s ease-in-out;

  ${ImageContainer}:hover & {
    right: 1%;
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

  &:hover {
    background-color: #680727;
    color: #ffffff;
  }
`;

const ThingsLinks = ({ images }) => {
  const imageObjects = separateImages(images);
  const keys = Object.keys(imageObjects);
  const [dark, setDark] = React.useState("");

  const mouseEnter = (e, k) => {
    e.stopPropagation();

    const cl4ss = e.target.classList[0];
    if (cl4ss.includes("ImageContainer") && dark !== k) {
      setDark(k);
    }
  };

  console.log(dark);

  return (
    <FontContainer>
      <Container>
        {keys.map((k) => {
          return (
            <ImageContainer
              onMouseEnter={(e) => mouseEnter(e, imageObjects[k].alt)}
              key={k}
              onMouseLeave={() => setDark("")}
            >
              <TextContainer>
                <Text>{imageObjects[k].title}</Text>
              </TextContainer>

              <DescriptionContainer
                style={{
                  pointerEvents: `${
                    dark !== imageObjects[k].alt ? "none" : "auto"
                  }`,
                }}
              >
                <Description>{imageObjects[k].description}</Description>
                <ReadMore to={imageObjects[k].href}>Read More</ReadMore>
              </DescriptionContainer>

              <NewPageImage
                data={imageObjects[k].data}
                alt={imageObjects[k].alt}
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

const separateImages = (images) => {
  const obj = {};

  images.forEach((img) => {
    const { base } = img.node;
    if (base === "breakfast.jpg") {
      obj.breakfast = {
        data: img,
        alt: "Eggs Benedict and Potatoes",
        description:
          "Never the same two days in a row, learn more about our famous breakfast prepared fresh daily.",
        href: "/about-us/breakfast",
        title: "Fresh Gourmet Breakfasts",
      };
    } else if (base === "daytime.jpg") {
      obj.daytime = {
        data: img,
        alt: "Daytime Union Gables Inn",
        description:
          "Take a tour of Union Gables Inn's unique rooms and beautiful grounds.",
        href: "/gallery",
        title: "Photo Gallery",
      };
    } else {
      obj.treats = {
        data: img,
        alt: "Woof Dog Treats",
        description:
          "Select rooms are pet friendly and perfect for you and your pooch. See our pet policy!",
        href: "/about-us/pet-friendly",
        title: "Designated Pet-Friendly Rooms",
      };
    }
  });

  return obj;
};

export default ThingsLinks;
