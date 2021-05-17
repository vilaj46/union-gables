import * as React from "react";

// Sub Component
import Circle from "../Shared/RedCircle";
import {
  PageSubLinksContainer,
  PageSubLinksItem,
} from "../Shared/PageSubLinks";

import api from "../../api/homepageAPI";

const DiscoverLinks = () => {
  return (
    <PageSubLinksContainer>
      <div>
        <PageSubLinksItem
          href={api.congressPark.href}
          target="_blank"
          type="regular"
        >
          {api.congressPark.text}
        </PageSubLinksItem>
        <Circle />

        <PageSubLinksItem href={api.saratogaRaceCourse.href} type="gatsby">
          {api.saratogaRaceCourse.text}
        </PageSubLinksItem>
        <Circle />

        <PageSubLinksItem
          href={api.saratogaPerformingArtsCenter.href}
          type="gatsby"
        >
          {api.saratogaPerformingArtsCenter.text}
        </PageSubLinksItem>
      </div>

      <div>
        <PageSubLinksItem
          href={api.saratogaSpringsCityCenter.href}
          type="gatsby"
        >
          {api.saratogaSpringsCityCenter.text}
        </PageSubLinksItem>
        <Circle />

        <PageSubLinksItem href={api.saratogaSpaStatePark.href} type="gatsby">
          {api.saratogaSpaStatePark.text}
        </PageSubLinksItem>
        <Circle />

        <PageSubLinksItem
          href={api.annualFestivalsAndEvents.href}
          type="gatsby"
        >
          {api.annualFestivalsAndEvents.text}
        </PageSubLinksItem>
      </div>
    </PageSubLinksContainer>
  );
};

export default DiscoverLinks;
