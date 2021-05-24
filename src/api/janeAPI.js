import * as React from "react";

import PageParagraph from "../styledComponents/Shared/PageParagraph";
import PageParagraphLink from "../styledComponents/Shared/PageParagraphLink";

// Paragraphs

const Paragraph1 = (
  <PageParagraph center={true} key="janeParagraph1">
    Step back in time to the elegant Jane Room. Located on the first floor of
    the Inn, this room was originally the formal dining room of the mansion
    during its early days, and now with carefully preserved hardwood floors and
    clay moldings on the ceiling. The room is tastefully decorated with Tiffany
    lamps, classic marble top tables, and a king-sized sleigh bed with luxury
    sheets.
  </PageParagraph>
);

const Paragraph2 = (
  <PageParagraph center={true} key="janeParagraph2">
    A few modern adjustments include the original fireplace which has been
    converted to a natural gas fireplace, a newly remodeled bathroom with a
    soaking tub and tiled shower, plus air conditioning, HD cable television,
    and high-speed wireless Internet. Enjoy the classic comforts of the Jane
    Room during your next stay at Union Gables Inn.
  </PageParagraph>
);

const Paragraph3 = (
  <PageParagraph center={true} key="janeParagraph3">
    Pets are allowed in this room for a one-time fee.{" "}
  </PageParagraph>
);

// Text
const title = "Jane Room";

// Amenities
const amenities = [
  '43" flat-screen television',
  "Air conditioning",
  "Complimentary high-speed wireless internet",
  "Gas fireplace",
  "Hair dryer",
  "Iron & ironing board",

  "King sleigh bed",
  "Luxurious linens",
  "Mini-refrigerator",
  "Robes",
  "Soaking tub",
  "Tiled shower",
];

// Alts
const alts = [
  "Jane Room Office Desk, TV, Fire Place",
  "Jane Room King Bed",
  "Jane Room Bathroom and Bathtub",
  "Jane Room Lounge Chairs",
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
