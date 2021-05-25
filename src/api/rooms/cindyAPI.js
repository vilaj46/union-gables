import * as React from "react";

import PageParagraph from "../../styledComponents/Shared/PageParagraph";

// Paragraphs

const Paragraph1 = (
  <PageParagraph center={true} key="cindyParagraph1">
    Perfect for families, this suite boasts two adjacent bedrooms with space for
    four guests. One large room features a queen-sized sleigh bed and hardwood
    floors, while the other room offers two extra-long twin beds with
    wall-to-wall carpeting and a small desk.
  </PageParagraph>
);

const Paragraph2 = (
  <PageParagraph center={true} key="cindyParagraph2">
    Sit out on the enclosed screened-in porch or relax in the queen bedroom with
    a movie on the HD flat-screen TV and the warmth of the gas fireplace stove.
    The Cindy Room has been modernized with a number of amenities, including
    complimentary wireless internet, an in-room refrigerator, and air
    conditioning.
  </PageParagraph>
);

const Paragraph3 = (
  <PageParagraph center={true} key="cindyParagraph3">
    Pets are allowed in this room for a one-time fee.
  </PageParagraph>
);

// Text
const title = "Cindy Room";

// Amenities
const amenities = [
  '43" flat-screen television',
  "Air conditioning",
  "Antique furnishings",
  "Complimentary high-speed wireless internet",
  "Dressing area",
  "Gas fireplace",
  "Hair dryer",
  "Iron & ironing board",

  "Queen sleigh bed",
  "Luxurious linens",
  "Mini-refrigerator",
  "Robes",
  "Tub-shower combination",
];

// Alts
const alts = [
  "Cindy Room Side of Bed and Sunny Windows",
  "Cindy Room Twin Beds",
  "Cindy Room Porch and Lounge Area",
  "Cindy Room Side of Bed and Sunny Windows",
];

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
