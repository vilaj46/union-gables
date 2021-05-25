import * as React from "react";

import PageParagraph from "../../styledComponents/Shared/PageParagraph";
import PageParagraphLink from "../../styledComponents/Shared/PageParagraphLink";
import PageSubParagraph from "../../styledComponents/Shared/PageSubParagraph";

// Sections

const Section1 = (
  <PageParagraph key="henryParagraph1">
    <PageSubParagraph>
      Escape to our private suite in the gardens. The Henry Suite has its own
      private entrance and fenced in patio in front of the pool on the garden
      level of the{" "}
      <PageParagraphLink href="/rooms/carriage-house">
        historic Carriage House
      </PageParagraphLink>
      .
    </PageSubParagraph>
    <PageSubParagraph>
      Boasting an open floor plan design with hardwood floors throughout, this
      suite features a full-sized kitchen with stainless steel appliances, bar
      seating, and a dining area, in addition to a spacious living room with a
      50” flat-screen television and natural gas fireplace.
    </PageSubParagraph>
    <PageSubParagraph>
      The suite features shelves decorated with whimsical antiquities and a
      shuffleboard that is aligned as a beam along the ceiling. Awaken each
      morning after a gorgeous sleep in a king-sized sleigh bed to sunlight
      streaming through tall windows.
    </PageSubParagraph>
  </PageParagraph>
);

const Section2 = (
  <PageParagraph key="henryParagraph2">
    <PageSubParagraph>
      The bathroom has a tiled shower and a jetted soaking tub with a unique
      window feature that shutters open to the living room for a view of the
      fireplace and/or television. Enjoy the private comfort and open space of
      the Henry Suite for a weekend getaway or linger a little longer for an
      extended stay.
    </PageSubParagraph>
    <PageSubParagraph>
      Pets are welcome in the room with a one-time pet fee.{" "}
    </PageSubParagraph>
  </PageParagraph>
);

// Text
const title = "Henry Room";

// Amenities
const amenities = [
  '50" flat-screen television',
  "Air conditioning",
  "Antique furnishings",
  "Complimentary high-speed wireless internet",
  "Dining area",
  "Gas fireplace",
  "Garden patio",
  "Hair dryer",
  "Iron & ironing board",

  "King sleigh bed",
  "Kitchen",
  "Living room",
  "Luxurious linens",
  "Refrigerator",
  "Robes",
  "Soaking Tub",
  "Stainless steel kitchen appliances",
  "Tiled shower",
];

// Alts
const alts = [
  "Henry Suite Kitchen",
  "Henry Suite Bathtub",
  "Henry Suite Bathtub and Room",
  "Henry Suite Side of Bed and Kitchen Area",
  "Henry Suite Front of Bed",
  "Henry Suite Couch and TV",
  "Henry Suite Side of Couch and Front Door",
];

const api = {
  // Sections
  Section1,
  Section2,

  // Text
  title,

  // Amenities
  amenities,

  // Alts
  alts,
};

export default api;
