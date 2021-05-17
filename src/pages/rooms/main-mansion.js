import * as React from "react";
import { useStaticQuery, graphql } from "gatsby";

// Components
import Header from "../../styledComponents/Header/Header";
import Footer from "../../styledComponents/Footer/Footer";
import RoomTemplate from "../../styledComponents/Rooms/RoomTemplate";

// Shared Components
import MainPageTitle from "../../styledComponents/Shared/MainPageTitle";
import FontContainer from "../../styledComponents/Shared/FontContainer";
import BottomPadding from "../../styledComponents/Shared/BottomPadding";
import PageBodyContainer from "../../styledComponents/Shared/PageBodyContainer";
import NewPageImage from "../../styledComponents/Shared/NewPageImage";

// import api from "../api/roomsAPI";

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
  const kate = edges[0];

  return <RoomTemplate />;
};

// <FontContainer>
//   <Header />
{
  /* <PageBodyContainer>
        <MainPageTitle>{api.title}</MainPageTitle>
        {api.Section1}

        <NewPageImage data={kate} alt="Kate Room" extraBottomPadding={true} />

        {api.Section2}
      </PageBodyContainer>
      <BottomPadding />
      <Footer /> */
}
{
  /* </FontContainer> */
}

export default Rooms;
