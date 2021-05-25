import * as React from "react";

import PageParagraph from "../../styledComponents/Shared/PageParagraph";

// Paragraphs

const Paragraph1 = (
  <PageParagraph center={true} key="kateParagraph1">
    Stay on the eastern side of the Mansion in the Kate Room, a picturesque room
    overlooking the pool, fountains, and flowering gardens. Elegantly decorated
    with Thoroughbred horse paintings, this room features a comfortable
    king-sized bed with luxury sheets and a charming sitting area with a natural
    gas fireplace.
  </PageParagraph>
);

const Paragraph2 = (
  <PageParagraph key="kateParagraph2">
    With space to work and play, it’s easy to set up your laptop at the antique
    desk or lounge in the sitting area with a movie on the HD flat-screen TV.
    The Kate Room has a private bathroom with a shower and cozy robes to wrap up
    in.
  </PageParagraph>
);

const Paragraph3 = (
  <PageParagraph key="kateParagraph3">
    Pets are allowed in this room for a one-time fee.{" "}
  </PageParagraph>
);

// Text
const title = "Kate Room";

// Amenities
const amenities = [
  '43" flat-screen television',
  "Air conditioning",
  "Antique furnishings",
  "Complimentary high-speed wireless internet",
  "Gas fireplace",
  "Hair dryer",

  "Iron & ironing board",
  "King bed",
  "Luxurious linens",
  "Mini-refrigerator",
  "Robes",
  "Tiled shower",
];

// Alts
const alts = [
  "Kate Room Side of Bed and Sunny Windows",
  "Kate Room Side of Bed, Sunny Windows, Some Bathroom",
  "Kate Room Front of Bed",
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
