import * as React from "react";

import PageParagraph from "../../styledComponents/Shared/PageParagraph";

// Paragraphs

const Paragraph1 = (
  <PageParagraph center={true} key="lindaParagraph1">
    Discover our most captivating octagon-shaped room in the turret of the
    mansion. Located on the third level, the romantic and charming Linda Room is
    beautifully decorated with Victorian antiques, elegant carpeting, and a
    king-sized poster bed with luxury sheets.
  </PageParagraph>
);

const Paragraph2 = (
  <PageParagraph center={true} key="lindaParagraph2">
    In addition to a private bathroom with a shower, the Linda Room has a
    separate sitting area with a natural gas fireplace and an HD flat-screen
    television. The room also has an in-room refrigerator, complimentary
    wireless internet, and luxurious robes.
  </PageParagraph>
);

// Text
const title = "Linda Room";

// Amenities
const amenities = [
  '43" flat-screen television',
  "Air conditioning",
  "Antique furnishings",
  "Complimentary high-speed wireless internet",
  "Gas fireplace",
  "Hair dryer",
  "Iron & ironing board",

  "King poster bed",
  "Luxurious linens",
  "Mini-refrigerator",
  "Robes",
  "Soaking tub",
  "Tiled shower",
];

// Alts
const alts = [
  "Linda Room Front of Bed and Sunny Windows",
  "Linda Room, TV, and Fireplace",
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
