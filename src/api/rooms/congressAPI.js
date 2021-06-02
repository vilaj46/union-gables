import * as React from "react";

import PageParagraph from "../../styledComponents/Shared/PageParagraph";
import PageParagraphLink from "../../styledComponents/Shared/PageParagraphLink";

// Paragraphs

const Paragraph1 = (
  <PageParagraph key="congressSuiteParagraph1">
    The Congress Spring Suite is located in the Alexander House, our sister
    property across the Avenue from Union Gables Inn and includes access to all{" "}
    <PageParagraphLink href="/about-us/amenities">
      amenities of the Inn
    </PageParagraphLink>
    . This one bedroom suite located on the second floor is beautifully finished
    with hardwood floors, antiques, and comfortable furnishings. These larger
    suites range from 800 square feet to 3000 square feet.
  </PageParagraph>
);

const Paragraph2 = (
  <PageParagraph key="congressSuiteParagraph2">
    The Congress Spring Suite features a queen-sized bed with luxury sheets and
    a private bathroom with a walk-in glass shower. Set up your home base in
    this studio-style suite with a large living room and a center kitchen with
    cherry cabinets and stainless steel appliances. Step outside for a breath of
    fresh air on the deck off the kitchen.
  </PageParagraph>
);

const Paragraph3 = (
  <PageParagraph key="congressSuiteParagraph3">
    Pets are not allowed in this room.{" "}
  </PageParagraph>
);

const Paragraph4 = (
  <PageParagraph key="congressSuiteParagraph4">
    Add this room to the Room 5A, a king bedroom with private bathroom, to
    create an adjoining two bedroom. Reservations for seven consecutive nights
    or more receive a 10% discount (excludes holidays).
  </PageParagraph>
);

// Text
const title = "Congress Spring Suite 5";

// Amenities
const amenities = [
  '43" flat-screen television',
  "Air conditioning",
  "Antique furnishings",
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
  "Union Gables Inn Congress Spring Suite 5 Side of Bed",
  "Union Gables Inn Congress Spring Suite 5 Living Room and TV",
  "Union Gables Inn Congress Spring Suite 5 Living Room Couch",
  "Union Gables Inn Congress Spring Suite 5 Bathroom",
];

const api = {
  // Paragraphs
  Paragraph1,
  Paragraph2,
  Paragraph3,
  Paragraph4,

  // Text
  title,

  // Amenities
  amenities,

  // Alts
  alts,
};

export default api;
