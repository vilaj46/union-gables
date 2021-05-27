import * as React from "react";

import PageSubTitle from "../styledComponents/Shared/PageSubTitle";
import PageParagraph from "../styledComponents/Shared/PageParagraph";
import PageParagraphLink from "../styledComponents/Shared/PageParagraphLink";
import PageSubParagraph from "../styledComponents/Shared/PageSubParagraph";

// Text
const title = "Things to Do in Saratoga Springs, NY";

// Sections

const Section1 = (
  <PageParagraph>
    Discover a multitude of things to do in Saratoga Springs, New York, the Spa
    City and epicentre of horse racing! Union Gables Inn is located two blocks
    from the oldest racetrack in the country and within a short walk of downtown
    boutiques and five star restaurants. We invite you to experience Saratoga
    Springs, whether it’s enjoying tranquil spa waters, attending high-intensity
    racing, or catching one of many annual events.
  </PageParagraph>
);

const Section2 = (
  <PageParagraph extraBottomPadding={true}>
    Traveling into town? Union Gables Inn is a 30-minute drive to Albany
    International Airport and Lake George, as well as three hours from Montreal,
    Manhattan, and Boston. Our hotel is also situated two miles from the Amtrak
    Station which travels to Penn Station.{" "}
  </PageParagraph>
);

const Section3 = (
  <React.Fragment>
    <PageSubTitle>Saratoga Racecourse</PageSubTitle>
    <PageParagraph extraBottomPadding={true}>
      <PageSubParagraph>
        The thoroughbred horse racing track is home to some of the most
        important races in North America, including the Travers Stakes, the
        Alabama Stakes, and the Whitney Handicap. Plan a day trip to the{" "}
        <PageParagraphLink href="/discover/race-course">
          race track
        </PageParagraphLink>{" "}
        to see the horses and jockeys up close and enjoy special events all
        season long.
      </PageSubParagraph>
      <PageSubParagraph last={true}>
        Race season is July through Labor Day.
      </PageSubParagraph>
    </PageParagraph>
  </React.Fragment>
);

const Section4 = (
  <React.Fragment>
    <PageSubTitle>Local Colleges</PageSubTitle>
    <PageParagraph extraBottomPadding={true}>
      <PageSubParagraph>
        Visit campus for Parents Weekends and Commencement.
      </PageSubParagraph>
      <PageSubParagraph>
        <PageParagraphLink target={true} href="https://www.esc.edu/">
          Empire College
        </PageParagraphLink>
        : Part of the State University of New York system and offering flexible
        distance education programs.
      </PageSubParagraph>
      <PageSubParagraph last={true}>
        <PageParagraphLink href="/discover/skidmore-college">
          Skidmore College
        </PageParagraphLink>
        : One of the Hidden Ivies and a well-renowned Liberal Arts College.{" "}
      </PageSubParagraph>
    </PageParagraph>
  </React.Fragment>
);

const Section5 = (
  <React.Fragment>
    <PageSubTitle>Horse Auctions</PageSubTitle>
    <PageParagraph extraBottomPadding={true}>
      <PageSubParagraph>
        Fasig-Tipton holds three thoroughbred horse auctions in Saratoga Springs
        each year. The crown glory of North America, the{" "}
        <PageParagraphLink href="https://www.fasigtipton.com/" target={true}>
          Fasig-Tipton Company
        </PageParagraphLink>{" "}
        is the oldest auction company of its kind and hosts the Saratoga
        Yearling Sale, the New York Bed Sale, and the Saratoga Fall Sale in the
        Humphrey S. Finney Sales Pavilion each year.
      </PageSubParagraph>
      <PageSubParagraph last={true}>
        Held the Sunday and Monday following The Saratoga Sale, the New York
        Bred Yearlings sale is the industry’s leading source of quality New
        York-bred yearlings.
      </PageSubParagraph>
    </PageParagraph>
  </React.Fragment>
);

const Section6 = (
  <React.Fragment>
    <PageSubTitle>Saratoga Performing Arts Center</PageSubTitle>
    <PageParagraph extraBottomPadding={true}>
      <PageSubParagraph>
        Attend concerts and awe-inspiring performances of all genres at the
        outdoor amphitheatre. SPAC has a show for everyone, from a classical
        music showcase by the Philadelphia Orchestra to ROC Nation events with
        major artists.
      </PageSubParagraph>
      <PageSubParagraph last={true}>
        Find out more about summer concerts at{" "}
        <PageParagraphLink href="/discover/performing-arts">
          Saratoga Performing Arts Center
        </PageParagraphLink>
        .{" "}
      </PageSubParagraph>
    </PageParagraph>
  </React.Fragment>
);

const Section7 = (
  <React.Fragment>
    <PageSubTitle>Saratoga Spa State Park</PageSubTitle>

    <PageParagraph>
      <PageSubParagraph>
        Listed as a National Historic Landmark, the{" "}
        <PageParagraphLink href="/discover/spa-state-park">
          Saratoga Spa State Park
        </PageParagraphLink>{" "}
        offers classical architecture, recreational hiking areas with natural
        geysers, and refreshing pools. Indulge in a cleansing soak in the
        Roosevelt mineral baths, renowned for their healing benefits.
      </PageSubParagraph>
      <PageSubParagraph>
        Twice as large as Central Park, Saratoga Spa State Park is also a scenic
        cross country skiing and snowshoeing destination in Saratoga because of
        its timeless beauty and open terrain. In the summer, enjoy 18 miles of
        trails for biking and hiking!
      </PageSubParagraph>
    </PageParagraph>
  </React.Fragment>
);

const Section8 = (
  <React.Fragment>
    <PageSubTitle>Downtown</PageSubTitle>
    <PageParagraph extraBottomPadding={true}>
      <PageSubParagraph>
        Walk less than ten minutes into downtown Saratoga Springs. The downtown
        is very safe and clean at all hours of the day, perfect for an evening
        stroll after a concert.
      </PageSubParagraph>

      <PageSubParagraph last={true}>
        Dine at{" "}
        <PageParagraphLink href="/discover/restaurants">
          delicious restaurants
        </PageParagraphLink>{" "}
        with a variety of cuisines and shop for a special treasure to bring home
        after your stay in the Spa City!
      </PageSubParagraph>
    </PageParagraph>
  </React.Fragment>
);

const Section9 = (
  <React.Fragment>
    <PageSubTitle>Saratoga Polo</PageSubTitle>
    <PageParagraph extraBottomPadding={true}>
      <PageSubParagraph>
        Since 1898, the city has hosted a polo club, the old Persian game
        consisting of horses, mallets, and daring riders. The season usually
        lasts from July to Labor Day. One of the best things to do in Saratoga
        Springs, we recommend guests attend a game. Keep in mind the dress code,
        which is cocktail dresses and traditional billowy hats for women and
        business casual wear with a sporty edge for men.
      </PageSubParagraph>
      <PageSubParagraph last={true}>
        Polo matches are held every Friday and Sunday at 5:30 PM.{" "}
      </PageSubParagraph>
    </PageParagraph>
  </React.Fragment>
);

const Section10 = (
  <React.Fragment>
    <PageSubTitle>Saratoga Horse Racing Museum</PageSubTitle>
    <PageParagraph>
      <PageSubParagraph>
        Explore Saratoga’s rich history of American Thoroughbred race horses,
        jockeys, and trainers! Visit interactive exhibits to learn about the
        history of horse racing, see rare memorabilia, admire fine equine art,
        and take a tour of Saratoga’s Oklahoma training track.
      </PageSubParagraph>
      <PageSubParagraph last={true}>
        The{" "}
        <PageParagraphLink target={true} href="https://www.racingmuseum.org/">
          Saratoga Horse Racing Museum
        </PageParagraphLink>{" "}
        is closed for renovations from January 1 to July 17 2020.
      </PageSubParagraph>
    </PageParagraph>
  </React.Fragment>
);

const Section11 = (
  <PageParagraph center={true}>
    Ask our front desk about their favorite things to do in Saratoga Springs,
    New York during your stay!{" "}
  </PageParagraph>
);

const api = {
  // Text
  title,

  // Sections
  Section1,
  Section2,
  Section3,
  Section4,
  Section5,
  Section6,
  Section7,
  Section8,
  Section9,
  Section10,
  Section11,
};

export default api;
