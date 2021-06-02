import * as React from "react";

import PageParagraph from "../../styledComponents/Shared/PageParagraph";
import PageParagraphLink from "../../styledComponents/Shared/PageParagraphLink";

// Paragraphs

const Paragraph1 = (
  <PageParagraph key="victoriaRoomParagraph1">
    Choose one of the{" "}
    <PageParagraphLink href="/rooms">Union Gables Inn rooms</PageParagraphLink>{" "}
    located in the Japanese gardens. The Victoria Room is located upstairs in
    one of the outer buildings just steps from the pool and the main mansion.
    Indulge in this large one bedroom with a jetted soaking tub and a separate
    glass shower in the bathroom.
  </PageParagraph>
);

const Paragraph2 = (
  <PageParagraph key="victoriaRoomParagraph2">
    Elegantly decorated with antique furnishings, the Victoria Room offers a
    king-sized bed for two with luxury sheets. In addition to a private
    bathroom, our historic rooms have been modernized to include air
    conditioning, HD flat-screen televisions, and complimentary wireless
    internet.
  </PageParagraph>
);

// Text
const title = "Victoria Room";

// Amenities
const amenities = [
  '43" flat-screen television',
  "Air conditioning",
  "Antique furnishings",
  "Complimentary high-speed wireless internet",
  "Hair dryer",
  "Iron & ironing board",

  "Luxurious linens",
  "Mini-refrigerator",
  "Robes",
  "Soaking tub",
  "Separate glass shower",
];

// Alts
const alts = [
  "Union Gables Inn Victoria Room Front of Bed",
  "Union Gables Inn Victoria Room Side of Bed",
  "Union Gables Inn Victoria Room Side of Bed and TV",
  "Union Gables Inn Victoria Room Bathtub and Shower",
  "Union Gables Inn Victoria Room Bathroom Sinks",
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
