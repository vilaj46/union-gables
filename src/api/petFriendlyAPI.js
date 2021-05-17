import * as React from "react";

import PageParagraph from "../styledComponents/Shared/PageParagraph";
import PageSubParagraph from "../styledComponents/Shared/PageSubParagraph";
import PageParagraphLink from "../styledComponents/Shared/PageParagraphLink";

// Paragraphs
const Paragraph1 = (
  <PageParagraph extraBottomPadding={true}>
    Union Gables Inn is proud to be a pet-friendly hotel in Saratoga Springs,
    New York. We will happily allow your well-behaved, furry friend to stay with
    us for a small fee. Pets are provided with a blanket, bowl, and a breakfast
    menu of their own!
  </PageParagraph>
);

const Paragraph2 = (
  <PageParagraph center={true}>
    There is a one-time, per pet fee of $50 for large dogs, and $25 for small
    dogs (20 lbs. and under)
  </PageParagraph>
);

const Paragraph3 = (
  <PageParagraph center={true}>
    During breakfast we allow dogs on the porch, patio, and a designated
    breakfast area in the Billiards room.
  </PageParagraph>
);

const Paragraph4 = (
  <PageParagraph center={true}>
    Our cleaning staff will not go into rooms to change towels or sheets unless
    you notify us that your dog is not present in the room. If you allow your
    dog on the furniture, please use the blanket provided.
  </PageParagraph>
);

const Paragraph5 = (
  <PageParagraph center={true}>
    If you leave your pet in the room, please provide a cell phone number where
    you can be reached in the event of any noise complaints.
  </PageParagraph>
);

const Paragraph6 = (
  <PageParagraph center={true}>
    Please do not walk your pet on the side lawn, however the surrounding
    neighborhood is wonderful for walking.
  </PageParagraph>
);

const Paragraph7 = (
  <PageParagraph center={true}>
    Please clean up after your pet when walking them and before leaving your
    room.
  </PageParagraph>
);

const Paragraph8 = (
  <PageParagraph center={true} extraBottomPadding={true}>
    A dog waste bin can be found at the back side of the main mansion near the
    parking lot before the Dakota Garden Statue.
  </PageParagraph>
);

const Paragraph9 = (
  <PageParagraph>
    There are nine designated pet-friendly rooms in the hotel – some with a
    private patio. Please contact us for details or to book one of the following
    pet-friendly rooms:
  </PageParagraph>
);

const Paragraph10 = (
  <PageParagraph extraBottomPadding={true}>
    Your pet can enjoy the great outdoors in Saratoga, too! Enjoy a walk on one
    of these nearby trails:
  </PageParagraph>
);

const Paragraph11 = (
  <PageParagraph extraBottomPadding={true}>
    Explore many different trails just a short walk away from the Inn! Enjoy
    beautifully landscaped grounds with fountains and other statuary, picnic
    tables and historic sights.
  </PageParagraph>
);

const Paragraph12 = (
  <PageParagraph extraBottomPadding={true}>
    Walk through this iconic{" "}
    <PageParagraphLink href="/discover/spa-state-park">
      State Park
    </PageParagraphLink>{" "}
    and enjoy beautiful scenery and natural springs along the way. Visit the{" "}
    <PageParagraphLink
      href="https://parks.ny.gov/parks/saratogaspa"
      target={true}
    >
      Saratoga Spa State Park website
    </PageParagraphLink>{" "}
    to read their pet policy.
  </PageParagraph>
);

const Paragraph13 = (
  <PageParagraph>
    <PageSubParagraph>
      <PageParagraphLink
        href="https://www.facebook.com/dirtydogbyliz"
        target={true}
      >
        Dirty Dog by Liz, Inc
      </PageParagraphLink>
      : 42 Park Pl, Saratoga Springs, NY 12866, United States
    </PageSubParagraph>
    <PageSubParagraph>
      Take your pooch to get pampered at this independent, all-natural dog spa.
      Dirty Dog by Liz Inc. is conveniently located just a 5-minute walk or a
      2-minute drive away from the property.
    </PageSubParagraph>
  </PageParagraph>
);

const Paragraph14 = (
  <PageParagraph center={true}>
    Book your stay today at our pet-friendly hotel in Saratoga Springs!{" "}
  </PageParagraph>
);

// Text
const title = "Pet-Friendly Hotel in Saratoga Springs, New York";
const subTitle1 = "Our Policy";
const subTitle2 = "Our Rooms";
const subTitle3 = "Dog-Walking";
const subTitle4 = "Congress Park";
const subTitle5 = "Saratoga Spa State Park";
const subTitle6 = "Grooming Services";

// Images

const api = {
  // Text
  title,
  subTitle1,
  subTitle2,
  subTitle3,
  subTitle4,
  subTitle5,
  subTitle6,

  // Paragraphs
  Paragraph1,
  Paragraph2,
  Paragraph3,
  Paragraph4,
  Paragraph5,
  Paragraph6,
  Paragraph7,
  Paragraph8,
  Paragraph9,
  Paragraph10,
  Paragraph11,
  Paragraph12,
  Paragraph13,
  Paragraph14,
  // Images
};

export default api;
