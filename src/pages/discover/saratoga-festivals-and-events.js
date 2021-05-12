import * as React from "react";
import styled from "styled-components";

// Components
import Header from "../../styledComponents/Header/Header";
import Footer from "../../styledComponents/Footer/Footer";

// Shared Components
import PageTitle from "../../styledComponents/Shared/PageTitle";
import PageSubTitle from "../../styledComponents/Shared/PageSubTitle";
import PageImage from "../../styledComponents/Shared/PageImage";
import PageParagraph from "../../styledComponents/Shared/PageParagraph";
import PageSubParagraph from "../../styledComponents/Shared/PageSubParagraph";
import FontContainer from "../../styledComponents/Shared/FontContainer";
import PageBodyContainer from "../../styledComponents/Shared/PageBodyContainer";
import HorizontalRule from "../../styledComponents/Shared/HorizontalRule";

import BottomPadding from "../../styledComponents/Shared/BottomPadding";

// Images
import mainImage from "../../images/saratogaEvents.jpg";
import mainImage1 from "../../images/saratogaEvents1.jpg";
import mainImage2 from "../../images/saratogaEvents2.jpg";
import mainImage3 from "../../images/saratogaEvents3.jpg";
import mainImage4 from "../../images/saratogaEvents4.jpg";
import mainImage5 from "../../images/saratogaEvents5.jpg";

const title = "Events in Saratoga Springs, NY";

const SaratogaPerformingArts = () => {
  return (
    <FontContainer>
      <Header />
      <title>Saratoga PerformingArts Page!</title>
      <PageTitle>{title}</PageTitle>
      <PageBodyContainer>
        <PageParagraph>
          Experience health, horses, history, and more popular events in
          Saratoga Springs, NY! With the change of seasons brings the horse
          races and polo, annual galas and fundraisers, outdoor concerts at
          Saratoga Performing Arts Center, rowing regattas, and more! We
          recommend visitors tour the waters of Saratoga Spa State Park for a
          taste of healthy mineral baths. Visit beautiful parks, golf courses,
          unique shops, and delicious restaurants no matter the time of year!{" "}
        </PageParagraph>
        <PageSubTitle>Events Guide</PageSubTitle>
        <EventsLinks />
        <PageImage src={mainImage} alt="Music" />
        <PageTitle id="ongoing">Ongoing Events Throughout the Year</PageTitle>
        <PageSubTitle>The Saratoga Farmers’ Market</PageSubTitle>
        <PageParagraph>
          <PageSubParagraph>
            Vendors from local farms gather with fresh produce, meats, cheeses,
            jams, yogurts, baked breads, and Artisanal goods. Wander through
            indoor and outdoor stalls shopping for handmade jewelry, wine
            varieties, mushroom supplements, and herbal teas.
          </PageSubParagraph>
          <PageSubParagraph>
            Wednesdays at the High Rock Park Pavillion, 105 High Rock Avenue.
            3:00 pm to 6:00 pm. Saturdays at the High Rock Park Pavillion, 105
            High Rock Avenue. 9:00 am to 1:00 pm Sundays at the Lincoln Bath
            House at the entrance to the Spa State Park, 10:00 am -2:00 pm
          </PageSubParagraph>
        </PageParagraph>
        <PageSubTitle>Taste the Waters of Saratoga Spa Park</PageSubTitle>
        <PageParagraph>
          <PageSubParagraph>
            Learn about the health, medical & wellness history of all the waters
            of Saratoga and the famous Roosevelt Bath and Spa. View the amazing
            Orenda "Tufa" & Geysers tufa mound & dancing spouter. Enjoy the
            benefits of the "rarified atmosphere" created by the ionized
            elements in the air.
          </PageSubParagraph>
          <PageSubParagraph>
            Daily tours at the education center: 11:00 AM, 1:00 PM and 3:00 PM
          </PageSubParagraph>
        </PageParagraph>
        <PageSubTitle>Local Music Venues</PageSubTitle>
        <PageParagraph>
          <PageSubParagraph>
            <strong>Café Lena:</strong> Local music venue scheduled throughout
            the year.
          </PageSubParagraph>
          <PageSubParagraph>
            <strong>Zankel Music Center at Skidmore College:</strong> Classical
            and Jazz performances open to the public, scheduled throughout the
            year.
          </PageSubParagraph>
          <PageSubParagraph>
            <strong>9 Maple Jazz Bar</strong>
          </PageSubParagraph>
        </PageParagraph>
        <PageImage src={mainImage1} alt="Dancing" />
        <PageTitle>Annual Events</PageTitle>
        <HorizontalRule />
        <PageTitle id="winter">Winter</PageTitle>
        <PageSubTitle>January</PageSubTitle>
        <PageParagraph>
          <strong>Hattie's Annual Mardi Gras Soiree</strong>
        </PageParagraph>
        <PageParagraph>
          One of the region’s “must attend” fundraising events of the winter
          season is Hattie’s Mardi Gras Party at The Canfield Casino.
        </PageParagraph>
        <PageParagraph>
          <strong>A Purple Tie Affair</strong>
        </PageParagraph>
        <PageParagraph>
          Fundraiser for the Leukemia and Lymphoma Society at the National Dance
          Museum
        </PageParagraph>
        <PageParagraph>
          <strong>The Winter Party</strong>
        </PageParagraph>
        <PageParagraph>
          At the National Museum of Racing & Hall of Fame
        </PageParagraph>
        <PageParagraph>
          <strong>Candlelight Ski and Snowshoe</strong>
        </PageParagraph>
        <PageParagraph>
          A candlelit loop of Saratoga Springs Spa State Park, plus a bonfire
          and hot drinks.
        </PageParagraph>
        <HorizontalRule />
        <PageSubTitle>February</PageSubTitle>
        <PageParagraph>
          <strong>Annual Winterfest</strong>
        </PageParagraph>
        <PageParagraph>
          Winterfest is a popular annual event in Saratoga Springs, bringing the
          spirit of winter to the Spa City with a week full of special events
          and great entertainment!
        </PageParagraph>
        <PageParagraph>
          <strong>Chowderfest in Saratoga Springs, NY</strong>
        </PageParagraph>
        <PageParagraph>
          Come enjoy samples of chowder from local restaurants in Saratoga
          Springs at the Annual Saratoga Chowderfest.
        </PageParagraph>
        <PageParagraph>
          <strong>Dance Flurry weekend at the Saratoga City Center</strong>
        </PageParagraph>
        <PageParagraph>
          One of the top events in Saratoga Springs, learn to dance or watch
          workshops such as Contra, Swing, Latin, English Country, Squares,
          Vintage, Clogging, Hip-Hop, Cajun, Zydeco, Irish, Scandinavian, Middle
          Eastern, Asian, European, American and International Folk, Yoga and
          Body Movement.
        </PageParagraph>
        <PageParagraph>
          <strong>Saratoga Beer Summit</strong>
        </PageParagraph>
        <PageParagraph>
          Taste craft beer from around the world at the Saratoga Springs City
          Center.
        </PageParagraph>
        <PageParagraph>
          <strong>Saratoga Fat Bike Rally</strong>
        </PageParagraph>
        <PageParagraph>
          Tour the snowy landscape of Saratoga Spa State Park on marked trails.
        </PageParagraph>
        <PageImage src={mainImage2} alt="Drinks" />
        <PageTitle id="spring">Spring</PageTitle>
        <PageSubTitle>March - April</PageSubTitle>
        <PageParagraph>
          <strong>SPAC's Annual Winter Ball</strong>
        </PageParagraph>
        <PageParagraph>
          Celebrate the season at this gala event held at the Hall of Springs.
        </PageParagraph>
        <PageParagraph>
          <strong>Chess Tournament</strong>
        </PageParagraph>
        <PageParagraph>
          Test your strategy and game play at the Saratoga City Center.
        </PageParagraph>
        <PageParagraph>
          <strong>Annual Furry Fun Run</strong>
        </PageParagraph>
        <PageParagraph>
          This winter race begins at Warming Hut in Spa Park and tours through
          the state park.
        </PageParagraph>
        <PageParagraph>
          <strong>Tour of the Battenkill Bike Race</strong>
        </PageParagraph>
        <PageParagraph>
          Participate in one of America's largest single day road races, with a
          start in Greenich, NY.
        </PageParagraph>
        <PageParagraph>
          <strong>Spring Saratoga Rowing Invitational</strong>
        </PageParagraph>
        <PageParagraph>
          Cheer on crews at this classic regatta at Saratoga Lake.
        </PageParagraph>
        <HorizontalRule />
        <PageSubTitle>May</PageSubTitle>
        <PageParagraph>
          <strong>Kentucky Derby Day</strong>
        </PageParagraph>
        <PageParagraph>
          Celebrate one of the largest races of the year at the National Museum
          of Racing.
        </PageParagraph>
        <PageParagraph>
          <strong>Skidmore Graduation Weekend</strong>
        </PageParagraph>
        <PageParagraph>
          <strong>Skidmore College Reunion</strong>
        </PageParagraph>
        <PageParagraph>
          <strong>Opera Saratoga Annual Gala</strong>
        </PageParagraph>
        <PageParagraph>
          Enjoy the summer theatre festival on the shores of Lake George.
        </PageParagraph>
        <PageParagraph>
          <strong>Saratoga Springs Horse Show</strong>
        </PageParagraph>
        <PageParagraph>
          Attend some of Saratoga's most popular events - two weeks of horse
          shows.
        </PageParagraph>
        <PageParagraph>
          <strong>SPAC concerts</strong>
        </PageParagraph>
        <PageParagraph>
          These famed outdoor concerts begin in Mid-May and range in genre from
          classical to classic rock.
        </PageParagraph>
        <PageImage src={mainImage3} alt="Music" />
        <PageTitle id="summer">Summer</PageTitle>
        <PageSubTitle>June</PageSubTitle>

        <PageParagraph>
          <strong>Irish Festival</strong>
        </PageParagraph>
        <PageParagraph>
          Visit Saratoga County Fairgrounds for live music performances, beer,
          and food vendors.
        </PageParagraph>
        <PageParagraph>
          <strong>Saratoga Brewfest</strong>
        </PageParagraph>
        <PageParagraph>
          Taste 130 craft beers for one price at Saratoga County Fairgrounds.
        </PageParagraph>
        <PageParagraph>
          <strong>Saratoga Tour de Cure</strong>
        </PageParagraph>
        <PageParagraph>
          Bike for the American Diabetes Association.
        </PageParagraph>
        <PageParagraph>
          <strong>Flag Day Parade on Broadway</strong>
        </PageParagraph>
        <PageParagraph>
          The lively parade with a fly over begins at 12:00 Noon, on North
          Broadway and ends at Congress Park, Downtown Saratoga Springs.
        </PageParagraph>
        <PageParagraph>
          <strong>Saratoga Auto Museum Annual Fundraising Gala</strong>
        </PageParagraph>
        <PageParagraph>
          Enjoy a fabulous night of hors d'oeuvres and classic cars, with
          special featured exhibitions.
        </PageParagraph>
        <PageParagraph>
          <strong>The Annual Music and Mingling Gala</strong>
        </PageParagraph>
        <PageParagraph>
          Held at the Saratoga Polo Field to support the Adult and Senior Center
          of Saratoga and will include and open bar, live music, cigar tastings
          and silent auction.
        </PageParagraph>
        <PageParagraph>
          <strong>Freihofer's Jazz Festival</strong>
        </PageParagraph>

        <PageParagraph>
          Hear an amazing lineup of jazz musicians at SPAC.
        </PageParagraph>
        <PageParagraph>
          <strong>Saratoga ArtsFest</strong>
        </PageParagraph>
        <PageParagraph>
          A community-wide celebration of the arts throughout Saratoga Springs
        </PageParagraph>
        <PageParagraph>
          <strong>Round Lake Antiques Festival</strong>
        </PageParagraph>
        <PageParagraph>
          Hunt for hidden gems and antique treasures at Village of Round Lake, a
          16 minute drive from Union Gables.
        </PageParagraph>
        <PageParagraph>
          <strong>Saratoga Balloon & BBQ Festival</strong>
        </PageParagraph>
        <PageParagraph>
          Take to the skies and fire up the balloons. The festival is held at
          the Saratoga County Fairgrounds.
        </PageParagraph>
        <PageParagraph>
          <strong>The Skidmore College Saratoga Classic Horse Show</strong>
        </PageParagraph>
        <PageParagraph>
          Top equestrian competitors come togeter for jumoing competitions and
          derbys for three weeks in June. Yaddo Show Grounds is located four
          blocks away. Union Gables proudly sponsors this Event.
        </PageParagraph>
        <PageParagraph>
          <strong>8th Annual Beekman Street Art Fair</strong>
        </PageParagraph>
        <PageParagraph>
          The street is dedicated to artists for a day on Beekman Street! Enjoy
          a juried art and craft show, musical groups, open mic, and street
          performers. Produced by the Arts District on Beekman, Inc a 501(c)3
          nonprofit organization with a generous Community Arts Grant from
          Saratoga Arts.
        </PageParagraph>
        <PageParagraph>
          <strong>Mostly Modern Festival at Arthur Zankel Music Center</strong>
        </PageParagraph>
        <PageParagraph>
          Receive a 10% discount off your room rate at Union Gables for
          attendees to the festival.
        </PageParagraph>
        <PageSubTitle>July - August</PageSubTitle>

        <PageParagraph>
          <strong>Saratoga Bridges Annual White Party</strong>
        </PageParagraph>
        <PageParagraph>
          Attned this magnificent fundraiser held by Fasig Tipton.
        </PageParagraph>
        <PageParagraph>
          <strong>Secret Garden Tour</strong>
        </PageParagraph>
        <PageParagraph>
          Self-guided tours of private gardens available only the first Sunday
          in July or last in June.
        </PageParagraph>
        <PageParagraph>
          <strong>July 4th weekend: Firecracker4 Race.</strong>
        </PageParagraph>
        <PageParagraph>
          Enjoy spectacular fireworks on 4th of July, Independence Day with
          Saratoga's All-American Celebration in Congress Park. (two blocks from
          Union Gables)
        </PageParagraph>
        <PageParagraph>
          <strong>New York City Ballet</strong> at SPAC
        </PageParagraph>
        <PageParagraph>
          <strong>Philadelphia Orchestra</strong> at SPAC
        </PageParagraph>
        <PageParagraph>
          <strong>Opera Saratoga</strong>
        </PageParagraph>
        <PageParagraph>
          Day and evening shows at The Spa Little Theater located in the
          Saratoga Spa State Park.
        </PageParagraph>

        <PageParagraph>
          <strong>National Museum of Dance Gala</strong>
        </PageParagraph>
        <PageParagraph>
          <strong>Saratoga Racing Schedule</strong>
        </PageParagraph>
        <PageParagraph>
          First weekend; Opening Day and Hats off Weekend; Jim Dandy Stakes;
          Whitney Race; Alabama Race; Travers Stakes Day; Labor Day weekend:
          Closing Day and Final Stretch Festival Weekend.
        </PageParagraph>
        <PageParagraph>
          <strong>Saratoga Polo</strong>
        </PageParagraph>
        <PageParagraph>
          Held on Saratoga Polo Field on Bloomfield Road, just 2.7 miles from
          Union Gables every Friday and Sunday at 5:30pm. Since 1898 the city
          has hosted a polo club, the old Persian game of horses, mallets, and
          daring riders. The season usually lasts from July to Labor Day. For
          spectators in the clubhouse, there is a cocktail dress code with
          traditional billowy hats and business casual wear.
        </PageParagraph>
        <PageParagraph>
          <strong>Hemmings Sports and Exotic Car Show</strong>
        </PageParagraph>
        <PageParagraph>
          Discover classic automobiles from around the world at Auto Museum and
          Spa State Park.
        </PageParagraph>
        <PageParagraph>
          <strong>Horse sales at Fasig-Tipton</strong>
        </PageParagraph>
        <PageParagraph>
          The Saratoga Sale and New York Bred Yearlings Fasig-Tipton horse sales
          take place within a short walk (few blocks) from Union Gables Inn,
          Saratoga Springs, New York.
        </PageParagraph>
        <PageParagraph>
          <strong>Historic Congress Park Summer Stroll</strong>
        </PageParagraph>
        <PageParagraph>
          Hosted by The Saratoga Springs Preservation Foundation, join Dave
          Patterson and Charlie Kuenzel, owners of Saratoga Tours LLC, to
          explore the historic landscape architecture of Congress Park, the
          early springs, and other facets of Saratoga history. The tour,
          sponsored by NBT Bank and Saratoga Tours LLC, meets at the front steps
          of the Canfield Casino in Congress Park.
        </PageParagraph>
        <PageParagraph>
          Summer Strolls offered every Sunday through September 1st. All Sunday
          morning tours start at 10:30AM, $10 for non-members. Reservations are
          encouraged, but not necessary.
        </PageParagraph>
        <PageParagraph>
          This district is architecturally rich and home to some of the oldest
          private residences in Saratoga Springs. Franklin Square is a veritable
          showcase of American architectural history. Tour meets at the
          Northwest corner of Division Street and Broadway.
        </PageParagraph>

        <PageImage src={mainImage4} alt="Farmer's Market" />
        <PageTitle id="fall">Fall</PageTitle>
        <PageSubTitle>September</PageSubTitle>
        <PageParagraph>
          <strong>Saratoga Wine & Food Festival</strong>
        </PageParagraph>
        <PageParagraph>
          Enjoy the harvest season with gourmet tastings and fine wines, held at
          SPAC's beautiful grounds.
        </PageParagraph>
        <PageParagraph>
          <strong>Showcase of Homes</strong>
        </PageParagraph>
        <PageParagraph>
          Get inspired with tours of brand new Captial Region homes.
        </PageParagraph>
        <PageParagraph>
          <strong>Saratoga Rowing Association Tail of the Fish Regatta</strong>
        </PageParagraph>
        <PageParagraph>
          The opening regatta for the Fall season, held at Fish Creek on the
          last Saturday in September.
        </PageParagraph>
        <PageParagraph>
          <strong>Ghosts in the Yaddo Garden Tours</strong>
        </PageParagraph>
        <PageParagraph>
          Experience the spirit(s) of the gardens and feel the energy and
          creativity of the forces of the Earth! Share in the spiritual intrigue
          from Native Americans, Edgar Allan Poe, the Trask family and other
          contemporary visitors! Docent led tours begin at the Yaddo Garden
          parking lot and last for approximately one hour. This is a tour of the
          Yaddo Gardens and does not include the Yaddo Mansion. Tours begin at
          5:00 pm in Yaddo Gardens and cost $10 per person.
        </PageParagraph>
        <HorizontalRule />
        <PageSubTitle>October</PageSubTitle>
        <PageParagraph>
          <strong>Fasig Tipton Saratoga</strong>
        </PageParagraph>
        <PageParagraph>
          Since its inception in 2012, The Saratoga Fall Sale has been a top
          destination for broodmares and weanlings – especially those foaled in
          New York. The sale is the prime source for breeding stock in the
          Empire State. Most of the mares offered are considered resident New
          York mares, carrying foals that will be eligible to be registered as
          New York-bred. This sale is regularly frequented by leading
          connections both inside and outside of New York looking to take
          advantage of the lucrative state-bred program while shopping in their
          own backyard.
        </PageParagraph>
        <PageParagraph>
          Fasig-Tipton’s Saratoga sale of selected yearlings is one of the
          premier horse auctions in the world. It has roots that stretch back to
          1917 when Fasig-Tipton formed an alliance with some of the top
          Kentucky breeders to sell their yearlings during the race meet in
          upstate New York. The great Man o’ War sold as a yearling at the 1918
          Saratoga sale.
        </PageParagraph>
        <PageParagraph>
          The Saratoga sale has produced numerous household names for
          international horsemen, such as Raise a Native, Natalma, Hoist the
          Flag, Danzig, Miswaki, Conquistador Cielo, and two-time champion filly
          Open Mind.{" "}
        </PageParagraph>
        <PageParagraph>
          <strong>Saratoga Rowing Regatta</strong>
        </PageParagraph>
        <PageParagraph>
          Head of the Fish Regatta are held on the last weekend of October and
          are one of the largest regattas in the country. A beloved event in
          Saratoga Springs, the Head of the Fish attracts over 160 teams and
          1600 crews from across the northeast and features the countries most
          unique trophies. This 3,300 meter race is one of the premier races on
          the east coast. Regatta site is at Lee's Park (1464 Rt 9p Saratoga
          Springs, NY 12866)
        </PageParagraph>
        <PageParagraph>
          <strong>Harness Racing</strong>
        </PageParagraph>
        <PageParagraph>
          Experience the thrill of live racing during the Evening Races 4 days a
          week at Saratoga Raceway! Catch all the action on the rail, in the
          grandstand, or in our mezzanine. Tuesday, Wednesday, Friday & Saturday
        </PageParagraph>
        <HorizontalRule />
        <PageSubTitle>November</PageSubTitle>
        <PageParagraph>
          <strong>Veterans Day</strong> at the Saratoga Battlefield
        </PageParagraph>
        <PageParagraph>
          Join Saratoga National Historical Park in honoring all those who have
          served in the U.S. Armed Forces, including the Continental soldiers
          and militiamen who served here at Saratoga in 1777.
        </PageParagraph>
        <HorizontalRule />
        <PageSubTitle>December</PageSubTitle>
        <PageParagraph>
          <strong>Saratoga Tree Lighting Ceremony</strong>
        </PageParagraph>
        <PageParagraph>
          <strong>Annual Victorian Streetwalk</strong>
        </PageParagraph>
        <PageParagraph>
          <strong>December 31st New Year’s Eve</strong>
        </PageParagraph>
        <PageParagraph>
          <strong>Saratoga First Night Celebration</strong>
        </PageParagraph>
        <PageImage src={mainImage5} alt="Downtown" />
      </PageBodyContainer>
      <BottomPadding />
      <Footer />
    </FontContainer>
  );
};

const EventLink = styled.a`
  color: #aa4465;
  font-weight: 600;

  border-right: 1px solid #aa4465;
  padding-right: 10px;

  &:hover {
    color: #ca90a3;
  }
`;

const LastLink = styled.a`
  color: #aa4465;
  font-weight: 600;

  &:hover {
    color: #ca90a3;
  }
`;

const EventDivider = styled.div`
  height: 10px;
  width: 10px;
  color: black;
  // color: #aa4465;
  display: inline-block;
`;

const EventsLinksContainer = styled.div`
  text-align: center;
  padding-bottom: 20px;
`;

const EventsCenter = styled.div`
  display: inline-block;
  margin: 0 auto;
`;

const EventsLinks = () => {
  return (
    <EventsLinksContainer>
      <EventsCenter>
        <EventLink href="#ongoing">Ongoing</EventLink>
        <EventDivider />
        <EventLink href="#spring">Spring</EventLink>
        <EventDivider />
        <EventLink href="#summer">Summer</EventLink>
        <EventDivider />
        <EventLink href="#fall">Fall</EventLink>
        <EventDivider />
        <LastLink href="#winter">Winter</LastLink>
      </EventsCenter>
    </EventsLinksContainer>
  );
};

export default SaratogaPerformingArts;