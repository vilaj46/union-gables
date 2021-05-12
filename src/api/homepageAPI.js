import * as React from "react";

// Shared Components
import PageParagraph from "../styledComponents/Shared/PageParagraph";
import PageSubParagraph from "../styledComponents/Shared/PageSubParagraph";
import PageParagraphLink from "../styledComponents/Shared/PageParagraphLink";

// Images
import food from "../images/homePage/food.jpg";
import room from "../images/homePage/room.jpg";
import statue from "../images/homePage/statue.jpg";
import jockey from "../images/homePage/jockey.jpg";
import racetrack from "../images/homePage/racetrack.jpg";

// Paragraphs
const Paragraph1 = (
  <PageParagraph>
    Experience old world hospitality at its finest at Union Gables Inn, our
    luxurious bed and breakfast in Saratoga Springs, New York. Built circa 1901,
    this Queen Anne Victorian Mansion is located in the heart of Saratoga’s
    Historic District known as the Magic Rectangle, one and a half blocks from
    the oldest racetrack in the country. Discover the romantic charm of our
    hotel, ideally nestled less than a ten-minute walk from{" "}
    <PageParagraphLink href="./discover/saratoga-restaurants">
      countless restaurants
    </PageParagraphLink>
    , and{" "}
    <PageParagraphLink href="./discover/saratoga-things-to-do">
      downtown Saratoga gems
    </PageParagraphLink>
    .
  </PageParagraph>
);

const Paragraph2 = (
  <PageParagraph>
    <PageSubParagraph>
      Step inside our historic mansion of 118 years, featuring a classic
      wraparound porch, airy living areas with period antiques, and over one
      acre of Perennial gardens, fountains, and a seasonal Romanesque-style
      pool. Included in your stay is a freshly-prepared breakfast from our
      Cordon Bleu trained chef, homemade baked goods served in the afternoon,
      and exemplary concierge service.
    </PageSubParagraph>
    <PageSubParagraph last={true}>
      Stay in one of our{" "}
      <PageParagraphLink href="./rooms/saratoga-lodging">
        oversized rooms and suites
      </PageParagraphLink>
      , all with private bathrooms and each uniquely decorated. Each room at our
      B&B in Saratoga Springs, NY features a romantic natural gas fireplace,
      complimentary wireless Intenet, and a variety of period antiques.
      Designated{" "}
      <PageParagraphLink href="./about-us/pet-friendly">
        pet friendly
      </PageParagraphLink>
      , extended stay, and rooms with private patios are available.
    </PageSubParagraph>
  </PageParagraph>
);

const Paragraph3 = (
  <PageParagraph>
    Take in all that Saratoga Springs has to offer without the hassle of parking
    downtown. Rich in history with its array of natural springs, classic
    architecture, beautiful parks, and boutique shopping, in addition to the
    excitement of thoroughbred horse races, we invite you to visit:
  </PageParagraph>
);

const Paragraph4 = (
  <PageParagraph center={true} removeTopMargin={true}>
    Built in 1901 and nicknamed the ‘Sunnyside House’
  </PageParagraph>
);

const Paragraph5 = (
  <PageParagraph center={true}>
    Best of Saratoga Region for Six Years in a Row
  </PageParagraph>
);

const Paragraph6 = (
  <PageParagraph center={true}>
    Tripadvisor Award of Excellence and Green Leader Hotel Awards
  </PageParagraph>
);

const Paragraph7 = (
  <PageParagraph center={true}>
    Glorious Gardens Award and Soroptimist Best Garden Award
  </PageParagraph>
);

const title = "Award-Winning Bed & Breakfast in Saratoga Springs, New York";
const subTitle1 = "Envision Your Stay";
const subTitle2 = "Discover Saratoga Springs";
const subTitle3 = "Good to know";
const quote =
  "Reserve your stay today at our historic and romantic bed and breakfast in Saratoga Springs, New York!";

// Discover Saratoga Springs
const congressPark = {
  text: "Congress Park",
  href: "https://www.saratoga.com/hotspots/congress-park/",
};

const saratogaRaceCourse = {
  text: "Saratoga Race Course",
  // href: "../pages/discover/saratoga-race-course",
  href: "/discover/saratoga-race-course",
};

const saratogaPerformingArtsCenter = {
  text: "Saratoga Performing Arts Center",
  href: "/discover/saratoga-performing-arts",
};

const saratogaSpringsCityCenter = {
  text: "Saratoga Springs City Center",
  href: "/discover/saratoga-springs-center",
};

const saratogaSpaStatePark = {
  text: "Saratoga Spa State Park",
  href: "/discover/saratoga-spa-state-park",
};

const annualFestivalsAndEvents = {
  text: "Annual festivals and events",
  href: "/discover/saratoga-festivals-and-events",
};

// Three Reasons

const threeReasons = [
  {
    img: food,
    text:
      "Easily walk to over 125 restaurants, music venues, bars, museums, galleries, and downtown shopping.",
  },
  {
    img: room,
    text:
      "Discover romantic and historic rooms with antique furnishings natural gas fireplaces, and luxury linens.",
  },
  {
    img: racetrack,
    text:
      "Stay one and a half blocks from the oldest racetrack in the country.",
  },
];

const threeReasonsTitle = "3 Reasons to Stay with us";

const api = {
  // Text
  title,
  subTitle1,
  subTitle2,
  subTitle3,
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
  food,
  room,
  statue,
  jockey,
  racetrack,

  // Discover Saratoga Springs
  congressPark,
  saratogaRaceCourse,
  saratogaPerformingArtsCenter,
  saratogaSpringsCityCenter,
  saratogaSpaStatePark,
  annualFestivalsAndEvents,

  // Three Reasons
  threeReasons,
};

export default api;
