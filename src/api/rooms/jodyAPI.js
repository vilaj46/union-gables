import * as React from "react";

import PageParagraph from "../../styledComponents/Shared/PageParagraph";

// Paragraphs

const Paragraph1 = (
  <PageParagraph key="jodyParagraph1">
    Fall in love with the intimate and quaint Jody Room with bay windows
    overlooking the pool and lawn with sunlight streaming in from the southeast.
    This charming room offers a king-sized bed with luxury sheets, a comfortable
    sitting area with a fireplace stove, and a private bathroom with tub-shower.
  </PageParagraph>
);

const Paragraph2 = (
  <PageParagraph key="jodyParagraph2">
    Choose the historic ambiance and antique furnishings of Union Gables Inn
    without sacrificing the modern amenities that today’s travelers want. The
    Jody Room comes with complimentary wireless internet, an HD flat-screen TV,
    in-room refrigerator, and many more modern amenities.
  </PageParagraph>
);

// Text
const title = "Jody Room";

// Amenities
const amenities = [
  '30" flat-screen television',
  "Air conditioning",
  "Antique furnishings",
  "Complimentary high-speed wireless internet",
  "Gas fireplace stove",
  "Hair dryer",
  "Iron & ironing board",

  "King sleigh bed",
  "Luxurious linens",
  "Mini-refrigerator",
  "Robes",
  "Tub-shower combination",
];

// Alts
const alts = [
  "Jody Room Front of Bed and Sunny Windows",
  "Jody Room Side of Bed, and Sunny Windows",
  "Jody Room Side of Bed, Fireplace stove, and Sunny Windows",
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
