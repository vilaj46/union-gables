import * as React from "react";

import PageParagraph from "../../styledComponents/Shared/PageParagraph";

// Paragraphs

const Paragraph1 = (
  <PageParagraph key="deerParkParagraph1">
    The Deer Park Spring Room 5A is located in the Alexander House, our sister
    property located across the Avenue from Union Gables Inn, and includes
    access to all of the Inn’s amenities and services. This second floor suite
    features one king-sized bed, luxury carpeting, and a private bathroom with a
    walk-in glass shower and luxury carpeting.
  </PageParagraph>
);

const Paragraph2 = (
  <PageParagraph key="deerParkParagraph2">
    Find the perfect balance of historic furnishings and contemporary
    conveniences. The Deer Park Spring Room offers a number of modern amenities
    including complimentary wireless internet, flat-screen televisions, and luxe
    robes. These oversized suites range from 800 square feet to 3000 square
    feet.
  </PageParagraph>
);

// Text
const title = "Deer Park Spring Room 5A";

// Amenities
const amenities = [
  '43" flat-screen television',
  "Air conditioning",
  "Antique furnishings",
  "Balcony",
  "Complimentary high-speed wireless internet",
  "Deck off the kitchen",
  "Gas fireplace",
  "Hair dryer",
  "Iron & ironing board",

  "Kitchen",
  "Living Room",
  "Luxurious linens",
  "Mini-refrigerator",
  "Robes",
  "Stainless steel kitchen appliances",
  "Walk-in glass shower",
];

// Alts
const alts = [
  "Union Gables Inn Deer Park Spring Room 5A Front of Bed",
  "Union Gables Inn Deer Park Spring Room 5A Side of Bed",
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
