import * as React from "react";

// Shared Components
import PageSubTitle from "../styledComponents/Shared/PageSubTitle";
import PageParagraph from "../styledComponents/Shared/PageParagraph";

// Text
const title = "Gift Certificates";

// Sections
const Section1 = (
  <React.Fragment>
    <PageParagraph center={true}>
      Give the gift of a memory and an once-in-a-lifetime stay at Union Gables
      Inn. Our Gift Certificates are perfect for all occasions and holidays.
    </PageParagraph>
    <PageParagraph center={true}>
      Select the perfect certificate for you, with options including:
    </PageParagraph>
    <PageParagraph center={true}>
      $100 | $150 | $200 | $250 | $300
    </PageParagraph>
    <PageParagraph center={true}>
      Gift certificates are good for any room on any night, subject to
      availability.
    </PageParagraph>
  </React.Fragment>
);

const Section2 = (
  <React.Fragment>
    <PageSubTitle>Gift Certificate Policy</PageSubTitle>
    <PageParagraph center={true}>
      Gift certificates must be noted when making the reservation. No refunds
      will be made if the gift certificate is not entered at the time of placing
      the reservation.
    </PageParagraph>
    <PageParagraph center={true}>
      Gift certificates are not transferable.
    </PageParagraph>
    <PageParagraph center={true}>
      Any remaining amount on gift certificates can be used at a later day up to
      the expiration date. Gift certificates cannot be redeemed for cash.{" "}
    </PageParagraph>
  </React.Fragment>
);
const api = {
  // Text
  title,

  // Sections
  Section1,
  Section2,
};

export default api;
