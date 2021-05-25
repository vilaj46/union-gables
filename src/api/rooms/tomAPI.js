import * as React from "react";

import PageParagraph from "../../styledComponents/Shared/PageParagraph";

// Paragraphs

const Paragraph1 = (
  <PageParagraph key="tomParagraph1">
    Enjoy the sunlight in winters and the view of the lawn in summers from the
    romantic window seat adjacent to the natural gas fireplace. Southern-facing
    and located on the third level of the mansion, the Tom Room boasts a cozy
    and warm atmosphere all year round.
  </PageParagraph>
);

const Paragraph2 = (
  <PageParagraph key="tomParagraph2">
    Perfect for two guests, the Tom Room has a king-sized bed with luxury sheets
    and a private bathroom with a shower. Finished with hardwood floors, this
    room comes equipped with an HD flat-screen television, an in-room
    refrigerator, and complimentary wireless internet.
  </PageParagraph>
);

// Text
const title = "Tom Room";

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
  "Mini-refrigerator",
  "Robes",
  "Tiled shower",
  "Window seat",
];

// Alts
const alts = [
  "Tom Room Window Seat, TV, and Fireplace",
  "Tom Room Side of Bed, TV, and Bathroom",
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
