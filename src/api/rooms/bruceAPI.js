import * as React from "react";

import PageParagraph from "../../styledComponents/Shared/PageParagraph";

// Paragraphs

const Paragraph1 = (
  <PageParagraph center={true} key="bruceParagraph1">
    Uniquely decorated with the style from the Adirondacks, the Bruce Room is
    bright and open with a vaulted ceiling. Experience a comfortable retreat to
    Saratoga Springs on the third level of the mansion with hardwood floors, a
    gas fireplace stove, and a king-sized bed with luxury sheets.
  </PageParagraph>
);

const Paragraph2 = (
  <PageParagraph center={true} key="bruceParagraph2">
    In addition to the antique décor, the Bruce Room has an HD flat-screen
    television, an in-room refrigerator, and air conditioning. This room has a
    private bathroom with a shower, plus cozy robes.
  </PageParagraph>
);

// Text
const title = "Bruce Room";

// Amenities
const amenities = [
  '43" flat-screen television',
  "Air conditioning",
  "Antique furnishings",
  "Adirondack chairs",
  "Complimentary high-speed wireless internet",
  "Gas fireplace stove",
  "Hair dryer",

  "Iron & ironing board",
  "King bed",
  "Luxurious linens",
  "Mini-refrigerator",
  "Robes",
  "Tiled shower",
];

// Alts
const alts = [
  "Bruce Room Side of Bed, Rock chairs, and Sunny Windows",
  "Bruce Room Front of Bed",
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
