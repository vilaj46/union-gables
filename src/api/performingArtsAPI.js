import * as React from "react";

// Shared Components
import PageParagraph from "../styledComponents/Shared/PageParagraph";
import PageSubParagraph from "../styledComponents/Shared/PageSubParagraph";
import PageParagraphLink from "../styledComponents/Shared/PageParagraphLink";

// Images
import ballerinas from "../images/performingArts/ballerinas.jpg";
import saxaphone from "../images/performingArts/saxaphone.jpg";
import theater from "../images/performingArts/theater.jpg";
import violins from "../images/performingArts/violins.jpg";

// Paragraphs

const Paragraph1 = (
  <PageParagraph extraBottomPadding={true}>
    Stay at our hotel near Saratoga Performing Arts Center to attend outdoor
    concerts all summer long! This contemporary amphitheatre hosts traditional
    performances including classical music, pop and rock, opera, and jazz, as
    well as a variety of acts and events like comedy shows, operas, food
    festivals, and the New York City Ballet. The Official Summer Home of the NYC
    Ballet and the Philadelphia Orchestra, SPAC is a non-profit corporation that
    is dedicated to showcasing the arts.
  </PageParagraph>
);

const Paragraph2 = (
  <PageParagraph>
    <PageSubParagraph>
      It’s about a 7-minute drive from our hotel by Saratoga Performing Arts
      Center. Take Avenue of the Pines to S Broadway to the venue.
    </PageSubParagraph>
    <PageSubParagraph>
      The amphitheatre hosts numerous concerts from Memorial Day to Labor Day.
      See what’s coming up on their{" "}
      <PageParagraphLink
        href="https://spac.org/calendar/calendar-of-events/"
        target={true}
      >
        calendar of events
      </PageParagraphLink>
      .
    </PageSubParagraph>
    <PageSubParagraph>
      Parking in all lots is $10 per car for Live Nation Concerts. Parking
      during classical performances is free!
    </PageSubParagraph>
    <PageSubParagraph>
      The main parking lot is located off Route 50.
    </PageSubParagraph>
    <PageSubParagraph>
      Sit on the lawn if you’re bringing personal food and sealed bottles of
      water.
    </PageSubParagraph>
    <PageSubParagraph>
      Lawn chairs must not exceed the height of 43”.
    </PageSubParagraph>
  </PageParagraph>
);
const Paragraph3 = (
  <PageParagraph>
    <PageSubParagraph>
      The majority of shows are held in the 5,200-seat amphitheater with a
      sloping lawn. Additional shows take place next door at{" "}
      <strong>Spa Little Theater</strong>, <strong>The Hall of Springs</strong>,
      or the <strong>Charles R. Wood Stage</strong>.
    </PageSubParagraph>
    <PageSubParagraph>
      Take children for a swim in the <strong>Peerless Pool Complex!</strong>{" "}
      There is a separate slide pool, a children’s wading pool with fountain,
      and a zero-depth entry main pool with adjacent lockers and restrooms.
    </PageSubParagraph>
    <PageSubParagraph>
      Hit the links at <strong>Saratoga Spa State Park Golf Course!</strong>{" "}
      There is one championship 18-hole course and a challenging 9-hole course.
      Reserve your{" "}
      <PageParagraphLink href="https://www.saratogaspagolf.com/" target={true}>
        tee time online
      </PageParagraphLink>
      .
    </PageSubParagraph>
    <PageSubParagraph>
      Enjoy numerous picnic areas around SPAC and wander along trails beside
      streams.
    </PageSubParagraph>
  </PageParagraph>
);

const Paragraph4 = (
  <PageParagraph center={true}>
    Book your{" "}
    <PageParagraphLink href="/rooms/lodging">one-of-a-kind</PageParagraphLink>{" "}
    room today at our historic hotel near Saratoga Performing Arts Center!{" "}
  </PageParagraph>
);

// Text
const title = "Hotel Near Saratoga Performing Arts Center";
const subTitle1 = "Plan your visit";
const subTitle2 = "Around SPAC";

const api = {
  // Text
  title,
  subTitle1,
  subTitle2,

  // Paragraphs
  Paragraph1,
  Paragraph2,
  Paragraph3,
  Paragraph4,

  // Images
  ballerinas,
  saxaphone,
  theater,
  violins,
};

export default api;
