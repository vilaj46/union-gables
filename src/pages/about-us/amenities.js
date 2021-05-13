import * as React from "react";
import styled from "styled-components";

// Components
import Header from '../../styledComponents/Header/Header';
import Footer from "../../styledComponents/Footer/Footer";

// Shared Components
import MainPageTitle from "../../styledComponents/Shared/MainPageTitle";
import FontContainer from "../../styledComponents/Shared/FontContainer";
import PageBodyContainer from "../../styledComponents/Shared/PageBodyContainer";
import BottomPadding from "../../styledComponents/Shared/BottomPadding";

import api from "../../api/amenitiesAPI";
import PageParagraph from "../../styledComponents/Shared/PageParagraph";
import PageSubParagraph from "../../styledComponents/Shared/PageSubParagraph";
import PageImages from "../../styledComponents/Shared/PageImages";
import PageImage from "../../styledComponents/Shared/PageImage";
import PageSubTitle from "../../styledComponents/Shared/PageSubTitle";
import PageParagraphLink from "../../styledComponents/Shared/PageParagraphLink";
import HorizontalRule from "../../styledComponents/Shared/HorizontalRule";

const Amenities = () => {
  return (
    <FontContainer>
      <Header />
      <PageBodyContainer>
      <MainPageTitle>{api.title}</MainPageTitle>
        {api.Paragraph1}
      {/* <PageParagraph>
        <PageSubParagraph>
        Discover Union Gables Inn at Saratoga Springs; complete with all the amenities necessary for your unforgettable getaway. Enjoy exploring our historic property, full of beautiful, antique furnishings and elegant décor.
        </PageSubParagraph>
        <PageSubParagraph>
          Let us make your stay a memorable one with our extensive list of amenities that include a sophisticated complimentary breakfast, natural gas fireplaces, jetted tubs, and so much more. Don't miss your chance to take a dip in our guest favorite heated outdoor pool and book your stay at our Saratoga hotel with a pool today!        </PageSubParagraph>
        </PageParagraph> */}

        <PageImages images={[api.pool, api.benedict]}/>

        <PageImages images={[api.billiards, api.fireplace]} />

        <PageSubTitle>{api.subTitle1}</PageSubTitle> 
        {api.Paragraph2}
        {/* <PageParagraph extraBottomPadding={true}>
          <strong><em>Hot breakfast temporarily unavailable.</em></strong>
          We are offering breakfast baskets filled with a pastry, yogurt, fruit, granola bar, nuts, Orange juice or apple juice delivered to the outside of the room in the morning for contact-less delivery.
        </PageParagraph> */}
        {api.Paragraph3}
        {/* <PageParagraph>
        Wake up to a <PageParagraphLink href="./breakfast">breakfast</PageParagraphLink> you’ll never forget with an ever-changing menu prepared by our Cordon Bleu trainined Chef. Enjoy breakfast at different seating areas around the property. In the summer, sit on the patio with a complimentary newspaper or linger on the wraparound porch.
        </PageParagraph> */}

        <PageSubTitle>{api.subTitle2}</PageSubTitle>  
        <PageParagraph>Visit the concierge desk for help with any of your needs during your stay here at Union Gables Inn. Our concierge desk is open daily. Ask us about our local recommendations as well as checking-in early (subject to availability)– free of charge.</PageParagraph>     

        <PageImage src={api.loungechairs} alt="Lounge Chairs" />
        <PageImages images={[api.statue, api.pool]}/>

        <PageSubTitle>{api.subTitle3}</PageSubTitle>
        
        {api.Paragraph4}
        {/* <PageParagraph extraBottomPadding={true}>
          <PageSubParagraph>
          <strong><em>Only guests of the Inn allowed in the pool area. Log in and out system implemented.</em></strong>
          </PageSubParagraph>
          <PageSubParagraph>
          Relax in our heated outdoor pool or by the water on a pool lounger or plush patio chairs with seating for 25.
          </PageSubParagraph>
          <PageSubParagraph>The pool is open from 8 AM to sundown and available seasonally from Memorial Day to Labor Day. Book your stay at our Saratoga hotel with a pool to take advantage of this guest-favorite amenity!</PageSubParagraph>
        </PageParagraph> */}
        
        <PageSubTitle>
          {api.subTitle4}
        </PageSubTitle>

        {api.Paragraph5}

        {/* <PageParagraph extraBottomPadding={true}>
        Winner of six Gardening Awards, our beautifully-landscaped grounds stretch across two adjoining properties with over one and a half acres of space. A quiet oasis tucked amidst palm trees and flowering Japanese gardens, our grounds offer two gazebos, Romanesque statue fountains, and cuddle cove seats.
        </PageParagraph> */}

        <PageSubTitle>
          {api.subTitle5}
        </PageSubTitle>

        {api.Paragraph6}
        {/* <PageParagraph extraBottomPadding={true}>
          <PageSubParagraph>
          Union Gables Inn is happy to host your next business meeting, secluded retreat, or intimate event! Plan a business meeting for 25 in our oversized living room, separated from other guests with pocket doors.
          </PageSubParagraph>
          <PageSubParagraph>Host an outdoor garden party on our lawn with space for 100 people and a 40x40 tent. We're happy to assist with off-site catering and event coordination.</PageSubParagraph>
        </PageParagraph> */}

        <PageImages images={[api.garden, api.garden2]}/>

        <PageImages images={[api.porch, api.loungechairs2]} extraBottomPadding={true}/>

        <PageSubTitle>{api.subTitle6}</PageSubTitle>
        
        {api.Paragraph7}
        {/* <PageParagraph extraBottomPadding={true}>
        Stay connected at all times with our complimentary high-speed wireless Internet.
        </PageParagraph> */}

        <PageSubTitle>{api.subTitle7}</PageSubTitle>

        {/* <PageParagraph extraBottomPadding={true}>No need to worry about hidden costs like parking when you stay with us at Union Gables Inn.</PageParagraph> */}
        {api.Paragraph8}

        <PageSubTitle>{api.subTitle8}</PageSubTitle>

        {api.Paragraph9}
        {/* <PageParagraph>Choose Union Gables Inn for our smoke-free and pet-friendly accommodations. Read our full <PageParagraphLink href="./pet-friendly">pet policy here</PageParagraphLink>.  </PageParagraph> */}
        <HorizontalRule />
        {api.Paragraph10}
      </PageBodyContainer>
      <BottomPadding />
      <Footer />
      </FontContainer>
  );
};

export default Amenities;
