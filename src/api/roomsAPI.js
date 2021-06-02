import * as React from "react";

// Shared Components
import PageParagraph from "../styledComponents/Shared/PageParagraph";
import PageSubParagraph from "../styledComponents/Shared/PageSubParagraph";
import PageQuote from "../styledComponents/Shared/PageQuote";
import PageParagraphLink from "../styledComponents/Shared/PageParagraphLink";

// Text
const title = "Historic Lodgings in Saratoga Springs, NY";

// Sections

const Section1 = (
  <PageParagraph extraBottomPadding={true}>
    <PageSubParagraph>
      Discover our charming lodgings in Saratoga Springs, where historic details
      are balanced with the delightful offerings of a luxury hotel. Each of our
      romantic and elegant rooms are unique, with no two decorated alike.
      Indulge in an oversized hotel room in Saratoga Springs with a natural gas
      fireplace, antique furnishings, and luxurious linens.
    </PageSubParagraph>
    <PageSubParagraph>
      All of the rooms at Union Gables Inn have a private ensuite bathroom, with
      select rooms offering jetted soaking tubs. Our rooms have been upgraded
      for the twenty-first century to include high-speed wireless Internet, air
      conditioning, flat-screen televisions, and other{" "}
      <PageParagraphLink href="/about-us/amenities">
        modern amenities
      </PageParagraphLink>
      . Select rooms on garden level have private patios and other rooms offer
      airy balconies to admire our sprawling gardens and quiet grounds.
    </PageSubParagraph>
    <PageSubParagraph last={true}>
      Explore our variety of rooms, listed by building. Our room options include
      accommodations inside the{" "}
      <PageParagraphLink href="/rooms/main-mansion">
        Main Mansion
      </PageParagraphLink>{" "}
      of Union Gables Inn, situated on the <strong>garden level</strong>,
      oversized rooms across the street in the <strong>Alexander House</strong>,
      or extended stay options in the{" "}
      <PageParagraphLink href="/rooms/carriage-house">
        Carriage House
      </PageParagraphLink>
      . Reserve your romantic lodgings in Saratoga Springs, NY today.
    </PageSubParagraph>
    <PageQuote left={true} halfPadding={true} extraTopPadding={true}>
      Due to the historic nature of the mansion, Union Gables welcomes children
      twelve and older.
    </PageQuote>
  </PageParagraph>
);

const api = {
  // Text
  title,

  // Sections
  Section1,
};

export default api;
