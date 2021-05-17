import * as React from "react";

// Sub Components
import {
  PageSubLinksContainer,
  PageSubLinksItem,
} from "../Shared/PageSubLinks";
import RedCircle from "../Shared/RedCircle";

const OurRooms = () => {
  return (
    <PageSubLinksContainer>
      <div>
        <PageSubLinksItem type="nolink">Kate Room</PageSubLinksItem>
        <RedCircle />
        <PageSubLinksItem href="/rooms/bill-room" type="gatsby">
          Bill Room
        </PageSubLinksItem>
        <RedCircle />
        <PageSubLinksItem href="/rooms/cindy-room" type="gatsby">
          Cindy Room
        </PageSubLinksItem>
        <RedCircle />
        <PageSubLinksItem href="/rooms/kate-room" type="gatsby">
          Kate Room
        </PageSubLinksItem>
      </div>
      <div>
        <PageSubLinksItem type="nolink">Henry Suite</PageSubLinksItem>
        <RedCircle />
        <PageSubLinksItem href="/rooms/library-room" type="gatsby">
          Library Room
        </PageSubLinksItem>
        <RedCircle />
        <PageSubLinksItem href="/rooms/carriage-room" type="gatsby">
          Carriage Room
        </PageSubLinksItem>
      </div>
    </PageSubLinksContainer>
  );
};

export default OurRooms;
