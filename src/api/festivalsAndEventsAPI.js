import * as React from "react";

// Shared Components
import PageParagraph from "../styledComponents/Shared/PageParagraph";
import PageSubParagraph from "../styledComponents/Shared/PageSubParagraph";
import PageParagraphLink from "../styledComponents/Shared/PageParagraphLink";

// Images
import dancing from "../images/festivalsAndEvents/dancing.jpg";
import dining from "../images/festivalsAndEvents/dining.jpg";
import market from "../images/festivalsAndEvents/market.jpg";
import nightlife from "../images/festivalsAndEvents/nightlife.jpg";
import saxaphone from "../images/festivalsAndEvents/saxaphone.jpg";
import violins from "../images/festivalsAndEvents/violins.jpg";

const Paragraph1 = (
  <PageParagraph extraBottomPadding={true}>
    Experience health, horses, history, and more popular events in Saratoga
    Springs, NY! With the change of seasons brings the horse races and polo,
    annual galas and fundraisers, outdoor concerts at Saratoga Performing Arts
    Center, rowing regattas, and more! We recommend visitors tour the waters of
    Saratoga Spa State Park for a taste of healthy mineral baths. Visit
    beautiful parks, golf courses, unique shops, and delicious restaurants no
    matter the time of year!{" "}
  </PageParagraph>
);

// Text
const title = "Events in Saratoga Springs, NY";

const api = {
  // Text
  title,

  // Paragraphs
  Paragraph1,

  // Images
  dancing,
  dining,
  market,
  nightlife,
  saxaphone,
  violins,
};

export default api;
