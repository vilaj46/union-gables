import * as React from "react";
import styled from "styled-components";

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
import PageParagraphLink from "../../styledComponents/Shared/PageParagraphLink";
import FontContainer from "../../styledComponents/Shared/FontContainer";
import PageBodyContainer from "../../styledComponents/Shared/PageBodyContainer";
import HorizontalRule from "../../styledComponents/Shared/HorizontalRule";

import BottomPadding from "../../styledComponents/Shared/BottomPadding";

// Images
import mainImage from "../../images/saratogaSpa.jpg";
import mainImage1 from "../../images/saratogaSpa1.jpg";
import mainImage2 from "../../images/saratogaSpa2.jpg";

const title = "Hotel near Saratoga Spa State Park";

const splitImages = [mainImage, mainImage1];

const SpecialPageTitle = styled.h2`
  color: #680727;
  font-size: 1.8rem;
  text-transform: uppercase;
  text-align: center;
  letter-spacing: 1px;
  font-weight: 600;
  margin-bottom: -30px;
`;

const SaratogaSpaStatePark = () => {
  return (
    <FontContainer>
      <Header />
      <title>Saratoga Spa State Park Page!</title>
      <PageTitle>{title}</PageTitle>
      <PageBodyContainer>
        <PageParagraph>
          Your visit to Saratoga Springs isn’t complete without a trip to the
          State Park; a National Historic Landmark. Explore almost 3000 acres of
          historic sights, entertainment, fun activities and natural, mineral
          springs. With so many things to do, you’re sure to have a memorable
          trip that’s fun for the whole family. Be close to all the action when
          you stay at our hotel near Saratoga Springs Spa State Park.
        </PageParagraph>
        <PageImages images={splitImages} />
        {/* <PageImage src={mainImage1} alt="Bridge and River" /> */}
        <PageSubTitle>At the Park</PageSubTitle>
        <AtTheParkItems />
        <HistoryItems />
        <PageImage src={mainImage2} alt="Water and River" />
        <PageSubTitle>Entertainment</PageSubTitle>
        <PageParagraph>
          Immerse yourself in the Arts with a visit to the Saratoga Performing
          Arts Center or Home Made Theatre. Experience the moving powers of
          theatre, dance, and orchestra productions. Or let loose and rock out
          at a concert! Visit the{" "}
          <PageParagraphLink href="./saratoga-performing-arts">
            SPAC
          </PageParagraphLink>{" "}
          and{" "}
          <PageParagraphLink href="https://homemadetheater.org" target={true}>
            HMT
          </PageParagraphLink>{" "}
          websites to purchase tickets and for additional visitor information.
        </PageParagraph>
        <PageSubTitle>Natural Springs</PageSubTitle>
        <PageParagraph>
          Experience the legendary mineral spring water of Saratoga. Visit 21
          naturally carbonated springs with their own distinct, mineral makeup.
          Discover the rich history of these waters and learn about the myths
          surrounding their magical, healing properties. Bring your own water
          bottle to taste the waters for yourself! Learn about booking mineral
          hydrotherapy through the{" "}
          <PageParagraphLink
            href="https://www.gideonputnam.com/roosevelt-baths-and-spa/mineral-baths"
            target={true}
          >
            Roosevelt Spa
          </PageParagraphLink>
          .
        </PageParagraph>
        <SpecialPageTitle>Plan Your Visit</SpecialPageTitle>
        <HorizontalRule />
        <PageParagraph>
          Check out our list of common visitor information to help plan your
          day!
        </PageParagraph>
        <PageSubTitle>Directions</PageSubTitle>
        <PageParagraph>
          Stay at our hotel near Saratoga Spa State Park to be just a mile away
          from a day full of adventure! That’s less than a 5-minute drive, or
          25-minute walk away.
        </PageParagraph>
        <PageSubTitle>Hours</PageSubTitle>
        <PageParagraph>
          The State Park is open year-round, all days of the week. Hours vary
          between activities and amenities. See a full list of{" "}
          <PageParagraphLink
            href="https://parks.ny.gov/parks/saratogaspa"
            target={true}
          >
            operating hours
          </PageParagraphLink>
          . It is recommended that patrons contact the park directly before
          traveling to confirm operating hours.
        </PageParagraph>
        <PageSubTitle>Admissions</PageSubTitle>
        <PageParagraph>
          Entrance Fee – $10 per vehicle (price may vary by season, please call
          the park directly to confirm). Save on your trips to New York State
          Parks with your Empire Pass – eligible for use at the Saratoga Spa
          State Park.{" "}
          <PageParagraphLink
            href="https://parks.ny.gov/admission/empire-passport/default.aspx"
            target={true}
          >
            Click here
          </PageParagraphLink>{" "}
          for more details.
        </PageParagraph>
        <PageSubTitle>Victoria Pool Admission</PageSubTitle>
        <PoolChart />
        <PageSubTitle>Snowshoe Rentals</PageSubTitle>
        <SnowChart />
        <HorizontalRule />
        <PageQuote>
          Book your stay today at our hotel near Saratoga Spa State Park for
          four seasons of activities and adventure!
        </PageQuote>
      </PageBodyContainer>
      <BottomPadding />
      <Footer />
    </FontContainer>
  );
};

const activityItems = [
  "Looking for a more relaxed time? Take it easy with a picnic in the park, or go for a walk on one of many trails.",
  "Enjoy the sunshine in the summer with bikes, or lounge by one of three pools.",
  "Take a swing at golf at one of two golf courses, play tennis, or fish the winding Geyser Creek.",
  "In the winter, try snowshoeing, ice-skating, and cross-country skiing. The opportunities for fun are endless!",
];

const ListContainer = styled.div`
  @media screen and (max-width: 1020px) {
    margin: 0 auto;
    width: 95%;
  }
`;

const ListHeader = styled.h4`
  text-transform: uppercase;
  font-size: 1.4rem;
  color: #5e3743;
  letter-spacing: 1px;
`;

const ListSubHeader = styled.p`
  font-size: 1.4rem;
  color: #333;
`;

const Circle = styled.div`
  min-height: 10px;
  min-width: 10px;
  background-color: #333;
  border-radius: 50%;
  display: block;
  margin: auto 0;
  margin-right: 10px;
`;

const List = styled.ul`
  list-style-type: none;
  padding: 0;
  color: #333;
`;

const Item = styled.li`
  display: flex;
  justify-content: flex-start;
`;

const ItemText = styled.p`
  font-size: 1.1rem;
  color: #333;
`;

const AtTheParkItems = () => {
  return (
    <ListContainer>
      <ListHeader>Activities</ListHeader>
      <ListSubHeader>
        It’s easy to stay active with so many options for sports and activities
        at the park.
      </ListSubHeader>
      <List>
        {activityItems.map((item) => {
          return (
            <Item>
              <Circle />
              <ItemText>{item}</ItemText>
            </Item>
          );
        })}
      </List>
    </ListContainer>
  );
};

const historyItems = [
  "Marvel the beauty of Federal-style architecture at the Banquet Hall of Springs and Lincoln Baths as you stroll through the park.",
  "Take home your new knowledge and fun memories, in addition to your souvenirs!",
  "Please visit the Automobile Museum and Dance Museum websites for information regarding hours, exhibits, events, and admission. ",
];

const HistoryItems = () => {
  return (
    <ListContainer>
      <ListHeader>History</ListHeader>
      <ListSubHeader>
        School may be out for summer, but the learning doesn’t have to stop:
      </ListSubHeader>
      <List>
        {historyItems.map((item) => {
          return (
            <Item>
              <Circle />
              <ItemText>{item}</ItemText>
            </Item>
          );
        })}
      </List>
    </ListContainer>
  );
};

const Table = styled.div`
  display: flex;
  margin: auto;
  justify-content: center;
`;

const TableItem = styled.p`
  border-right: 1px solid black;
  border-top: 1px solid black;
  border-left: 1px solid black;
  margin: 0;
  padding: 10px 10px;
`;

const LastItem = styled.p`
  border-top: 1px solid black;
  border-bottom: 1px solid black;
  border-right: 1px solid black;
  border-left: 1px solid black;
  margin: 0;
  padding: 10px 10px;
`;

const TableItems = ({ items }) => {
  return (
    <div>
      {items.map((item, index) => {
        if (index == items.length - 1) {
          return <LastItem>{item}</LastItem>;
        } else {
          return <TableItem>{item}</TableItem>;
        }
      })}
    </div>
  );
};

const PoolChart = () => {
  return (
    <Table>
      <TableItems
        items={[
          "Adults",
          "Children Under 5",
          "Children 5-11",
          "Seniors & NY State Residents",
        ]}
      />
      <TableItems
        items={["$8", "Free!", "$4", "$4 (weekdays) $8 (weekends)"]}
      />
    </Table>
  );
};

const SnowChart = () => {
  return (
    <Table>
      <TableItems items={["All Day", "4 Hours or Less"]} />
      <TableItems items={["$10", "$5"]} />
    </Table>
  );
};

export default SaratogaSpaStatePark;
