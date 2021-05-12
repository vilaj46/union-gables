import * as React from "react";

// Shared Components
import PageParagraph from "../styledComponents/Shared/PageParagraph";
import PageParagraphLink from "../styledComponents/Shared/PageParagraphLink";

// Images
import horse from "../images/raceCourse/horse.jpg";
import jockeys from "../images/raceCourse/jockeys.jpg";
import race from "../images/raceCourse/race.jpg";
import racetrack from "../images/raceCourse/racetrack.jpg";

// Paragraphs
const Paragraph1 = (
  <PageParagraph>
    Get ready to sit at the edge of your seat when you visit the race track!
    Stay at our hotel near the Saratoga Springs Race Track to be close to the
    heart pounding excitement of horse racing; whether you’re traveling with the
    family, or even on business.
  </PageParagraph>
);

const Paragraph2 = (
  <PageParagraph extraBottomPadding={true}>
    This year’s racing season starts in July, 2020. Please visit the official{" "}
    <PageParagraphLink href="https://www.saratogaracetrack.com/" target={true}>
      Saratoga Race Track website
    </PageParagraphLink>{" "}
    for the full calendar schedule.
  </PageParagraph>
);

const Paragraph3 = (
  <PageParagraph extraBottomPadding={true}>
    Try your luck wagering on a race (or two!) Bet on site at the track, or
    online at{" "}
    <PageParagraphLink href="https://www.saratogabets.com/" target={true}>
      Saratoga Bets
    </PageParagraphLink>
    . Make your wager from the comfort of your room when you stay with us at our
    hotel near the Saratoga race track.
  </PageParagraph>
);

const Paragraph4 = (
  <PageParagraph>
    Check out the official website to find out how to{" "}
    <PageParagraphLink
      href="https://www.saratoga.com/race-track/tickets/"
      target={true}
    >
      purchase season passes
    </PageParagraphLink>
    , premium box seats and how to book for large groups.
  </PageParagraph>
);

const Paragraph5 = (
  <PageParagraph extraBottomPadding={true}>
    Take a walking tour of this historic race course; as one of the oldest
    racetracks in the U.S., there is so much history to uncover. Learn about
    this race track’s story, its architecture, traditions, and more.
  </PageParagraph>
);

const Paragraph6 = (
  <PageParagraph extraBottomPadding={true}>
    45-minute walking tours of the race course are available between 9:30 a.m.
    and 2:30 p.m. each racing day on an hourly basis. Rates are $3 per person
    and $10 per family. Please contact Guest Services directly for more
    information at 518-584-6200 x 4433.
  </PageParagraph>
);

const Paragraph7 = (
  <PageParagraph>
    Take a FREE tour of the historic stable area at the Saratoga Race Track.
    Trams depart from the Main Clubhouse entrance every 15 minutes starting at
    7:30 a.m. until 9:30 a.m. The tour length is approximately 45 minutes. No
    reservations are needed; these tours are first come, first serve.
  </PageParagraph>
);

// Text

const title = "Hotel Near Saratoga Race Track";
const subTitle1 = "2020 Schedule";
const subTitle2 = "Betting at the Track";
const subTitle3 = "Admissiosn";
const subTitle4 = "Tours";
const subTitle5 = "Walking Tours";
const subTitle6 = "Stable Tours";
const quote = "Book your stay at our hotel near the Saratoga Race Track today!";

const api = {
  // Text
  title,
  subTitle1,
  subTitle2,
  subTitle3,
  subTitle4,
  subTitle5,
  subTitle6,
  quote,

  // Paragraphs
  Paragraph1,
  Paragraph2,
  Paragraph3,
  Paragraph4,
  Paragraph5,
  Paragraph6,
  Paragraph7,

  // Images
  horse,
  jockeys,
  race,
  racetrack,
};

export default api;
