import * as React from "react";

import PageParagraph from "../../styledComponents/Shared/PageParagraph";

// Paragraphs

const Paragraph1 = (
  <PageParagraph key="pondCottageParagraph1">
    Enjoy a delightful retreat to the Pond Cottage. This seasonal room features
    a private gated patio, an electric fireplace, and a number of special
    antiquities on display. Tuck yourself into the king-sized sleigh bed with
    luxury sheets or relax by the HD flat-screen television wrapped in a plush
    robe.
  </PageParagraph>
);

const Paragraph2 = (
  <PageParagraph key="pondCottageParagraph2">
    In addition to a private bathroom with a shower and quaint sitting area, the
    Pond Cottage boasts a small kitchenette with a microwave, refrigerator, and
    cabinets. Enjoy modern amenities like an HD flat-screen television,
    complimentary wireless internet, and air conditioning.
  </PageParagraph>
);

const Paragraph3 = (
  <PageParagraph key="pondCottageParagraph3">
    Pets are welcome in the room with a one-time pet fee.
  </PageParagraph>
);

// Text
const title = "Pond Cottage";

// Amenities
const amenities = [
  '43" flat-screen television',
  "Air conditioning",
  "Complimentary high-speed wireless internet",
  "Electric fireplace",
  "Gated patio",
  "Hair dryer",
  "Iron & ironing board",

  "King sleigh bed",
  "Luxurious linens",
  "Microwave",
  "Refrigerator",
  "Robes",
  "Soaking tub",
  "Tiled shower",
];

// Alts
const alts = [
  "Union Gables Inn Pond Cottage Porch ",
  "Union Gables Inn Pond Cottage Side of Bed",
  "Union Gables Inn Pond Cottage Garden",
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
