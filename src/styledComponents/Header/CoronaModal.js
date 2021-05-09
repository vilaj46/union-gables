import * as React from "react";
// import styled from "styled-components";
import Modal from "react-modal";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    overflow: "auto",
  },
};

const CoronaModal = (props) => {
  const [modalIsOpen, setIsOpen] = React.useState(false);

  // const openModal = () => {
  //   setIsOpen(true);
  // };

  const closeModal = () => {
    setIsOpen(false);
  };

  return (
    <Modal
      style={customStyles}
      isOpen={modalIsOpen}
      onRequestClose={closeModal}
      contentLabel="Example Modal"
      ariaHideApp={false}
    >
      {/* <p>
        The health & safety of our guests and staff are our highest priority.
        Please see below our updated policies and procedures in response to
        COVID-19.
      </p>
      <h2>Health & Safety</h2>
      <ul>
        <li>Disinfecting of all common areas multiple times a day.</li>
        <li>Use of UV light in rooms to help disinfect.</li>
        <li>Use of EPA registered disinfectants.</li>
        <li>Regular disinfection of public touch-points.</li>
        <li>Implemented mask policy.</li>
      </ul>
      <h2>Amenities & Services</h2>
      <h3>What's open as of September 18 2020</h3>
      <ul>
        <li>Lounge</li>
        <li>Outdoor areas</li>
      </ul>
      <h3>Updated amenities policies</h3>
      <ul>
        <li>
          Only guests of the Inn allowed in the pool area. Log in and out system
          implemented.
        </li>
        <li>
          Hot breakfast temporarily unavailable. We are offering breakfast
          baskets filled with a pastry, yogurt, fruit, granola bar, nuts, Orange
          juice or apple juice delivered to the outside of the room in the
          morning for contact-less delivery.
        </li>
      </ul>
      <h2>Your Travel Flexibility</h2>
      <p>
        We have updated our policies to give you better peace of mind and travel
        flexibility. Should your travel plans change due to COVID-19, we will
        allow you to move your reservation to future dates. Learn more about New
        York's COVID-19 Travel Advisory.
      </p> */}
    </Modal>
  );
};

export default CoronaModal;
