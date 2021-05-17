import * as React from "react";

// Shared Components
import PageParagraph from "../styledComponents/Shared/PageParagraph";
import PageSubParagraph from "../styledComponents/Shared/PageSubParagraph";
import PageParagraphLink from "../styledComponents/Shared/PageParagraphLink";

// Images
import bridge from "../images/spaStatePark/bridge.jpg";
import park from "../images/spaStatePark/park.jpg";
import river from "../images/spaStatePark/river.jpg";

// Paragraphs
const Paragraph1 = (
  <PageParagraph extraBottomPadding={true}>
    Your visit to Saratoga Springs isn’t complete without a trip to the State
    Park; a National Historic Landmark. Explore almost 3000 acres of historic
    sights, entertainment, fun activities and natural, mineral springs. With so
    many things to do, you’re sure to have a memorable trip that’s fun for the
    whole family. Be close to all the action when you stay at our hotel near
    Saratoga Springs Spa State Park.
  </PageParagraph>
);

const Paragraph2 = (
  <PageParagraph extraBottomPadding={true}>
    Immerse yourself in the Arts with a visit to the Saratoga Performing Arts
    Center or Home Made Theatre. Experience the moving powers of theatre, dance,
    and orchestra productions. Or let loose and rock out at a concert! Visit the{" "}
    <PageParagraphLink href="/discover/performing-arts">SPAC</PageParagraphLink>{" "}
    and{" "}
    <PageParagraphLink href="https://homemadetheater.org" target={true}>
      HMT
    </PageParagraphLink>{" "}
    websites to purchase tickets and for additional visitor information.
  </PageParagraph>
);

const Paragraph3 = (
  <PageParagraph extraBottomPadding={true}>
    Experience the legendary mineral spring water of Saratoga. Visit 21
    naturally carbonated springs with their own distinct, mineral makeup.
    Discover the rich history of these waters and learn about the myths
    surrounding their magical, healing properties. Bring your own water bottle
    to taste the waters for yourself! Learn about booking mineral hydrotherapy
    through the{" "}
    <PageParagraphLink
      href="https://www.gideonputnam.com/roosevelt-baths-and-spa/mineral-baths"
      target={true}
    >
      Roosevelt Spa
    </PageParagraphLink>
    .
  </PageParagraph>
);

const Paragraph4 = (
  <PageParagraph extraBottomPadding={true}>
    Check out our list of common visitor information to help plan your day!
  </PageParagraph>
);

const Paragraph5 = (
  <PageParagraph extraBottomPadding={true}>
    Stay at our hotel near Saratoga Spa State Park to be just a mile away from a
    day full of adventure! That’s less than a 5-minute drive, or 25-minute walk
    away.
  </PageParagraph>
);

const Paragraph6 = (
  <PageParagraph extraBottomPadding={true}>
    The State Park is open year-round, all days of the week. Hours vary between
    activities and amenities. See a full list of{" "}
    <PageParagraphLink
      href="https://parks.ny.gov/parks/saratogaspa"
      target={true}
    >
      operating hours
    </PageParagraphLink>
    . It is recommended that patrons contact the park directly before traveling
    to confirm operating hours.
  </PageParagraph>
);

const Paragraph7 = (
  <PageParagraph extraBottomPadding={true}>
    <PageSubParagraph>
      <strong>Entrance Fee</strong> – $10 per vehicle (price may vary by season,
      please call the park directly to confirm).
    </PageSubParagraph>
    <PageSubParagraph>
      Save on your trips to New York State Parks with your Empire Pass –
      eligible for use at the Saratoga Spa State Park.{" "}
      <PageParagraphLink
        href="https://parks.ny.gov/admission/empire-passport/default.aspx"
        target={true}
      >
        Click here
      </PageParagraphLink>{" "}
      for more details.
    </PageSubParagraph>
  </PageParagraph>
);

// Text
const title = "Hotel near Saratoga Spa State Park";
const subTitle1 = "At the Park";
const subTitle2 = "Entertainment";
const subTitle3 = "Natural Springs";
const subTitle4 = "Plan Your Visit";
const subTitle5 = "Directions";
const subTitle6 = "Hours";
const subTitle7 = "Admissions";
const subTitle8 = "Victoria Pool Admission";
const subTitle9 = "Snowshoe Rentals";
const quote =
  "Book your stay today at our hotel near Saratoga Spa State Park for four seasons of activities and adventure!";

// At the Park - Activities
const activities = [
  "Looking for a more relaxed time? Take it easy with a picnic in the park, or go for a walk on one of many trails.",
  "Enjoy the sunshine in the summer with bikes, or lounge by one of three pools.",
  "Take a swing at golf at one of two golf courses, play tennis, or fish the winding Geyser Creek.",
  "In the winter, try snowshoeing, ice-skating, and cross-country skiing. The opportunities for fun are endless!",
];
const activitiesListTitle = "Activities";
const activitiesListSubTitle =
  "It’s easy to stay active with so many options for sports and activities at the park.";

// History
const histories = [
  "Marvel the beauty of Federal-style architecture at the Banquet Hall of Springs and Lincoln Baths as you stroll through the park.",
  "Take home your new knowledge and fun memories, in addition to your souvenirs!",
  "Please visit the Automobile Museum and Dance Museum websites for information regarding hours, exhibits, events, and admission. ",
];
const historiesListTitle = "History";
const historiesListSubTitle =
  "School may be out for summer, but the learning doesn’t have to stop:";

// Charts
const chartHeader1 = "Victoria Pool Admission";
const chartHeader2 = "Snowshoe Rentals";
const poolRow1 = ["Adults", "$8"];
const poolRow2 = ["Children Under 5", "Free!"];
const poolRow3 = ["Children 5-11", "$4"];
const poolRow4 = [
  "Seniors & NY State Residents",
  "$4 (weekdays)",
  "$8 (weekends)",
];
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
  subTitle9,
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
  bridge,
  park,
  river,

  // At the Park
  activities,
  activitiesListTitle,
  activitiesListSubTitle,

  // History
  histories,
  historiesListTitle,
  historiesListSubTitle,

  // Charts
  chartHeader1,
  chartHeader2,
  poolRow1,
  poolRow2,
  poolRow3,
  poolRow4,
};

export default api;
