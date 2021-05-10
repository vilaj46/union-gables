import * as React from "react";

// Components
import Header from "../../styledComponents/Header/Header";
import Footer from "../../styledComponents/Footer/Footer";

// Shared Components
import PageTitle from "../../styledComponents/Shared/PageTitle";
import PageSubTitle from "../../styledComponents/Shared/PageSubTitle";
import PageImage from "../../styledComponents/Shared/PageImage";
import PageImages from "../../styledComponents/Shared/PageImages";
import PageQuote from "../../styledComponents/Shared/PageQuote";
import PageParagraph from "../../styledComponents/Shared/PageParagraph";
import FontContainer from "../../styledComponents/Shared/FontContainer";
import PageBodyContainer from "../../styledComponents/Shared/PageBodyContainer";
import HorizontalRule from "../../styledComponents/Shared/HorizontalRule";

// Images
import mainImage from "../../images/saratogaRaceCourse.jpg";
import mainImage1 from "../../images/saratogaRaceCourse1.jpg";
import mainImage2 from "../../images/saratogaRaceCourse2.jpg";
import mainImage3 from "../../images/saratogaRaceCourse3.jpg";

const title = "Hotel Near Saratoga Race Track";

const splitImages = [mainImage1, mainImage2];

const SaratogaRaceCourse = () => {
  return (
    <FontContainer>
      <Header />
      <title>SaratogaRaceCourse Page!</title>
      <PageTitle>{title}</PageTitle>
      <PageBodyContainer>
        <PageParagraph>
          Get ready to sit at the edge of your seat when you visit the race
          track! Stay at our hotel near the Saratoga Springs Race Track to be
          close to the heart pounding excitement of horse racing; whether you’re
          traveling with the family, or even on business.
        </PageParagraph>
        <PageImage src={mainImage} alt="Race Course" />
        <PageImages images={splitImages} />
        <PageSubTitle>2020 Schedule</PageSubTitle>
        <PageParagraph>
          This year’s racing season starts in July, 2020. Please visit the
          official Saratoga Race Track website for the full calendar schedule.
        </PageParagraph>
        <PageSubTitle>Betting at the Track</PageSubTitle>
        <PageParagraph>
          Try your luck wagering on a race (or two!) Bet on site at the track,
          or online at Saratoga Bets. Make your wager from the comfort of your
          room when you stay with us at our hotel near the Saratoga race track.
        </PageParagraph>
        <PageSubTitle>Admissions</PageSubTitle>
        <PageParagraph>
          Check out the official website to find out how to purchase season
          passes, premium box seats and how to book for large groups.
        </PageParagraph>
        <PageImage src={mainImage3} alt="White Horse" />
        <PageSubTitle>Tours</PageSubTitle>
        <PageParagraph>
          Take a walking tour of this historic race course; as one of the oldest
          racetracks in the U.S., there is so much history to uncover. Learn
          about this race track’s story, its architecture, traditions, and more.
        </PageParagraph>
        <PageSubTitle>Walking Tours</PageSubTitle>
        <PageParagraph>
          45-minute walking tours of the race course are available between 9:30
          a.m. and 2:30 p.m. each racing day on an hourly basis. Rates are $3
          per person and $10 per family. Please contact Guest Services directly
          for more information at 518-584-6200 x 4433.
        </PageParagraph>
        <PageSubTitle>Stable Tours</PageSubTitle>
        <PageParagraph>
          Take a FREE tour of the historic stable area at the Saratoga Race
          Track. Trams depart from the Main Clubhouse entrance every 15 minutes
          starting at 7:30 a.m. until 9:30 a.m. The tour length is approximately
          45 minutes. No reservations are needed; these tours are first come,
          first serve.
        </PageParagraph>
        <HorizontalRule />
        <PageQuote>
          Book your stay at our hotel near the Saratoga Race Track today!{" "}
        </PageQuote>
      </PageBodyContainer>
      <Footer />
    </FontContainer>
  );
};

export default SaratogaRaceCourse;
