import * as React from "react";

// Components
import Header from "../../styledComponents/Header/Header";
import RoomTemplate from "../../styledComponents/Rooms/RoomTemplate";

// Shared Components
import FontContainer from "../../styledComponents/Shared/FontContainer";
import PageBodyContainer from "../../styledComponents/Shared/PageBodyContainer";

import api from "../../api/rooms/carriageAPI";

const CarriageHouse = () => {
  const paragraphs = [api.Section1, api.Section2];
  return (
    <FontContainer>
      <Header />
      <PageBodyContainer>
        <RoomTemplate
          title={api.title}
          type="carriageHouse"
          alts={api.alts}
          paragraphs={paragraphs}
        />
      </PageBodyContainer>
    </FontContainer>
  );
};

export default CarriageHouse;
