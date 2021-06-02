import * as React from "react";

import PageParagraph from "../../styledComponents/Shared/PageParagraph";

// Paragraphs

const Paragraph1 = (
  <PageParagraph key="charlieParagraph1">
    Stay in the Alexander House, our sister property located across the Avenue
    from Union Gables Inn. Guests of the Charlie Spring Room have access to all
    the amenities and public spaces of the Inn. Enjoy a little extra space as
    the Alexander House Suites range from 800 square feet to 3000 square feet.
  </PageParagraph>
);

const Paragraph2 = (
  <PageParagraph key="charlieParagraph2">
    This guest room is located on the first floor and features a king bed and
    bathroom with a walk-in glass shower. Featuring modern amenities and antique
    touches, each of our guest rooms has a private bathroom, complimentary
    wireless internet, and all the comforts of home.
  </PageParagraph>
);

const Paragraph3 = (
  <PageParagraph key="charlieParagraph2">
    Pets are welcome to stay in the room with a one-time pet fee.
  </PageParagraph>
);

// Text
const title = "Charlie Spring Room";

// Amenities
const amenities = [
  '43" flat-screen television',
  "Air conditioning",
  "Antique furnishings",
  "Balcony",
  "Complimentary high-speed wireless internet",
  "Hair dryer",

  "Iron & ironing board",
  "Luxurious linens",
  "Mini-refrigerator",
  "Robes",
  "Walk-in glass shower",
];

// Alts
const alts = ["Union Gables Inn Charlie Spring Room Front of Bed"];

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
