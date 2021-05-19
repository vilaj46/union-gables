import * as React from "react";

// Components
import RoomTemplate from "../../styledComponents/Rooms/RoomTemplate";

// Shared Components
import FontContainer from "../../styledComponents/Shared/FontContainer";
import PageBodyContainer from "../../styledComponents/Shared/PageBodyContainer";

import api from "../../api/mainMansionAPI";

const MainMansion = () => {
  const alts = ["Jane Room", "Linda Room", "Annie Room", "Edward Room"];
  const paragraphs = [api.Paragraph1, api.Paragraph2];
  return (
    <FontContainer>
      <PageBodyContainer>
        <RoomTemplate
          title={api.title}
          type="mainMansion"
          alts={alts}
          paragraphs={paragraphs}
        />
      </PageBodyContainer>
    </FontContainer>
  );
};

export default MainMansion;
