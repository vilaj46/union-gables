import * as React from "react";

// import FontContainer from "../../styledComponents/Shared/FontContainer";
// import PageBodyContainer from "../../styledComponents/Shared/PageBodyContainer";
import PageParagraph from "../styledComponents/Shared/PageParagraph";
import PageParagraphLink from "../styledComponents/Shared/PageParagraphLink";

// Paragraphs

const Paragraph1 = (
  <PageParagraph>
    Discover the Main Mansion room that suits your stay in Saratoga Springs.
    Each of our{" "}
    <PageParagraphLink href="/rooms">spacious rooms</PageParagraphLink> are
    uniquely decorated and feature hand-selected antique furniture. Delight over
    luxurious offerings such as in-room natural gas fireplaces, high thread
    count sheets, and plush king beds. Every room has its own private bathroom
    and modern conveniences like high-speed wireless Internet and flat-screen
    televisions. There's a story for each room, with three floors to choose
    from, including elegant accommodations inside the mansion turret.
  </PageParagraph>
);

const Paragraph2 = (
  <PageParagraph center={true}>
    Find your room at Union Gables Inn.
  </PageParagraph>
);

// Text
const title = "Main Mansion Main Rooms";

const api = {
  // Paragraphs
  Paragraph1,
  Paragraph2,

  // Text
  title,
};

export default api;
