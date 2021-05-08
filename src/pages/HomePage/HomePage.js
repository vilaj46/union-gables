import * as React from "react";
import styled from "styled-components";

// Shared Components
import PageTitle from "../../styledComponents/Shared/PageTitle";
import PageImage from "../../styledComponents/Shared/PageImage";
import PageQuote from "../../styledComponents/Shared/PageQuote";
import PageSubTitle from "../../styledComponents/Shared/PageSubTitle";
import PageParagraph from "../../styledComponents/Shared/PageParagraph";
import HorizontalRule from "../../styledComponents/Shared/HorizontalRule";
import PageBodyContainer from "../../styledComponents/Shared/PageBodyContainer";

// HomePage Components
import ThreeReasons from "../../styledComponents/HomePage/ThreeReasons";
import DiscoverLinks from "../../styledComponents/HomePage/DiscoverLinks";

import mainImage2 from "../../images/main_image2.jpg";
import mainImage3 from "../../images/main_image3.jpg";

const title = "Award-Winning Bed & Breakfast in Saratoga Springs, New York";

const HomePage = () => {
  return (
    <div>
      <title>Home Page!</title>
      <PageTitle>{title}</PageTitle>
      <PageBodyContainer>
        <PageParagraph>
          Experience old world hospitality at its finest at Union Gables Inn,
          our luxurious bed and breakfast in Saratoga Springs, New York. Built
          circa 1901, this Queen Anne Victorian Mansion is located in the heart
          of Saratoga’s Historic District known as the Magic Rectangle, one and
          a half blocks from the oldest racetrack in the country. Discover the
          romantic charm of our hotel, ideally nestled less than a ten-minute
          walk from countless restaurants, and downtown Saratoga gems.
        </PageParagraph>
        <PageImage src={mainImage2} alt="Pool and Garden" />
        <PageSubTitle>Envision Your Stay</PageSubTitle>
        <PageParagraph>
          Step inside our historic mansion of 118 years, featuring a classic
          wraparound porch, airy living areas with period antiques, and over one
          acre of Perennial gardens, fountains, and a seasonal Romanesque-style
          pool. Included in your stay is a freshly-prepared breakfast from our
          Cordon Bleu trained chef, homemade baked goods served in the
          afternoon, and exemplary concierge service. Stay in one of our
          oversized rooms and suites, all with private bathrooms and each
          uniquely decorated. Each room at our B&B in Saratoga Springs, NY
          features a romantic natural gas fireplace, complimentary wireless
          Intenet, and a variety of period antiques. Designated pet friendly,
          extended stay, and rooms with private patios are available.
        </PageParagraph>
        <PageImage src={mainImage3} alt="Race Track" />
        <PageSubTitle>Discover Saratoga Springs</PageSubTitle>
        <PageParagraph>
          Take in all that Saratoga Springs has to offer without the hassle of
          parking downtown. Rich in history with its array of natural springs,
          classic architecture, beautiful parks, and boutique shopping, in
          addition to the excitement of thoroughbred horse races, we invite you
          to visit:
        </PageParagraph>
        <DiscoverLinks />
        {/* <hr /> */}
        <HorizontalRule />
        <PageQuote>
          Reserve your stay today at our historic and romantic bed and breakfast
          in Saratoga Springs, New York!
        </PageQuote>
        <PageSubTitle>Good to know</PageSubTitle>
        <PageParagraph center={true}>
          Built in 1901 and nicknamed the ‘Sunnyside House’
        </PageParagraph>
        <PageParagraph center={true}>
          Best of Saratoga Region for Six Years in a Row
        </PageParagraph>
        <PageParagraph center={true}>
          Tripadvisor Award of Excellence and Green Leader Hotel Awards
        </PageParagraph>
        <PageParagraph center={true}>
          Glorious Gardens Award and Soroptimist Best Garden Award
        </PageParagraph>
      </PageBodyContainer>
      <ThreeReasons />
    </div>
  );
};

export default HomePage;
