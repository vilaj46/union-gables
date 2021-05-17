import * as React from "react";

// Shared Components
import PageParagraph from "../styledComponents/Shared/PageParagraph";
import PageSubParagraph from "../styledComponents/Shared/PageSubParagraph";
import PageParagraphLink from "../styledComponents/Shared/PageParagraphLink";

// Images
import dancing from "../images/springsCenter/dancing.jpg";
import gathering from "../images/springsCenter/gathering.jpg";
import lecture from "../images/springsCenter/lecture.jpg";

// Paragraphs
const Paragraph1 = (
  <PageParagraph>
    Stay close to the heart of downtown at our historic hotel near Saratoga
    Springs City Center! Union Gables Inn is just a 15-minute walk or 3-minute
    drive from the convention center, the largest event venue in the city.
    Whether you’re attending a conference or special convention, our Queen Anne
    mansion hotel is the perfect place to stay for a luxurious and
    home-away-from-home experience.
  </PageParagraph>
);

const Paragraph2 = (
  <PageParagraph>
    <PageSubParagraph>
      Our hotel near Saratoga Springs City Center is a 15-minute walk down
      Putnam St. which continues onto Maple Ave.
    </PageSubParagraph>
    <PageSubParagraph>
      Stay connected with the convention center’s complimentary public Wi-Fi.
    </PageSubParagraph>
    <PageSubParagraph>
      The city center has a parking lot on Maple Avenue. There is also an
      adjacent municipal parking lot with complimentary 48-hour parking for
      overflow cars.{" "}
      <PageParagraphLink
        href="https://www.saratogacitycenter.org/attend/parking/"
        target={true}
      >
        See a parking map!
      </PageParagraphLink>
    </PageSubParagraph>
    <PageSubParagraph>
      Outside food and beverages are not allowed.
    </PageSubParagraph>
  </PageParagraph>
);

const Paragraph3 = (
  <PageParagraph>
    Saratoga Springs City Center boasts 32,000 square feet of leasable space,
    with 20 individual and customizable meeting spaces. Some of the largest and
    most popular events are hosted at the city center, including:
  </PageParagraph>
);

const Paragraph4 = (
  <PageParagraph center={true}>
    Book your stay in one of our{" "}
    <PageParagraphLink href="/rooms/lodging">one-of-a-kind</PageParagraphLink>{" "}
    rooms at our luxurious hotel near Saratoga Springs City Center!
  </PageParagraph>
);

// Text
const title = "Hotel near Saratoga Springs City Center";
const subTitle1 = "Visitor Information";
const subTitle2 = "About SSCC";

const api = {
  // Text
  title,
  subTitle1,
  subTitle2,

  // Paragraphs
  Paragraph1,
  Paragraph2,
  Paragraph3,
  Paragraph4,

  // Images
  dancing,
  gathering,
  lecture,
};

export default api;
