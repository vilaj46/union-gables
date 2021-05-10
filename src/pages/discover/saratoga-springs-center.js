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
import PageParagraph from "../../styledComponents/Shared/PageParagraph";
import FontContainer from "../../styledComponents/Shared/FontContainer";
import PageBodyContainer from "../../styledComponents/Shared/PageBodyContainer";
import HorizontalRule from "../../styledComponents/Shared/HorizontalRule";

import BottomPadding from "../../styledComponents/Shared/BottomPadding";

// Images
import mainImage from "../../images/saratogaSpringsCenter.jpg";
import mainImage1 from "../../images/saratogaSpringsCenter1.jpg";
import mainImage2 from "../../images/saratogaSpringsCenter2.jpg";

const title = "Hotel near Saratoga Springs City Center";

const splitImages = [mainImage, mainImage1];

const SaratogaPerformingArts = () => {
  return (
    <FontContainer>
      <Header />
      <title>Saratoga Springs Center Page!</title>
      <PageTitle>{title}</PageTitle>
      <PageBodyContainer>
        <PageParagraph>
          Stay close to the heart of downtown at our historic hotel near
          Saratoga Springs City Center! Union Gables Inn is just a 15-minute
          walk or 3-minute drive from the convention center, the largest event
          venue in the city. Whether you’re attending a conference or special
          convention, our Queen Anne mansion hotel is the perfect place to stay
          for a luxurious and home-away-from-home experience.
        </PageParagraph>
        <PageImages images={splitImages} />
        <PageSubTitle>Visitor Information</PageSubTitle>
        <PageParagraph>
          Our hotel near Saratoga Springs City Center is a 15-minute walk down
          Putnam St. which continues onto Maple Ave. Stay connected with the
          convention center’s complimentary public Wi-Fi. The city center has a
          parking lot on Maple Avenue. There is also an adjacent municipal
          parking lot with complimentary 48-hour parking for overflow cars. See
          a parking map! Outside food and beverages are not allowed.
        </PageParagraph>
        <PageImage src={mainImage2} alt="Dancing!" />
        <PageSubTitle>About SSCC</PageSubTitle>
        <PageParagraph>
          Saratoga Springs City Center boasts 32,000 square feet of leasable
          space, with 20 individual and customizable meeting spaces. Some of the
          largest and most popular events are hosted at the city center,
          including:
        </PageParagraph>
        <Events />
        <HorizontalRule />
        <PageParagraph center={true}>
          Book your stay in one of our one-of-a-kind rooms at our luxurious
          hotel near Saratoga Springs City Center!
        </PageParagraph>
      </PageBodyContainer>
      <BottomPadding />
      <Footer />
    </FontContainer>
  );
};

const ListsContainer = styled.div`
  display: flex;
  justify-content: space-around;
  width: 75%;
  margin: 0 auto;
`;

const List = styled.ul`
  color: #333;
`;

const Item = styled.li`
  padding: 10px 0;
`;

const Events = () => {
  const one = [
    "The Flurry Festival",
    "Chess Tournaments",
    "Saratoga Beer Summit",
  ];
  const two = ["Summer Sports Expo", "Woodworkers Showcase", "Skidmore Events"];

  return (
    <ListsContainer>
      <List>
        {one.map((item) => {
          return <Item>{item}</Item>;
        })}
      </List>
      <List>
        {two.map((item) => {
          return <Item>{item}</Item>;
        })}
      </List>
    </ListsContainer>
  );
};

export default SaratogaPerformingArts;
