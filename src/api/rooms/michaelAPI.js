import * as React from "react";

import PageParagraph from "../../styledComponents/Shared/PageParagraph";

// Paragraphs

const Paragraph1 = (
  <PageParagraph center={true} key="michaelParagraph1">
    Perfect for four guests, the Michael Room has bright windows with east and
    west exposure on the third level of the mansion. Enjoy the expansive view of
    the pool and gardens on one side of the mansion, and some of the historic
    Saratoga homes and tree tops from the other side.
  </PageParagraph>
);

const Paragraph2 = (
  <PageParagraph center={true} key="michaelParagraph2">
    Uniquely decorated with a hand-painted floral mural and wrought iron gates,
    the Michael Room features two queen-sized beds and a private bathroom with a
    shower. Relax in the fully-carpeted sitting areas with a gas fireplace stove
    and HD flat-screen television.
  </PageParagraph>
);

// Text
const title = "Michael Room";

// Amenities
const amenities = [
  '30" flat-screen television',
  "Air conditioning",
  "Antique furnishings",
  "Complimentary high-speed wireless internet",
  "Gas fireplace stove",
  "Hair dryer",

  "Iron & ironing board",
  "Luxurious linens",
  "Mini-refrigerator",
  "Robes",
  "Tiled shower",
];

// Alts
const alts = [
  "Michael Room Two Queen beds",
  "Michael Room Side of Bed, Loungechairs, and Sunny Windows",
  "Michael Room Side of Two Queen beds",
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
