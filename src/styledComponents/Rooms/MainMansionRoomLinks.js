import * as React from "react";
import styled from "styled-components";

// Shared Components
import FontContainer from "../../styledComponents/Shared/FontContainer";
import NewPageImage from "../../styledComponents/Shared/NewPageImage";
import NewPageImages from "../../styledComponents/Shared/NewPageImages";

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  border: 2px solid red;
`;

const MainMansionRoomLinks = ({ rooms }) => {
  const keys = Object.keys(rooms);
  const rows = Math.floor(keys.length / 2);

  // {julian sara nick danielle mom dad}
  // i've gotta change the keys also, not just the index of the row.
  const currentKey = 0;

  for (let i = 0; i < rows; i++) {
    if (i % 2 === 0) {
    }
  }

  return (
    <FontContainer>
      <Container></Container>
    </FontContainer>
  );
};

export default MainMansionRoomLinks;
