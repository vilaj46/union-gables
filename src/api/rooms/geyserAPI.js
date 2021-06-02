import * as React from "react";

import PageParagraph from "../../styledComponents/Shared/PageParagraph";

// Paragraphs

const Paragraph1 = (
  <PageParagraph key="geyserParagraph1">
    Stay in the Alexander House in this one-bedroom suite located on the second
    floor. This suite features a king bed, bright living room with bamboo
    floors, gas fireplace, antiques, and kitchen with cherry cabinets. Enjoy a
    lovely view of the gardens and fountain in this comfortable suite.
  </PageParagraph>
);
// Text
const title = "Geyser Spring Suite";

// Amenities
const amenities = [
  '43" flat-screen television',
  "Air conditioning",
  "Antique furnishings",
  "Complimentary high-speed wireless internet",
  "Gas fireplace",
  "Hair dryer",
  "Iron & ironing board",

  "Kitchen",
  "Living Room",
  "Luxurious linens",
  "Mini-refrigerator",
  "Patio",
  "Robes",
  "Stainless steel kitchen appliances",
  "Walk-in glass shower",
];

// Alts
const alts = [
  "Union Gables Inn Geyser Spring Suite Bathroom",
  "Union Gables Inn Geyser Spring Suite Front of Bed",
  "Union Gables Inn Geyser Spring Suite Kitchen",
  "Union Gables Inn Geyser Spring Suite TV",
  "Union Gables Inn Geyser Spring Suite Living Room Couch and TV",
];

const api = {
  // Paragraphs
  Paragraph1,

  // Text
  title,

  // Amenities
  amenities,

  // Alts
  alts,
};

export default api;
