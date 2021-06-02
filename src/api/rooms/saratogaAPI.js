import * as React from "react";

import PageParagraph from "../../styledComponents/Shared/PageParagraph";

// Paragraphs

const Paragraph1 = (
  <PageParagraph key="saratogaRoomParagraph1">
    Decorated with a blend of Saratoga style and Victorian classics, the
    Saratoga Room is located on the garden level just a few steps past the pool
    and about 30 steps from the main mansion in the adjacent building, close to
    the shared garden pavilion. With special features like a wood-burning stove
    and in-room soaking tub, the Saratoga Room is the epitome of historic charm
    and luxury finishes.
  </PageParagraph>
);

const Paragraph2 = (
  <PageParagraph key="saratogaRoomParagraph2">
    Finished with hardwood floors and a full couch in the sitting area, this
    room offers a king bed with luxury sheets, a small kitchenette, and a large,
    bright, tiled bathroom with a soaking tub and step-in glass and ceramic
    shower. Sit outside on the fenced-in brick patio with outdoor furniture. The
    Saratoga Room is a Garden Level room with a private entrance into the suite.
  </PageParagraph>
);

const Paragraph3 = (
  <PageParagraph key="saratogaRoomParagraph3">
    Pets are welcome in the room with a one-time pet fee.
  </PageParagraph>
);

// Text
const title = "Saratoga Room";

// Amenities
const amenities = [
  '43" flat-screen television',
  "Air conditioning",
  "Antique furnishings",
  "Brick patio",
  "Complimentary high-speed wireless internet",
  "Couch",
  "Hair dryer",
  "Iron & ironing board",

  "Kitchenette",
  "Luxurious linens",
  "Mini-refrigerator",
  "Robes",
  "Soaking tub",
  "Step-in glass and ceramic shower",
  "Wood-burning stove",
];

// Alts
const alts = [
  "Union Gables Inn Saratoga Room TV",
  "Union Gables Inn Saratoga Room TV and Chimney",
  "Union Gables Inn Saratoga Room Living Room Couch",
  "Union Gables Inn Saratoga Room Outdoor Table and Chairs",
  "Union Gables Inn Saratoga Room Bathtub and Shower",
  "Union Gables Inn Saratoga Room Bathtub and Shower",
  "Union Gables Inn Saratoga Room Bathroom Sink",
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
