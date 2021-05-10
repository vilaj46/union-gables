import * as React from "react";

// Components
import Header from "../../styledComponents/Header/Header";
import Footer from "../../styledComponents/Footer/Footer";

// Shared Components
import PageTitle from "../../styledComponents/Shared/PageTitle";
import PageSubTitle from "../../styledComponents/Shared/PageSubTitle";
import PageImages from "../../styledComponents/Shared/PageImages";
import PageParagraph from "../../styledComponents/Shared/PageParagraph";
import FontContainer from "../../styledComponents/Shared/FontContainer";
import PageBodyContainer from "../../styledComponents/Shared/PageBodyContainer";
import HorizontalRule from "../../styledComponents/Shared/HorizontalRule";

import BottomPadding from "../../styledComponents/Shared/BottomPadding";

// Images
import mainImage from "../../images/saratogaPerformingArts.jpg";
import mainImage1 from "../../images/saratogaPerformingArts1.jpg";
import mainImage2 from "../../images/saratogaPerformingArts2.jpg";
import mainImage3 from "../../images/saratogaPerformingArts3.jpg";

const title = "Hotel Near Saratoga Performing Arts Center";

const splitImages = [mainImage, mainImage1];
const splitImages2 = [mainImage2, mainImage3];

const SaratogaPerformingArts = () => {
  return (
    <FontContainer>
      <Header />
      <title>Saratoga PerformingArts Page!</title>
      <PageTitle>{title}</PageTitle>
      <PageBodyContainer>
        <PageParagraph>
          Stay at our hotel near Saratoga Performing Arts Center to attend
          outdoor concerts all summer long! This contemporary amphitheatre hosts
          traditional performances including classical music, pop and rock,
          opera, and jazz, as well as a variety of acts and events like comedy
          shows, operas, food festivals, and the New York City Ballet. The
          Official Summer Home of the NYC Ballet and the Philadelphia Orchestra,
          SPAC is a non-profit corporation that is dedicated to showcasing the
          arts.
        </PageParagraph>
        <PageImages images={splitImages} />
        <PageSubTitle>Plan your visit</PageSubTitle>
        <PageParagraph>
          It’s about a 7-minute drive from our hotel by Saratoga Performing Arts
          Center. Take Avenue of the Pines to S Broadway to the venue. The
          amphitheatre hosts numerous concerts from Memorial Day to Labor Day.
          See what’s coming up on their calendar of events. Parking in all lots
          is $10 per car for Live Nation Concerts. Parking during classical
          performances is free! The main parking lot is located off Route 50.
          Sit on the lawn if you’re bringing personal food and sealed bottles of
          water. Lawn chairs must not exceed the height of 43”.
        </PageParagraph>
        <PageImages images={splitImages2} />
        <PageSubTitle>Around Spac</PageSubTitle>
        <PageParagraph>
          The majority of shows are held in the 5,200-seat amphitheater with a
          sloping lawn. Additional shows take place next door at Spa Little
          Theater, The Hall of Springs, or the Charles R. Wood Stage. Take
          children for a swim in the Peerless Pool Complex! There is a separate
          slide pool, a children’s wading pool with fountain, and a zero-depth
          entry main pool with adjacent lockers and restrooms. Hit the links at
          Saratoga Spa State Park Golf Course! There is one championship 18-hole
          course and a challenging 9-hole course. Reserve your tee time online.
          Enjoy numerous picnic areas around SPAC and wander along trails beside
          streams.
        </PageParagraph>
        <HorizontalRule />
        <PageParagraph center={true}>
          Book your one-of-a-kind room today at our historic hotel near Saratoga
          Performing Arts Center!{" "}
        </PageParagraph>
      </PageBodyContainer>
      <BottomPadding />
      <Footer />
    </FontContainer>
  );
};

export default SaratogaPerformingArts;
