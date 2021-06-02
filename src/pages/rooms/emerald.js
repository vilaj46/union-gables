import * as React from "react";

// Components
import Header from "../../styledComponents/Header/Header";
import RoomTemplate from "../../styledComponents/Rooms/RoomTemplate";

// Shared Components
import FontContainer from "../../styledComponents/Shared/FontContainer";
import PageBodyContainer from "../../styledComponents/Shared/PageBodyContainer";

import api from "../../api/rooms/emeraldAPI";

const Emerald = () => {
  const paragraphs = [api.Paragraph1, api.Paragraph2, api.Paragraph3];
  return (
    <FontContainer>
      <Header />
      <PageBodyContainer>
        <RoomTemplate
          title={api.title}
          type="emerald"
          alts={api.alts}
          paragraphs={paragraphs}
          amenities={api.amenities}
        />
      </PageBodyContainer>
    </FontContainer>
  );
};

export default Emerald;
