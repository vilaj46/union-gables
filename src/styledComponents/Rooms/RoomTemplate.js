import * as React from "react";
import { useStaticQuery, graphql } from "gatsby";

// Sub Components
import Footer from "../Footer/Footer";
import RoomSlides from "./RoomSlides";
import MainMansionRoomLinks from "./MainMansionRoomLinks";

// Shared Components
import FontContainer from "../../styledComponents/Shared/FontContainer";
import BottomPadding from "../../styledComponents/Shared/BottomPadding";
import MainPageTitle from "../../styledComponents/Shared/MainPageTitle";
import PageBodyContainer from "../../styledComponents/Shared/PageBodyContainer";

// Helper Function
import separateRooms from "./separateRooms";

const RoomTemplate = (props) => {
  const data = useStaticQuery(graphql`
    query {
      allFile(
        filter: { extension: { eq: "jpg" }, relativeDirectory: { eq: "rooms" } }
      ) {
        edges {
          node {
            base
            childImageSharp {
              fluid(quality: 100) {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      }
    }
  `);

  // Images
  const { edges } = data.allFile;
  const rooms = separateRooms(edges, props.type);
  let allRooms = [];
  let descriptions = [];
  let jane,
    annie,
    bill,
    edward,
    kate,
    cindy,
    bruce,
    linda,
    jody,
    tom,
    michael = [];
  if (props.type === "mainMansion") {
    jane = separateRooms(edges, "jane");
    annie = separateRooms(edges, "annie");
    bill = separateRooms(edges, "bill");
    edward = separateRooms(edges, "edward");
    kate = separateRooms(edges, "kate");
    cindy = separateRooms(edges, "cindy");
    bruce = separateRooms(edges, "bruce");
    linda = separateRooms(edges, "linda");
    jody = separateRooms(edges, "jody");
    tom = separateRooms(edges, "tom");
    michael = separateRooms(edges, "michael");
    allRooms = {
      jane: jane,
      annie: annie,
      bill: bill,
      edward: edward,
      kate: kate,
      cindy: cindy,
      bruce: bruce,
      linda: linda,
      jody: jody,
      tom: tom,
      michael: michael,
    };
    descriptions = [
      "Tastefully decorated with Tiffany lamps, classic marble top tables, and the original fireplace.",
      "The historic 'Guest Room' located in mansion's turret.",
      "Featuring a private porch and spacious sitting area with a gas fireplace.",
      "Edward Room Romantic and elegant with multiple Victorian windows.",
      "With views of the grounds and a charming sitting area.",
      "Cindy Room Two adjacent bedrooms with space for four guests.",
      "The original Victorian Billiard room decorated with the rustic style from the Adirondacks.",
      "An octagon-shaped room located in the turret of the mansion.",
      "An intimate room with bright bay windows overlooking the grounds.",
      "Linger on the romantic window seat with backyard views.",
      "Space for four guests and features a hand-painted floral mural and wrought iron gates.",
    ];
  }

  return (
    <FontContainer>
      {/* <Header /> */}
      <PageBodyContainer>
        <MainPageTitle>{props.title}</MainPageTitle>
        <RoomSlides rooms={rooms} alts={props.alts} type={props.type} />
        {props.paragraphs.map((paragraph) => {
          return paragraph;
        })}
        {props.type === "mainMansion" && (
          <MainMansionRoomLinks rooms={allRooms} descriptions={descriptions} />
        )}
      </PageBodyContainer>

      <BottomPadding />

      <Footer />
    </FontContainer>
  );
};

export default RoomTemplate;
