import * as React from "react";

// Shared Components
import PageParagraph from "../styledComponents/Shared/PageParagraph";
import PageSubTitle from "../styledComponents/Shared/PageSubTitle";
import PageSubParagraph from "../styledComponents/Shared/PageSubParagraph";
import PageParagraphLink from "../styledComponents/Shared/PageParagraphLink";

// Text
const title = "Hotel near Skidmore College";

// Sections
const Section1 = (
  <PageParagraph>
    Visit one of America’s Most Entrepreneurial Colleges during your stay at our
    hotel near Skidmore College in Saratoga Springs, New York! Located 30 miles
    from Albany and three hours from New York City, Saratoga is considered one
    of the “Hidden Ivies” and offers an unparalleled liberal arts education.
    Easily attend campus tours and graduation ceremonies just a short drive from
    Union Gables Inn.
  </PageParagraph>
);

const Section2 = (
  <PageParagraph center={true}>
    Book your room for Graduation now with a special 10% discount!
  </PageParagraph>
);

const Section3 = (
  <React.Fragment>
    <PageSubTitle>Visiting Campus</PageSubTitle>
    <PageParagraph>
      <PageSubParagraph>
        Drive just 7 minutes from Union Gables Inn to Skidmore College!
      </PageSubParagraph>
      <PageSubParagraph>
        Check the{" "}
        <PageParagraphLink
          target={true}
          href="https://www.skidmore.edu/parents/"
        >
          Parents Page
        </PageParagraphLink>{" "}
        to see when Celebration Weekend and Commencement are this year!{" "}
      </PageSubParagraph>
      <PageSubParagraph>
        Take a virtual tour on the{" "}
        <PageParagraphLink
          target={true}
          href="https://www.skidmore.edu/directions/maps.php"
        >
          campus map
        </PageParagraphLink>
        .{" "}
      </PageSubParagraph>
      <PageSubParagraph>
        Wear comfortable shoes for walking around campus.
      </PageSubParagraph>
      <PageSubParagraph>
        Visiting the Skidmore Boathouse, Van Lennep Riding Center, or Castle
        Diamond? See directions to other{" "}
        <PageParagraphLink
          target={true}
          href="https://www.skidmore.edu/directions/off-campus.php"
        >
          off-campus locations
        </PageParagraphLink>
        .{" "}
      </PageSubParagraph>
    </PageParagraph>
  </React.Fragment>
);

const Section4 = (
  <React.Fragment>
    <PageSubTitle>Perfect for Parents</PageSubTitle>
    <PageParagraph>
      <PageSubParagraph>
        Our historic Queen Anne mansion is over 100 years old and situated just
        a few minutes from downtown Saratoga. Rest and relax in large rooms with
        king beds and natural gas fireplaces. Each morning begins with a fresh
        gourmet breakfast, and many of our guests enjoy afternoons sitting on
        the wraparound porch or amidst our Perennial gardens and Romanesque
        pool.
      </PageSubParagraph>
      <PageSubParagraph>
        See the Union Gables Inn{" "}
        <PageParagraphLink href="/rooms">lodgings</PageParagraphLink>.
      </PageSubParagraph>
    </PageParagraph>
  </React.Fragment>
);

const Section5 = (
  <PageParagraph center={true}>
    <PageParagraphLink
      href="https://reserve1.resnexus.com/resnexus/reservations/lodging/5888F13B-7306-4082-89C2-B6F42CC9CD92?ID=2704"
      target={true}
    >
      Reserve your room
    </PageParagraphLink>{" "}
    today at our charming hotel near Skidmore College in Saratoga Springs, NY!{" "}
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
};

export default api;
