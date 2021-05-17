import * as React from "react";
import { useStaticQuery, graphql } from "gatsby";

// Sub Components
import Header from "../Header/Header";
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
  }

  return (
    <FontContainer>
      <Header />
      <PageBodyContainer>
        <MainPageTitle>{props.title}</MainPageTitle>
        <RoomSlides rooms={rooms} alts={props.alts} />
        {props.paragraphs.map((paragraph) => {
          return paragraph;
        })}
        {props.type === "mainMansion" && (
          <MainMansionRoomLinks rooms={allRooms} />
        )}
      </PageBodyContainer>

      <BottomPadding />

      <Footer />
    </FontContainer>
  );
};

export default RoomTemplate;
