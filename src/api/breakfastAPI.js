import * as React from "react";

// Shared Components
import PageParagraph from "../styledComponents/Shared/PageParagraph";
import PageSubParagraph from "../styledComponents/Shared/PageSubParagraph";
import PageParagraphLink from "../styledComponents/Shared/PageParagraphLink";

// Paragraphs
const Paragraph1 = (
  <PageParagraph extraBottomPadding={true}>
    <PageSubParagraph last={true}>
      <strong>Please note</strong>: Due to COVID-19 precautions, our hot
      breakfast is temporarily unavailable. We are offering breakfast baskets
      filled with a pastry, yogurt, fruit, granola bar, nuts, Orange juice or
      apple juice delivered to the outside of the room in the morning for
      contact-less delivery.
    </PageSubParagraph>
  </PageParagraph>
);

const Paragraph2 = (
  <PageParagraph extraBottomPadding={true}>
    <PageSubParagraph>
      Enjoy daily, complimentary breakfast when you stay with us at Union Gables
      Inn in Saratoga Springs. Breakfast is served at any of our seating areas –
      feel free to cozy up by the fireplace in the winter, or lounge by the
      luscious gardens in the summer. The front porch with its comfortable
      seating and cool breezes becomes the favored seating for many during the
      warmer months.
    </PageSubParagraph>
    <PageSubParagraph last={true}>
      Start your day right with a freshly prepared, locally sourced, and
      made-to-order breakfast prepared by our skillful Cordon Bleu trained Chef.
      Our locally sourced ingredients include eggs from Thomas Poultry Farm,
      milk from Battenkill Farm, and other seasonal produce.
    </PageSubParagraph>
  </PageParagraph>
);

const Paragraph3 = (
  <PageParagraph>
    <PageSubParagraph>
      Breakfast is served between 8 AM and 10 AM.
    </PageSubParagraph>
    <PageSubParagraph>
      Choose from a wide variety of options on our menu that include sweets like
      pancakes, waffles, and French toast; lighter options such as granola,
      fruit and yogurt; and savory, egg-based dishes and potatoes.
    </PageSubParagraph>
    <PageSubParagraph>
      Join us each morning of your visit – our breakfast menu changes daily!
      We’re also happy to provide gluten and dairy-free options to accommodate
      our guests’ dietary needs.
    </PageSubParagraph>
    <PageSubParagraph>
      Our complimentary, hot breakfast is just one of many{" "}
      <PageParagraphLink href="/about-us/amenities">
        amenities
      </PageParagraphLink>{" "}
      to take advantage of at Union Gables Inn. Book your stay directly today!
    </PageSubParagraph>
  </PageParagraph>
);

// Text
const title = "Delectable Breakfasts at Union Gables Inn";

const api = {
  // Text
  title,

  // Paragraphs
  Paragraph1,
  Paragraph2,
  Paragraph3,
};

export default api;
