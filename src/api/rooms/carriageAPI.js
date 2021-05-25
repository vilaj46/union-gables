import * as React from "react";

import PageParagraph from "../../styledComponents/Shared/PageParagraph";
import PageSubParagraph from "../../styledComponents/Shared/PageSubParagraph";

// Sections

const Section1 = (
  <PageParagraph extraBottomPadding={true}>
    <PageSubParagraph>
      Stay a little longer in the Union Gables Carriage House. Perfect for
      long-term stays, The Carriage House is situated next to the Inn with a
      private entrance. With space for four guests, this charming and
      comfortable accommodation is the perfect retreat for travelers to enjoy
      the tranquil gardens as well as the beautiful shared spaces at Union
      Gables Inn.
    </PageSubParagraph>
    <PageSubParagraph>
      Enjoy a lovely view of the pool, lawn, and fountain from the master
      bedroom and cozy living space located on the second floor. There are still
      the original hardwood floors in the living room and bedrooms of the
      historic Union Gables Carriage House.{" "}
    </PageSubParagraph>
    <PageSubParagraph moreBottomPadding={true}>
      The living room is situated between the two bedrooms, and each bedroom has
      its own full bathroom with tub/shower. The master bedroom is a long room
      with a king bed and a window seat at one end. The second bedroom has a
      king bed with a small bathroom.
    </PageSubParagraph>
  </PageParagraph>
);

const Section2 = (
  <PageParagraph>
    <PageSubParagraph>
      Join us in the main mansion for breakfast each morning and discover a
      variety of delightful restaurants within walking distance in town.
      Spending an evening in? The Union Gables Carriage House has a private
      kitchen with glass cabinets and tile floors.{" "}
    </PageSubParagraph>
    <PageSubParagraph>
      The Carriage House is the two-bedroom suite with 2 king bedrooms upstairs
      in the carriage house, and the Henry Suite is the downstairs room in the
      Carriage House. Option to rent the Carriage House and Henry Suite with a
      "Hotel Door" to unlock in between.
    </PageSubParagraph>
  </PageParagraph>
);

// Text
const title = "Union Gables Carriage House";

// Alts
const alts = [
  "Carriage House Living Room",
  "Carriage House Couch and TV",
  "Carriage House Kitchen",
  "Carriage House Side of Bed and TV",
  "Carriage House Side of Bed and Rocking Chair",
];

const api = {
  // Sections
  Section1,
  Section2,

  // Text
  title,

  // Alts
  alts,
};

export default api;
