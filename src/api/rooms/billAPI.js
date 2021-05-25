import * as React from "react";

import PageParagraph from "../../styledComponents/Shared/PageParagraph";

// Paragraphs

const Paragraph1 = (
  <PageParagraph key="billParagraph1">
    Choose the sophisticated and romantic Bill Room, featuring a private porch
    overlooking the front of the Inn. Located on the second level, this airy
    rooms faces southeast for the oval bay windows to fill the room with
    sunlight.
  </PageParagraph>
);

const Paragraph2 = (
  <PageParagraph key="billParagraph2">
    Enjoy the room’s spacious sitting area, furnished with antiques and boasting
    a natural gas fireplace. In addition to a king-sized sleigh bed, the Bill
    Room boasts a large bathroom with a tub-shower and numerous modern
    amenities, including free Wi-Fi, an HD flat-screen TV, and in-room
    refrigerator.
  </PageParagraph>
);

const Paragraph3 = (
  <PageParagraph key="billParagraph3">
    Pets are allowed in this room for a one-time fee.{" "}
  </PageParagraph>
);

// Text
const title = "Bill Room";

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
  "Mini-refrigerator",
  "Private porch",
  "Robes",
  "Tub-shower combination",
];

// Alts
const alts = [
  "Bill Room Front of Bed, TV, Fire Place",
  "Bill Room Bed and Fireplace",
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
