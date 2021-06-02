import * as React from "react";

import PageParagraph from "../../styledComponents/Shared/PageParagraph";

// Paragraphs

const Paragraph1 = (
  <PageParagraph key="wilsonRoomParagraph1">
    Atmospheric and afforable, the Wilson Room offers a king-sized bed, side
    tables, hardwood flooring, and a dark leather loveseat. This spacious room
    is located on the second floor in one of the adjacent buildings to the main
    mansion of Union Gables Inn.
  </PageParagraph>
);

const Paragraph2 = (
  <PageParagraph key="wilsonRoomParagraph2">
    Decorated in the Queen Anne style, each of the Inn’s rooms have a private
    bathroom and luxury amenities like robes, luxury sheets, complimentary
    wireless internet, and HD flat-screen televisions.
  </PageParagraph>
);

// Text
const title = "Wilson Room";

// Amenities
const amenities = [
  '43" flat-screen television',
  "Air conditioning",
  "Antique furnishings",
  "Complimentary high-speed wireless internet",
  "Hair dryer",
  "Iron & ironing board",

  "King bed",
  "Luxurious linens",
  "Loveseat",
  "Robes",
];

// Alts
const alts = ["Union Gables Inn Wilson Room King Bed"];

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
