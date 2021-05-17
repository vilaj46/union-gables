import * as React from "react";

// Shared Components
import PageParagraph from "../styledComponents/Shared/PageParagraph";
import PageSubParagraph from "../styledComponents/Shared/PageSubParagraph";
import PageParagraphLink from "../styledComponents/Shared/PageParagraphLink";

// Images
import pool from "../images/amenities/pool.jpg";
import lamps from "../images/amenities/lamps.jpg";
import porch from "../images/amenities/porch.jpg";
import garden from "../images/amenities/garden.jpg";
import statue from "../images/amenities/statue.jpg";
import garden2 from "../images/amenities/garden2.jpg";
import benedict from "../images/amenities/benedict.jpg";
import billiards from "../images/amenities/billiards.jpg";
import fireplace from "../images/amenities/fireplace.jpg";
import loungechairs from "../images/amenities/loungechairs.jpg";
import loungechairs2 from "../images/amenities/loungechairs2.jpg";

const Paragraph1 = (
  <PageParagraph>
    <PageSubParagraph>
      Discover Union Gables Inn at Saratoga Springs; complete with all the
      amenities necessary for your unforgettable getaway. Enjoy exploring our
      historic property, full of beautiful, antique furnishings and elegant
      décor.
    </PageSubParagraph>
    <PageSubParagraph>
      Let us make your stay a memorable one with our extensive list of amenities
      that include a sophisticated complimentary breakfast, natural gas
      fireplaces, jetted tubs, and so much more. Don't miss your chance to take
      a dip in our guest favorite heated outdoor pool and book your stay at our
      Saratoga hotel with a pool today!
    </PageSubParagraph>
  </PageParagraph>
);

const Paragraph2 = (
  <PageParagraph extraBottomPadding={true}>
    <strong>
      <em>Hot breakfast temporarily unavailable.</em>
    </strong>
    We are offering breakfast baskets filled with a pastry, yogurt, fruit,
    granola bar, nuts, Orange juice or apple juice delivered to the outside of
    the room in the morning for contact-less delivery.
  </PageParagraph>
);

const Paragraph3 = (
  <PageParagraph>
    Wake up to a{" "}
    <PageParagraphLink href="../breakfast">breakfast</PageParagraphLink> you’ll
    never forget with an ever-changing menu prepared by our Cordon Bleu
    trainined Chef. Enjoy breakfast at different seating areas around the
    property. In the summer, sit on the patio with a complimentary newspaper or
    linger on the wraparound porch.
  </PageParagraph>
);

const Paragraph4 = (
  <PageParagraph extraBottomPadding={true}>
    <PageSubParagraph>
      <strong>
        <em>
          Only guests of the Inn allowed in the pool area. Log in and out system
          implemented.
        </em>
      </strong>
    </PageSubParagraph>
    <PageSubParagraph>
      Relax in our heated outdoor pool or by the water on a pool lounger or
      plush patio chairs with seating for 25.
    </PageSubParagraph>
    <PageSubParagraph last={true}>
      The pool is open from 8 AM to sundown and available seasonally from
      Memorial Day to Labor Day. Book your stay at our Saratoga hotel with a
      pool to take advantage of this guest-favorite amenity!
    </PageSubParagraph>
  </PageParagraph>
);

const Paragraph4Half = (
  <PageParagraph>
    Visit the concierge desk for help with any of your needs during your stay
    here at Union Gables Inn. Our concierge desk is open daily. Ask us about our
    local recommendations as well as checking-in early (subject to
    availability)– free of charge.
  </PageParagraph>
);

const Paragraph5 = (
  <PageParagraph extraBottomPadding={true}>
    Winner of six Gardening Awards, our beautifully-landscaped grounds stretch
    across two adjoining properties with over one and a half acres of space. A
    quiet oasis tucked amidst palm trees and flowering Japanese gardens, our
    grounds offer two gazebos, Romanesque statue fountains, and cuddle cove
    seats.
  </PageParagraph>
);

const Paragraph6 = (
  <PageParagraph extraBottomPadding={true}>
    <PageSubParagraph>
      Union Gables Inn is happy to host your next business meeting, secluded
      retreat, or intimate event! Plan a business meeting for 25 in our
      oversized living room, separated from other guests with pocket doors.
    </PageSubParagraph>
    <PageSubParagraph>
      Host an outdoor garden party on our lawn with space for 100 people and a
      40x40 tent. We're happy to assist with off-site catering and event
      coordination.
    </PageSubParagraph>
  </PageParagraph>
);

const Paragraph7 = (
  <PageParagraph extraBottomPadding={true}>
    Stay connected at all times with our complimentary high-speed wireless
    Internet.
  </PageParagraph>
);

const Paragraph8 = (
  <PageParagraph extraBottomPadding={true}>
    No need to worry about hidden costs like parking when you stay with us at
    Union Gables Inn.
  </PageParagraph>
);

const Paragraph9 = (
  <PageParagraph>
    Choose Union Gables Inn for our smoke-free and pet-friendly accommodations.
    Read our full{" "}
    <PageParagraphLink href="../pet-friendly">
      pet policy here
    </PageParagraphLink>
    .{" "}
  </PageParagraph>
);

const Paragraph10 = (
  <PageParagraph>
    Book your stay today at our historic Saratoga Hotel with a pool, gourmet
    breakfast, and additional luxurious amenities.
  </PageParagraph>
);

// Text
const title = "Union Gables Inn Amenities";
const subTitle1 = "Complimentary Breakfast";
const subTitle2 = "Concierge Service";
const subTitle3 = "Outdoor Pool";
const subTitle4 = "Grounds";
const subTitle5 = "Private Events";
const subTitle6 = "Wireless Internet";
const subTitle7 = "Complimentary Parking";
const subTitle8 = "Pet-Friendly and Smoke-Free";

const api = {
  // Text
  title,
  subTitle1,
  subTitle2,
  subTitle3,
  subTitle4,
  subTitle5,
  subTitle6,
  subTitle7,
  subTitle8,

  // Paragraphs
  Paragraph1,
  Paragraph2,
  Paragraph3,
  Paragraph4,
  Paragraph4Half,
  Paragraph5,
  Paragraph6,
  Paragraph7,
  Paragraph8,
  Paragraph9,
  Paragraph10,

  // Images
  billiards,
  benedict,
  fireplace,
  garden,
  garden2,
  lamps,
  loungechairs,
  loungechairs2,
  pool,
  porch,
  statue,
};

export default api;
