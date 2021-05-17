import * as React from "react";

import MainPageTitle from "../styledComponents/Shared/MainPageTitle";
import PageSubTitle from "../styledComponents/Shared/PageSubTitle";
import FontContainer from "../styledComponents/Shared/FontContainer";
import BottomPadding from "../styledComponents/Shared/BottomPadding";
import PageBodyContainer from "../styledComponents/Shared/PageBodyContainer";
import PageParagraph from "../styledComponents/Shared/PageParagraph";
import PageSubParagraph from "../styledComponents/Shared/PageSubParagraph";
import PageParagraphLink from "../styledComponents/Shared/PageParagraphLink";
import NewPageImages from "../styledComponents/Shared/NewPageImages";
import RedCircle from "../styledComponents/Shared/RedCircle";

// Paragraphs
const Section1 = (
  <PageParagraph extraBottomPadding={true}>
    Step back in time to discover this hidden jewel of the past, a Queen Anne
    Victorian Mansion refurbished as a Saratoga Springs hotel. Situated less
    than a ten-minute walk from{" "}
    <PageParagraphLink href="/discover/things-to-do">
      downtown Saratoga Springs
    </PageParagraphLink>{" "}
    and one and half blocks from the{" "}
    <PageParagraphLink href="/discover/race-course">
      Saratoga Race Course
    </PageParagraphLink>
    , Union Gables Inn offers a premier location and unparalleled old-world
    hospitality for travelers seeking a unique experience for their visit to
    upstate New York.
  </PageParagraph>
);

const Section2 = (
  <React.Fragment>
    <PageSubTitle>Our History</PageSubTitle>
    <PageParagraph>
      <PageSubParagraph>
        In 1901 wealth merchant, George Crippen, built the Mansion to celebrate
        his success. Designed by Architect R. Newton Bresee, it rightfully
        earned its nickname ‘Sunnyside House’, with its many unique features,
        designed to allow sunshine to cascade through different angles in the
        house and vary through the seasons.
      </PageSubParagraph>
      <PageSubParagraph>
        Today, Union Gables Inn boasts 24{" "}
        <PageParagraphLink href="/rooms">
          one-of-a-kind lodgings
        </PageParagraphLink>
        , some with private patios, soaking tubs, or modern kitchens and living
        rooms. The lush Perennial gardens stretch over an acre, with a
        Romanesque outdoor pool, stone fountains, and patio seating. Discover a
        quiet haven in the center of Historic Saratoga, where guests can linger
        on the wraparound porch or relax in the classically-decorated living
        room after a fresh a la carte breakfast each morning.{" "}
      </PageSubParagraph>
    </PageParagraph>
  </React.Fragment>
);

const Section3 = (
  <React.Fragment>
    <PageSubTitle>Private Events</PageSubTitle>
    <PageParagraph extraBottomPadding={true}>
      <PageSubParagraph>
        Host your next business meeting or family reunion at Union Gables Inn!
        Meet in our oversized living room with space for business meetings of 25
        people. This room offers complete privacy with pocket doors to seal off
        from the rest of the mansion so you can focus on the task at hand.
      </PageSubParagraph>
      <PageSubParagraph last={true}>
        Plan your very own garden party on our grounds! There is space for a
        40x40 outdoor tent and 100 people on the lawn. We're happy to assist
        with off-site caterers to ensure your event runs smoothly.{" "}
      </PageSubParagraph>
    </PageParagraph>
  </React.Fragment>
);

const Section4 = (
  <React.Fragment>
    <PageSubTitle>Award-Winning Accommodations</PageSubTitle>
    <PageParagraph center={true}>
      Voted <strong>Best of the Saratoga Region</strong> for six years in a row
      as published in the Saratoga Today newspaper.
    </PageParagraph>
    <RedCircle />
    <PageParagraph center={true}>
      Awarded <strong>TripAdvisor Award of Excellence</strong>
    </PageParagraph>
    <RedCircle />
    <PageParagraph center={true}>
      <strong>Green Leader Hotel</strong>
    </PageParagraph>
    <RedCircle />
    <PageParagraph center={true}>
      Awarded bnbfinder.com <strong>Glorious Gardens Award</strong>
    </PageParagraph>
    <RedCircle />
    <PageParagraph center={true} extraBottomPadding={true}>
      <em>Soroptimist</em> <strong>Best Garden Award</strong>
    </PageParagraph>
  </React.Fragment>
);

const Section5 = (
  <React.Fragment>
    <PageSubTitle>Eco Conscious Practices</PageSubTitle>
    <PageParagraph>
      As a historic mansion of 118 years old, Union Gables Inn strives to
      practice as much as possible as a Green Hotel. Our eco-conscious practices
      include energy usage of 100% wind power for all electric, compost of food
      waste, usage of recycled materials for paper and amenity bottles, and
      usage of our own spring fed well on the property to water the gardens.
      Please feel free to call us with questions at (518) 584-1558 or see our{" "}
      <PageParagraphLink href="/about-us/reservation-policies">
        Reservation Policies.
      </PageParagraphLink>{" "}
    </PageParagraph>
  </React.Fragment>
);

// Text
const title = "About Us";

const api = {
  // Text
  title,

  // Paragraphs
  Section1,
  Section2,
  Section3,
  Section4,
  Section5,
};

export default api;
