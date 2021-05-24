import * as React from "react";

// Components
import Header from "../../styledComponents/Header/Header";
import RoomTemplate from "../../styledComponents/Rooms/RoomTemplate";

// Shared Components
import FontContainer from "../../styledComponents/Shared/FontContainer";
import PageBodyContainer from "../../styledComponents/Shared/PageBodyContainer";

import api from "../../api/janeAPI";

const Jane = () => {
  const alts = [
    "Jane Room Office Desk, TV, Fire Place",
    "Jane Room King Bed",
    "Jane Room Bathroom and Bathtub",
    "Jane Room Lounge Chairs",
  ];
  const paragraphs = [api.Paragraph1, api.Paragraph2, api.Paragraph3];
  const amenities = [
    '43" flat-screen television',
    "Air conditioning",
    "Complimentary high-speed wireless internet",
    "Gas fireplace",
    "Hair dryer",
    "Iron & ironing board",

    "King sleigh bed",
    "Luxurious linens",
    "Mini-refrigerator",
    "Robes",
    "Soaking tub",
    "Tiled shower",
  ];
  return (
    <FontContainer>
      <Header />
      <PageBodyContainer>
        <RoomTemplate
          title={api.title}
          type="janeRoom"
          alts={alts}
          paragraphs={paragraphs}
          amenities={amenities}
        />
      </PageBodyContainer>
    </FontContainer>
  );
};

export default Jane;
