import * as React from "react";

import PageParagraph from "../../styledComponents/Shared/PageParagraph";

// Paragraphs

const Paragraph1 = (
  <PageParagraph center={true} key="annieParagraph1">
    Stay in this partially rounded room in the turret on the west side of the
    mansion. The Annie Room was historically known as the “Guest Room” due to
    its location at the top of the staircase and separate entrance from the
    second floor hallway.
  </PageParagraph>
);

const Paragraph2 = (
  <PageParagraph center={true} key="annieParagraph2">
    Enjoy large windows in this sophisticated and romantic room, featuring
    elegant marble top tables, wall-to-wall oriental carpets, and antique
    furnishings. Sleep soundly in a king bed with luxury sheets or wrap yourself
    up in a cozy robe by the natural gas fireplace. Experience the warmth and
    comfort of the Annie Room during your Saratoga Springs retreat.
  </PageParagraph>
);

// Text
const title = "Annie Room";

// Amenities
const amenities = [
  '43" flat-screen television',
  "Air conditioning",
  "Antique furnishings",
  "Complimentary high-speed wireless internet",
  "Gas fireplace",
  "Hair dryer",
  "Iron & ironing board",

  "King bed",
  "Luxurious linens",
  "Marble side tables",
  "Mini-refrigerator",
  "Pets not allowed",
  "Robes",
  "Sitting area",
  "Tiled shower",
];

// Alts
const alts = [
  "Bill Room Side of Bed, TV, Fire Place",
  "Bill Room Bed, Desk, Sunny Windows",
];

const api = {
  // Paragraphs
  Paragraph1,
  Paragraph2,

  // Text
  title,

  // Amenities
  amenities,

  // Alts
  alts,
};

export default api;
