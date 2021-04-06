import * as React from "react";
import styled from "styled-components";
import Modal from "react-modal";

const Container = styled.div`
  display: inline-block;
  color: #ffffff;
  padding: 14px 16px;
  background-color: #680727;
  box-shadow: 2px 2px 8px rgba(0, 0, 0, 0.5);

  &:hover {
    cursor: pointer;
    background-color: #74525d;
  }
`;

const customStyles = {
  content: {
    width: "50%",
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  },
};

const ParagraphContainer = styled.p`
  color: #333;
  font-size: 16px;
  line-height: 30px;
  font-family: "DroidSans", sans-serif;
`;

const H2Container = styled.h2`
  color: #680727;
  font-size: 30px;
  text-align: center;
  text-transform: uppercase;
  font-family: "DroidSans", sans-serif;
`;

const ItemContainer = styled.li`
  color: #333;
  font-size: 16px;
  line-height: 30px;
  font-family: "DroidSans", sans-serif;
`;

const H3Container = styled.h3`
  font-family: "DroidSans", sans-serif;
  color: #333;
`;

const MessageButtons = (props) => {
  const [modalIsOpen, setIsOpen] = React.useState(false);

  const openModal = () => {
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  return (
    <div>
      <Container onClick={openModal}>Covid-19 Updates</Container>
      <Modal
        style={customStyles}
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        contentLabel="Example Modal"
        ariaHideApp={false}
      >
        <ParagraphContainer>
          The health & safety of our guests and staff are our highest priority.
          Please see below our updated policies and procedures in response to
          COVID-19.
        </ParagraphContainer>
        <H2Container>Health & Safety</H2Container>
        <ul>
          <ItemContainer>
            Disinfecting of all common areas multiple times a day.
          </ItemContainer>
          <ItemContainer>
            Use of UV light in rooms to help disinfect.
          </ItemContainer>
          <ItemContainer>Use of EPA registered disinfectants.</ItemContainer>
          <ItemContainer>
            Regular disinfection of public touch-points.
          </ItemContainer>
          <ItemContainer>Implemented mask policy.</ItemContainer>
        </ul>
        <H2Container>Amenities & Services</H2Container>
        <H3Container>What's open as of September 18 2020</H3Container>
        <ul>
          <ItemContainer>Lounge</ItemContainer>
          <ItemContainer>Outdoor areas</ItemContainer>
        </ul>
        <H3Container>Updated amenities policies</H3Container>
        <ul>
          <ItemContainer>
            Only guests of the Inn allowed in the pool area. Log in and out
            system implemented.
          </ItemContainer>
          <ItemContainer>
            Hot breakfast temporarily unavailable. We are offering breakfast
            baskets filled with a pastry, yogurt, fruit, granola bar, nuts,
            Orange juice or apple juice delivered to the outside of the room in
            the morning for contact-less delivery.
          </ItemContainer>
        </ul>
        <H2Container>Your Travel Flexibility</H2Container>
        <ParagraphContainer>
          We have updated our policies to give you better peace of mind and
          travel flexibility. Should your travel plans change due to COVID-19,
          we will allow you to move your reservation to future dates. Learn more
          about New York's COVID-19 Travel Advisory.
        </ParagraphContainer>
      </Modal>
    </div>
  );
};

export default MessageButtons;
