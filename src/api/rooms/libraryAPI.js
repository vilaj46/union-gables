import * as React from "react";

import PageParagraph from "../../styledComponents/Shared/PageParagraph";
import PageParagraphLink from "../../styledComponents/Shared/PageParagraphLink";

// Paragraphs

const Paragraph1 = (
  <PageParagraph key="libraryRoomParagraph1">
    Indulge in a soak at our hotel with a Jacuzzi in the room in Saratoga, NY.
    The Library Room is a spacious room with a king-sized sleigh bed and
    adjacent jetted soaking tub. Dry off wrapped in a robe by the natural gas
    fireplace or get ready for the day in the bathroom with a black marble tiled
    shower.
  </PageParagraph>
);

const Paragraph2 = (
  <PageParagraph key="libraryRoomParagraph2">
    Located near the Japanese garden, 30 steps from the{" "}
    <PageParagraphLink href="/rooms/main-mansion">
      Main Mansion
    </PageParagraphLink>
    , and close to the pool, walk out onto the Library Room’s private fenced
    garden patio. One of the room’s most unique features is the display of
    antique toys in the intimate sitting area. Enjoy modern amenities at our
    historic hotel with a Jacuzzi in room in Saratoga, NY such as an HD
    flat-screen television and complimentary wireless internet.
  </PageParagraph>
);

const Paragraph3 = (
  <PageParagraph key="libraryRoomParagraph3">
    Pets are welcome in the room with a one-time pet fee.
  </PageParagraph>
);

// Text
const title = "Library Room";

// Amenities
const amenities = [
  '43" flat-screen television',
  "Air conditioning",
  "Antique furnishings",
  "Complimentary high-speed wireless internet",
  "Gas fireplace",
  "Hair dryer",
  "Iron & ironing board",

  "King sleigh bed",
  "Luxurious linens",
  "Marble tiled shower",
  "Mini-refrigerator",
  "Robes",
  "Soaking tub",
];

// Alts
const alts = [
  "Union Gables Inn Library RoomFront of Bed",
  "Union Gables Inn Library Room Side of Bed and Bathtub",
];

const api = {
  // Paragraphs
  Paragraph1,
  Paragraph2,
  Paragraph3,

  // Text
  title,

  // Amenities
  amenities,

  // Alts
  alts,
};

export default api;
