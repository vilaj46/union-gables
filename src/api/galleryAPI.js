import * as React from "react";

// Shared Components
import PageParagraph from "../styledComponents/Shared/PageParagraph";
import PageSubParagraph from "../styledComponents/Shared/PageSubParagraph";
import PageParagraphLink from "../styledComponents/Shared/PageParagraphLink";

const Section1 = (
  <PageParagraph extraBottomPadding={true}>
    <PageSubParagraph>
      Browse through Union Gables Inn's photo gallery to learn more about our
      charming Victorian property in Saratoga Springs. Our{" "}
      <PageParagraphLink href="/about-us">historic hotel</PageParagraphLink> is
      over 100 years old and is situated in the heart of Saratoga’s historic
      district. When you stay with us at Union Gables Inn, you can enjoy easy
      access to all of your favorite{" "}
      <PageParagraphLink href="/discover/things-to-do">
        attractions
      </PageParagraphLink>
      , dining, and shopping.
    </PageSubParagraph>
    <PageSubParagraph>
      We take pride in being able to provide our guests with beautifully
      landscaped grounds, a heated outdoor pool, free Wi-Fi, complimentary
      breakfast, and so many more{" "}
      <PageParagraphLink href="/about-us/amenities">
        amenities
      </PageParagraphLink>
      . Union Gables Inn is where Victorian era beauty meets modern luxury.
    </PageSubParagraph>
    <PageSubParagraph last={true}>
      In our photo gallery, you will find imagery from our extensive list of
      room types. Every{" "}
      <PageParagraphLink href="/rooms">lodging</PageParagraphLink> is unique
      with its very own history, but they all share features including a
      classic, elegant décor style, private bathrooms, natural gas fireplaces,
      and flat-screen televisions. Discover your perfect room today.
    </PageSubParagraph>
  </PageParagraph>
);

const title = "Photo Gallery";

const api = {
  // Text
  title,

  // Sections
  Section1,
};

export default api;
