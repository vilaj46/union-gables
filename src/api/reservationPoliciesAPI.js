import * as React from "react";

import PageParagraph from "../styledComponents/Shared/PageParagraph";
import PageSubParagraph from "../styledComponents/Shared/PageSubParagraph";
import PageSubTitle from "../styledComponents/Shared/PageSubTitle";
import PageSemiSubTitle from "../styledComponents/Shared/PageSemiSubTitle";
import PageParagraphLink from "../styledComponents/Shared/PageParagraphLink";

// Paragraphs

const Section1 = (
  <PageParagraph extraBottomPadding={true}>
    <PageSubParagraph>
      The Union Gables Inn is an exclusive property where every guest
      reservation is both important and special to us.
    </PageSubParagraph>

    <PageSubParagraph>
      Guests who arrive after their intended arrival date or check out before
      their intended departure date are responsible for the days reserved in
      full.
    </PageSubParagraph>

    <PageSubParagraph>
      <strong>Check-in time</strong>: 3:00 PM - 7:00 PM.
    </PageSubParagraph>

    <PageSubParagraph>
      If arriving outside of check-in times, please call us to make
      arrangements. (518) 584-1558.
    </PageSubParagraph>

    <PageSubParagraph last={true}>
      <strong>Check-out time</strong>: 11:00 AM. If a later check out is needed,
      please contact us to make arrangements. Checking out later than 2pm will
      be billed as an additional night stay for the current value of the room.
    </PageSubParagraph>
  </PageParagraph>
);

const Section2 = (
  <React.Fragment>
    <PageSemiSubTitle>Gift Certificate Policy</PageSemiSubTitle>
    <PageParagraph>
      <PageSubParagraph>
        Gift certificates must be noted when making the reservation. No refunds
        will be made if the gift certificate is not entered at the time of
        placing the reservation.
      </PageSubParagraph>
      <PageSubParagraph>
        Gift certificates are not transferable. Any remaining amount on gift
        certificates can be used at a later day up to the expiration date. Gift
        certificates cannot be redeemed for cash.
      </PageSubParagraph>
      <PageSubParagraph last={true}>
        For different times of the year we have different policies, so please
        select from the list below:
      </PageSubParagraph>
    </PageParagraph>
  </React.Fragment>
);

const Section3 = (
  <React.Fragment>
    <PageParagraph>
      <strong>(1) Saratoga Racing Season</strong>
    </PageParagraph>
    <PageParagraph>
      <strong>(2) Special Event Weekend</strong>
    </PageParagraph>
    <PageParagraph>
      <strong>
        (3) Spring, Summer (April 1 – July 11) and Fall (September 4 – October
        31)
      </strong>
    </PageParagraph>
    <PageParagraph extraBottomPadding={true}>
      <strong>(4) Winter (November 1 – March 31)</strong>
    </PageParagraph>
  </React.Fragment>
);

const Section4 = (
  <React.Fragment>
    <PageSubTitle>
      (1) For Reservations During the Saratoga Racing Season
    </PageSubTitle>
    <PageParagraph extraBottomPadding={true}>
      <PageSubParagraph>
        2021 Racing Season dates run from July 15, 2021 until September 6, 2021.
        Payment for all reservations must be made by the end of the first week
        in January.
      </PageSubParagraph>
      <PageSubParagraph>
        <strong>Cancellation Policy for the Saratoga Racing Season</strong>
      </PageSubParagraph>
      <PageSubParagraph>
        All cancellations must be made in writing by email. An email receipt of
        your cancellation will be sent to you.
      </PageSubParagraph>
      <PageSubParagraph last={true}>
        A refund may be given ONLY if the room has been re-rented equal to the
        dates reserved. If re-rented, a refund check is mailed minus a $50
        cancellation fee.
      </PageSubParagraph>
    </PageParagraph>
  </React.Fragment>
);

const Section5 = (
  <React.Fragment>
    <PageSubTitle>
      (2) For Reservations During Special Event Weekends*
    </PageSubTitle>
    <PageParagraph extraBottomPadding={true}>
      <PageSubParagraph>
        At the time of booking, your credit card on file will be charged $50.00,
        which is applied towards your reservation. Final payment for the balance
        will be charged to the credit card on file fourteen (14) days prior to
        arrival.
      </PageSubParagraph>
      <PageSubParagraph>
        <strong>Cancellation Policy for Special Event Weekends</strong>
      </PageSubParagraph>
      <PageSubParagraph>
        You may cancel this reservation, in writing or e-mail. An email receipt
        of your cancellation will be sent to you. A refund is given ONLY if the
        room has been re-rented equal to the dates reserved. If re-rented, a
        refund check is mailed minus the $50 cancellation fee.
      </PageSubParagraph>
      <PageSubParagraph last={true}>
        *Special weekends include: Skidmore Graduation, Skidmore Parent
        Weekends, Memorial Day Weekend, 4th of July Weekend, New Year’s Eve,
        Dance Flurry Festival Weekend, Special Concert Weekends (Dave Matthews,
        Phish, etc.) and the entire Saratoga Racing Meet. Special Event weekends
        not listed here can be determined without prior notice.
      </PageSubParagraph>
    </PageParagraph>
  </React.Fragment>
);

const Section6 = (
  <React.Fragment>
    <PageSubTitle>
      (3) For Reservations During Spring/Summer (April 1 – July 11) and Fall
      (September 3 – October 31)
    </PageSubTitle>
    <PageParagraph extraBottomPadding={true}>
      <PageSubParagraph>
        Your credit card on file will be charged a $50.00 deposit, and the
        balance will be charged within seven (7) days prior to your arrival.
      </PageSubParagraph>
      <PageSubParagraph>
        <strong>Cancellation Policy for Spring, Summer, and Fall Season</strong>
      </PageSubParagraph>
      <PageSubParagraph>
        You may cancel this reservation, in writing or e-mail within 7 days. All
        cancellations will be charged a $50 processing fee. For cancellations
        less than 7 days, the guest is responsible for the full value of the
        reservation reserved unless re-rented.
      </PageSubParagraph>
      <PageSubParagraph>
        A refund is given ONLY if the room has been re-rented equal to the dates
        reserved. If re-rented, a refund check is mailed minus the $50
        cancellation fee. All cancellations will be charged a $50 processing
        fee.
      </PageSubParagraph>
      <PageSubParagraph last={true}>
        NOTE: Special weekends during this Season include Skidmore Graduation,
        Skidmore Parent Weekends, Skidmore Reunion, Memorial Day Weekend, 4th of
        July Weekend, and Special Concert Weekends.
      </PageSubParagraph>
    </PageParagraph>
  </React.Fragment>
);

const Section7 = (
  <React.Fragment>
    <PageSubTitle>
      (4) For Reservations During Winter (November 1 – March 31)
    </PageSubTitle>
    <PageParagraph extraBottomPadding={true}>
      <PageSubParagraph>
        Your credit card on file will be charged a $50.00 deposit, and the
        balance will be charged within three (3) days prior to your arrival.
      </PageSubParagraph>
      <PageSubParagraph>
        <strong>Cancellation Policy for Winter Season</strong>
      </PageSubParagraph>
      <PageSubParagraph>
        You may cancel this reservation, in writing or e-mail within 3 days. All
        cancellations will be charged a $50 processing fee. For cancellations
        less than 3 days, the guest is responsible for the full value of the
        reservation reserved unless re-rented.
      </PageSubParagraph>
      <PageSubParagraph>
        A refund is given ONLY if the room has been re-rented equal to the dates
        reserved. If re-rented, a refund check is mailed minus the $50
        cancellation fee. All cancellations will be charged a $50 processing
        fee. *
      </PageSubParagraph>
      <PageSubParagraph last={true}>
        NOTE: Special weekends during this Season include New Year’s Eve and
        Dance Flurry Festival Weekend.
      </PageSubParagraph>
    </PageParagraph>
  </React.Fragment>
);

const Section8 = (
  <React.Fragment>
    <PageSubTitle>Group Reservations</PageSubTitle>
    <PageParagraph extraBottomPadding={true}>
      A Group Reservation is defined by three (3) rooms. At the time of booking,
      your credit card will be charged for the first night for each room.
      Payments are due by two check payments; 25% of the reservation due within
      ten (10) days of booking, and the final balance of the reservation is due
      fourteen (14) days prior to arrival. All payments will be made responsible
      for the person that made the reservation.{" "}
    </PageParagraph>

    <PageSubTitle>Cancellation of a Group Reservation</PageSubTitle>
    <PageParagraph extraBottomPadding={true}>
      You may cancel this reservation, in writing by e-mail. A refund is given
      ONLY if the room has been re-rented equal to the dates reserved. If
      re-rented, a refund check is mailed, minus the first night charge for each
      room and a $50 cancellation processing fee.
    </PageParagraph>
  </React.Fragment>
);

const Section9 = (
  <React.Fragment>
    <PageSubTitle>Event Cancellations</PageSubTitle>
    <PageParagraph extraBottomPadding={true}>
      All event fees are non-refundable.
    </PageParagraph>
    <PageSubTitle>Room Keys</PageSubTitle>
    <PageParagraph extraBottomPadding={true}>
      Please be advised that keys not returned to the Innkeeper will incur a $50
      charge.
    </PageParagraph>
    <PageSubTitle>Smoke Free</PageSubTitle>
    <PageParagraph extraBottomPadding={true}>
      We are a Smoke-Free property. Absolutely no smoking is permitted inside,
      and a minimum charge of $500.00 will incur, if smoking in your room is
      detected.
    </PageParagraph>
    <PageSubTitle>Pet Policy</PageSubTitle>
    <PageParagraph extraBottomPadding={true}>
      <PageSubParagraph>
        Pets are allowed in eight (8) of our guest rooms with an additional
        one-time pet fee (per pet) of $50. Please respect our{" "}
        <PageParagraphLink href="/about-us/pet-friendly">
          pet rules
        </PageParagraphLink>
        , which are given to you upon arrival.
      </PageSubParagraph>
      <PageSubParagraph last={true}>
        This fee does not include damages to towels, sheets, blankets, quilts,
        rugs, and furniture. A determination of damage will be assessed and
        charges will be applied for any damage.
      </PageSubParagraph>
    </PageParagraph>
  </React.Fragment>
);

const Section10 = (
  <React.Fragment>
    <PageSubTitle>Children</PageSubTitle>
    <PageParagraph extraBottomPadding={true}>
      Throughout the year, we welcome children twelve (12) years of age and
      older. If a reservation is made, or a change in reservation is made, where
      a child under the age of twelve (12) is staying, we reserve the right to
      cancel your reservation upon arrival.
    </PageParagraph>
  </React.Fragment>
);

const Section11 = (
  <React.Fragment>
    <PageSubTitle>Earth Conscious Initiatives</PageSubTitle>
    <PageParagraph>
      <PageSubParagraph>
        As a historic mansion of 118 years old, Union Gables strives to practice
        as much as possible as a Green Hotel.
      </PageSubParagraph>
      <PageSubParagraph>
        Your payment receipt is emailed to you unless you request a printed
        receipt.
      </PageSubParagraph>
      <PageSubParagraph>
        For energy usage, Union Gables is powered 100% by wind power for all
        electric.
      </PageSubParagraph>
      <PageSubParagraph>
        Any food waste from our breakfast is carefully composted and we use
        recycled materials for paper and amenity bottles.
      </PageSubParagraph>
      <PageSubParagraph>
        Our gardens are watered with our own spring fed well on property.{" "}
      </PageSubParagraph>
    </PageParagraph>
  </React.Fragment>
);

const api = {
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
