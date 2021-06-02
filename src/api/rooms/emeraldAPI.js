import * as React from "react";

import PageParagraph from "../../styledComponents/Shared/PageParagraph";

// Paragraphs

const Paragraph1 = (
  <PageParagraph key="emeraldRoomParagraph1">
    Relax in the Emerald Room, a Garden Level room with a secluded private deck
    tucked away amidst winding garden paths. This open and bright room boasts
    vaulted cathedral ceilings and skylights in addition to hardwood floors and
    cheerful décor.
  </PageParagraph>
);

const Paragraph2 = (
  <PageParagraph key="emeraldRoomParagraph2">
    Rest comfortably in king-sized bed with luxury sheets and an adjacent gas
    fireplace with a mounted HD flat-screen television. Store snacks to enjoy
    between meals in the kitchenette area, which offers a convenient microwave
    and refrigerator. The Emerald Room has a private bathroom with a
    double-headed shower, plus modern amenities like robes, air conditioning,
    and complimentary wireless internet.
  </PageParagraph>
);

const Paragraph3 = (
  <PageParagraph key="emeraldRoomParagraph3">
    Pets are welcome in the room with a one-time pet fee.
  </PageParagraph>
);

// Text
const title = "Emerald Room";

// Amenities
const amenities = [
  '43" flat-screen television',
  "Air conditioning",
  "Antique furnishings",
  "Cathedral ceilings and skylight",
  "Complimentary high-speed wireless internet",
  "Gas fireplace",
  "Hair dryer",

  "Iron & ironing board",
  "King bed",
  "Luxurious linens",
  "Microwave",
  "Refrigerator",
  "Robes",
  "Shower with double-headed shower",
];

// Alts
const alts = [
  "Union Gables Inn Emerald Room Side of Bed, Tv, and Fireplace",
  "Union Gables Inn Emerald Room Side of Bed and Front Door",
  "Union Gables Inn Emerald Room Front of Bed and Open Door",
  "Union Gables Inn Emerald Room TV, Fireplace and Bathroom Door",
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
