import * as React from "react";
import { useStaticQuery, graphql } from "gatsby";

// Components
import Header from "../styledComponents/Header/Header";
import Footer from "../styledComponents/Footer/Footer";
import RoomLinks from "../styledComponents/Rooms/RoomLinks";

// Shared Components
import MainPageTitle from "../styledComponents/Shared/MainPageTitle";
import FontContainer from "../styledComponents/Shared/FontContainer";
import BottomPadding from "../styledComponents/Shared/BottomPadding";
import PageBodyContainer from "../styledComponents/Shared/PageBodyContainer";

import api from "../api/roomsAPI";

// Utilities
import organizeEdges from "../utils/organizeEdges";

const Rooms = () => {
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
  const images = organizeEdges(edges);

  const rooms = {
    janeRoom: {
      room: "Jane Room",
      description:
        "Tastefully decorated with Tiffany lamps, classic marble top tables, and the original fireplace.",
      img: images.janeRoom2,
      href: "jane",
    },
    annieRoom: {
      room: "Annie Room",
      description:
        "Tastefully decorated with Tiffany lamps, classic marble top tables, and the original fireplace.",
      img: images.annieRoom1,
      href: "annie",
    },
    billRoom: {
      room: "Bill Room",
      description:
        "Featuring a private porch and spacious sitting area with a gas fireplace.",
      img: images.billRoom1,
      href: "bill",
    },
    edwardRoom: {
      room: "Edward Room",
      description: "Romantic and elegant with multiple Victorian windows.",
      img: images.edwardRoom2,
      href: "edward",
    },
    kateRoom: {
      room: "Kate Room",
      description: "With views of the grounds and a charming sitting area.",
      img: images.kateRoom2,
      href: "kate",
    },
    cindyRoom: {
      room: "Cindy Room",
      description: "Two adjacent bedrooms with space for four guests.",
      img: images.cindyRoom1,
      href: "cindy",
    },
    bruceRoom: {
      room: "Bruce Room",
      description:
        "The original Victorian Billiard room decorated with the rustic style from the Adirondacks.",
      img: images.bruceRoom2,
      href: "bruce",
    },
    lindaRoom: {
      room: "Linda Room",
      description:
        "An octagon-shaped room located in the turret of the mansion.",
      img: images.lindaRoom1,
      href: "linda",
    },
    jodyRoom: {
      room: "Jody Room",
      description:
        "An intimate room with bright bay windows overlooking the grounds.",
      img: images.jodyRoom1,
      href: "jody",
    },
    michaelRoom: {
      room: "Michael Room",
      description:
        "Space for four guests and features a hand-painted floral mural and wrought iron gates.",
      img: images.michaelRoom3,
      href: "michael",
    },
    tomRoom: {
      room: "Tom Room",
      description: "Linger on the romantic window seat with backyard views.",
      img: images.tomRoom2,
      href: "tom",
    },
    carriageHouse: {
      room: "Carriage House",
      description:
        "A private residence with space for four plus a full kitchen and living room.",
      img: images.carriageHouse5,
      href: "carriage-house",
    },
    henrySuite: {
      room: "Henry Suite",
      description:
        "A private garden suite with a full kitchen, soaking tub, and whimsical antiques.",
      img: images.henrySuite5,
      href: "henry-suite",
    },
    pondCottage: {
      room: "Pond Cottage",
      description:
        "Retreat to our Pond Cottage with a private patio and gas fireplace.",
      img: images.pondCottage1,
      href: "pond-cottage",
    },
    emeraldRoom: {
      room: "Emerald Room",
      description:
        "Gorgeous cathedral ceilings and skylights, plus a private deck.",
      img: images.emeraldRoom1,
      href: "emerald",
    },
    libraryRoom: {
      room: "Library Room",
      description: "Boasting a jetted soaking tub and private garden patio.",
      img: images.libraryRoom1,
      href: "library",
    },
    saratogaRoom: {
      room: "Saratoga Room",
      description:
        "A Victorian classic with a wood-burning stove and soaking tub.",
      img: images.saratogaRoom1,
      href: "saratoga",
    },
    victoriaRoom: {
      room: "Victoria Room",
      description: "Located in the gardens and featuring a soaking tub.",
      img: images.victoriaRoom1,
      href: "victoria",
    },
    wilsonRoom: {
      room: "Wilson Room",
      description: "With atmospheric accents and a natural gas fireplace.",
      img: images.wilsonRoom1,
      href: "wilson",
    },
    congress: {
      room: "Congress Spring Suite 5",
      description: "Oversized suites located in the Alexander House.",
      img: images.congressSpringSuite1,
      href: "congress-spring-suite",
    },
    deerPark: {
      room: "Deer Park Spring Room 5A",
      description:
        "A stylish king room located on the second floor of the Alexander House.",
      img: images.deerParkSpringRoom1,
      href: "deer-park-spring",
    },
    stateSeal: {
      room: "State Seal Spring Suite",
      description: "Pet-friendly and spacious one-bedroom suite.",
      img: images.stateSealSpringSuite1,
      href: "#",
    },
    charlieSpring: {
      room: "Charlie Spring Room",
      description: "A pet-friendly king room located on the first floor.",
      img: images.charlieSpringRoom1,
      href: "charlie-spring",
    },
    geyserSpring: {
      room: `Geyser Spring Room`,
      description:
        "A first floor room with a king bed and walk-in glass shower.",
      img: images.geyserSpringRoom1,
      href: "geyser-spring",
    },
  };

  return (
    <FontContainer>
      <Header
        image={images.kateRoom1.data.node.childImageSharp.fluid.src}
        alt={images.kateRoom1.alt}
      />
      <PageBodyContainer>
        <MainPageTitle>{api.title}</MainPageTitle>

        {api.Section1}

        <RoomLinks rooms={rooms} />
      </PageBodyContainer>
      <BottomPadding />
      <Footer />
    </FontContainer>
  );
};

export default Rooms;
