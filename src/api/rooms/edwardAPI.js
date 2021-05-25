import * as React from "react";

import PageParagraph from "../../styledComponents/Shared/PageParagraph";

// Paragraphs

const Paragraph1 = (
  <PageParagraph center={true} key="edwardParagraph1">
    Enjoy a relaxing stay in Saratoga Springs in the Edward Room, located in the
    main mansion of Union Gables Inn. The bright and comfortable ambiance shines
    through the room’s romantic Victorian windows and luxurious oriental
    carpets. Sit by the natural gas fireplace or set up your laptop at the
    antique desk.
  </PageParagraph>
);

const Paragraph2 = (
  <PageParagraph center={true} key="edwardParagraph2">
    Sleep in comfort in a king-sized sleigh bed, tucked in with luxury sheets
    and soft pillows. The Edward Room comes with a private bathroom with a
    shower, as well as modern amenities like an HD flat-screen television,
    complimentary wireless internet, and an in-room refrigerator.
  </PageParagraph>
);

// Text
const title = "Edward Room";

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
  "Robes",
  "Tiled shower",
];

// Alts
const alts = [
  "Edward Room Side of Bed, TV, and Fireplace",
  "Edward Room Office Desk and Window",
  "Edward Room TV and Fireplace",
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
