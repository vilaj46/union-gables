import * as React from "react";

import PageSubTitle from "../styledComponents/Shared/PageSubTitle";
import PageParagraph from "../styledComponents/Shared/PageParagraph";
import PageSubParagraph from "../styledComponents/Shared/PageSubParagraph";
import PageParagraphLink from "../styledComponents/Shared/PageParagraphLink";

// Text
const title = "Places to Eat in Saratoga Springs, NY";

// Sections

const Section1 = (
  <PageParagraph>
    <PageSubParagraph>
      Stay with us at Union Gables Inn for convenient access to some of the best
      places to eat in Saratoga Springs, NY. After a long day of enjoying the
      great outdoors at{" "}
      <PageParagraphLink href="/discover/spa-state-park">
        Saratoga Spa State Park
      </PageParagraphLink>{" "}
      and cheering for your favorite horse at the{" "}
      <PageParagraphLink href="/discover/race-course">
        Saratoga Race Course
      </PageParagraphLink>
      , treat yourself to a dinner that’s fit for royalty.
    </PageSubParagraph>
    <PageSubParagraph>
      With such a wide array of different types of cuisine, Saratoga is quickly
      becoming an exceptional dining destination. From casual eateries to
      fine-dining restaurants, there’s something for all tastes and occasions.
    </PageSubParagraph>
    <PageSubParagraph>
      Feel free to refer to our list of recommended places to eat in Saratoga
      Springs, or visit our concierge for more information during your stay. Our
      staff is dedicated to providing you with exceptional hospitality and
      making your trip memorable.{" "}
    </PageSubParagraph>
  </PageParagraph>
);

const Section2 = (
  <React.Fragment>
    <PageSubTitle>The Brook Tavern</PageSubTitle>
    <PageParagraph center={true}>
      <PageSubParagraph>
        <PageParagraphLink
          href="https://www.google.com/maps/place/The+Brook+Tavern/@43.0765223,-73.7778981,17z/data=!3m1!4b1!4m5!3m4!1s0x89de39dcc0663449:0x1db74b55889e914a!8m2!3d43.0765137!4d-73.775713"
          target={true}
        >
          0.2 miles from the property
        </PageParagraphLink>{" "}
        | 5-minute walk |{" "}
        <PageParagraphLink href="https://www.thebrooktavern.com" target={true}>
          The Brook Tavern website
        </PageParagraphLink>
      </PageSubParagraph>
      <PageSubParagraph>
        This former 19th-century horse carriage factory is now an upscale
        restaurant! Their menu features steak, seafood, and specialty cocktails.{" "}
      </PageSubParagraph>
    </PageParagraph>

    <PageSubTitle>Hattie’s</PageSubTitle>
    <PageParagraph center={true}>
      <PageSubParagraph>
        <PageParagraphLink
          href="https://www.google.com/maps/place/Hattie's/@43.0804856,-73.7856494,17z/data=!3m1!4b1!4m5!3m4!1s0x89de39d0a3e93671:0x3563e35a277bffa5!8m2!3d43.0804817!4d-73.7834607"
          target={true}
        >
          0.4 miles from the property
        </PageParagraphLink>{" "}
        | 8-minute walk |{" "}
        <PageParagraphLink href="http://hattiesrestaurant.com/" target={true}>
          Hattie's website
        </PageParagraphLink>
      </PageSubParagraph>
      <PageSubParagraph>
        A Saratoga staple for fine, Southern cuisine. This local favourite still
        operates in their original shack from 1938. Stop by for their
        award-winning fried chicken!
      </PageSubParagraph>
    </PageParagraph>

    <PageSubTitle>Phila Fusion Noodle Bar</PageSubTitle>
    <PageParagraph center={true}>
      <PageSubParagraph>
        <PageParagraphLink
          href="https://www.google.com/maps/place/Phila+Fusion+Noodle+Bar/@43.0802245,-73.7854397,17z/data=!3m1!4b1!4m5!3m4!1s0x89de39d09f0480db:0x10dd93db75e66165!8m2!3d43.0802206!4d-73.783251"
          target={true}
        >
          0.4 miles from the property
        </PageParagraphLink>{" "}
        | 8-minute walk |{" "}
        <PageParagraphLink href="https://philafusion.com/" target={true}>
          Phila Fusion Noodle Bar website
        </PageParagraphLink>
      </PageSubParagraph>
      <PageSubParagraph>
        Enjoy Chinese, Korean, Vietnamese, and Thai dishes, all at Phila Fusion
        Noodlge Bar – a favorite place to eat in Saratoga Springs, NY.{" "}
      </PageSubParagraph>
    </PageParagraph>
  </React.Fragment>
);

const Section3 = (
  <React.Fragment>
    <PageSubTitle>Druthers Brewing Company</PageSubTitle>
    <PageParagraph center={true}>
      <PageSubParagraph>
        <PageParagraphLink
          href="https://www.google.com/maps/place/Druthers+Brewing+Company/@43.0808767,-73.7886908,17z/data=!3m1!4b1!4m5!3m4!1s0x89de39d120a8e13f:0xc6c9d89857ae1232!8m2!3d43.0808728!4d-73.7865021"
          target={true}
        >
          0.5 miles from the property
        </PageParagraphLink>{" "}
        | 10-minute walk |{" "}
        <PageParagraphLink
          href="https://www.druthersbrewing.com/"
          target={true}
        >
          Druthers Brewing Company website
        </PageParagraphLink>
      </PageSubParagraph>
      <PageSubParagraph>
        Try craft beer brewed right here in Saratoga Springs! Their local craft
        beer pairs well with wood-fired pizza.{" "}
      </PageSubParagraph>
    </PageParagraph>

    <PageSubTitle>Boca Bistro</PageSubTitle>
    <PageParagraph center={true}>
      <PageSubParagraph>
        <PageParagraphLink
          href="https://www.google.com/maps/place/Boca+Bistro/@43.081075,-73.7876526,17z/data=!3m1!4b1!4m5!3m4!1s0x89de39d0da0093e1:0x3e2f8a36cb8708c3!8m2!3d43.0810677!4d-73.7854318"
          target={true}
        >
          0.5 miles from the property
        </PageParagraphLink>{" "}
        | 10-minute walk |{" "}
        <PageParagraphLink href="http://bocabistro.com/" target={true}>
          Boca Bistro website
        </PageParagraphLink>
        <PageSubParagraph>
          Enjoy Spanish cuisine tapas-style at Boca! Their extensive, authentic
          menu features locally-sourced produce.
        </PageSubParagraph>
      </PageSubParagraph>
    </PageParagraph>

    <PageSubTitle>30 Lake</PageSubTitle>
    <PageParagraph center={true}>
      <PageSubParagraph>
        <PageParagraphLink
          href="https://www.google.com/maps/place/30+Lake/@43.0825941,-73.7851829,17z/data=!3m1!4b1!4m5!3m4!1s0x89de39d9de3e707f:0x95d1b6121a8c4e7f!8m2!3d43.0826246!4d-73.7831349"
          target={true}
        >
          0.6 miles from the property
        </PageParagraphLink>{" "}
        | 12-minute walk |{" "}
        <PageParagraphLink href="https://30lake.com/" target={true}>
          30 Lake website
        </PageParagraphLink>
      </PageSubParagraph>
      <PageSubParagraph>
        This contemporary seafood spot serves an ocean-to-table menu, weekly
        specials, and craft cocktails.{" "}
      </PageSubParagraph>
    </PageParagraph>

    <PageSubTitle>Chianti Il Ristorante</PageSubTitle>
    <PageParagraph center={true}>
      <PageSubParagraph>
        <PageParagraphLink
          href="https://www.google.com/maps/place/Chianti+Il+Ristorante/@43.0816925,-73.7894011,17z/data=!3m1!4b1!4m5!3m4!1s0x89de39ce580aa4c3:0xe9073e670bcaaccf!8m2!3d43.0816886!4d-73.7872124"
          target={true}
        >
          0.6 miles from the property
        </PageParagraphLink>{" "}
        | 13-minute walk |{" "}
        <PageParagraphLink href="http://chiantiristorante.com/" target={true}>
          Chianti Il Ristorante
        </PageParagraphLink>
      </PageSubParagraph>
      <PageSubParagraph>
        Chianti Il Ristorante brings Northern Italia to Saratoga. Try their
        authentic menu for traditional favorites, or try something new like the
        decadent Nutella Tiramisu!
      </PageSubParagraph>
    </PageParagraph>
  </React.Fragment>
);

const Section4 = (
  <React.Fragment>
    <PageSubTitle>15 Church</PageSubTitle>
    <PageParagraph center={true}>
      <PageSubParagraph>
        <PageParagraphLink
          href="https://www.google.com/maps/place/15+Church/@43.0835285,-73.7878026,17z/data=!3m1!4b1!4m5!3m4!1s0x89de39d7049fbdef:0xc1ed775b2099d6b7!8m2!3d43.0835285!4d-73.7856139"
          target={true}
        >
          0.7 miles from the property
        </PageParagraphLink>{" "}
        | 15-minute walk |{" "}
        <PageParagraphLink
          href="https://www.15churchrestaurant.com/"
          target={true}
        >
          15 Church website
        </PageParagraphLink>
      </PageSubParagraph>
      <PageSubParagraph>
        This fabulous spot is known for their prime aged beef and romantic
        atmosphere. 15 Church is a choice restaurant for hosting events such as
        birthdays and anniversaries.
      </PageSubParagraph>
    </PageParagraph>

    <PageSubTitle>Mouzon House</PageSubTitle>
    <PageParagraph center={true}>
      <PageSubParagraph>
        <PageParagraphLink
          href="https://www.google.com/maps/place/The+Mouzon+House/@43.0847709,-73.7842037,17z/data=!3m1!4b1!4m5!3m4!1s0x89de39d816045cbf:0xf4d7e6e2232db4e0!8m2!3d43.084767!4d-73.782015"
          target={true}
        >
          0.7 miles from the property
        </PageParagraphLink>{" "}
        | 15-minute walk |{" "}
        <PageParagraphLink href="https://mouzonhouse.net/" target={true}>
          Mouzon House website
        </PageParagraphLink>
      </PageSubParagraph>
      <PageSubParagraph>
        Try farm-to-table Creole cuisine at the Mouzon House, one of the most
        historic places to eat near Saratoga Springs, NY. This venue also
        features live music events.{" "}
      </PageSubParagraph>
    </PageParagraph>

    <PageSubTitle>Forno Bistro</PageSubTitle>
    <PageParagraph center={true}>
      <PageSubParagraph>
        <PageParagraphLink
          href="https://www.google.com/maps/place/Forno+Bistro/@43.0855627,-73.7865158,17z/data=!3m1!4b1!4m5!3m4!1s0x89de39d7fab5b6f9:0x93b9d659ef5c182f!8m2!3d43.0855588!4d-73.7843271"
          target={true}
        >
          0.8 miles from the property
        </PageParagraphLink>{" "}
        | 18-minute walk |{" "}
        <PageParagraphLink href="http://fornobistro.com/" target={true}>
          Forno Bistro
        </PageParagraphLink>
      </PageSubParagraph>
      <PageSubParagraph>
        Enjoy fresh Italian dishes in Tuscan-style quarters. With an all-season
        patio and modern take on Italian cuisine, Forno Bistro is always a good
        time.{" "}
      </PageSubParagraph>
    </PageParagraph>
  </React.Fragment>
);

const Section5 = (
  <PageParagraph center={true}>
    Visit an abundance of places to eat in Saratoga Springs, NY within walking
    distance of Union Gables Inn!
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
