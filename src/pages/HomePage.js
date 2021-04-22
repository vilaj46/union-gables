import * as React from "react";

// styles
// import styles from "./HomePage.module.css";

import PageTitle from "../styledComponents/Shared/PageTitle";

const HomePage = () => {
  return (
    <div>
      <title>Home Page</title>
      <div>
        {/* <h2 className={styles.h2}>Award-Winning Bed & Breakfast in Saratoga <br/>Springs, New York</h2> */}
        <PageTitle text="Award-Winning Bed & Breakfast in Saratoga <br/>Springs, New York" />
        {/* <p className={styles.description}>
          Experience old world hospitality at its finest at Union Gables Inn,
          our luxurious bed and breakfast in Saratoga Springs, New York. Built
          circa 1901, this Queen Anne Victorian Mansion is located in the heart
          of Saratoga’s Historic District known as the Magic Rectangle, one and
          a half blocks from the oldest racetrack in the country. Discover the
          romantic charm of our hotel, ideally nestled less than a ten-minute
          walk from <span className={styles.span}>countless restaurants</span>,
          and <span className={styles.span}>downtown Saratoga gems</span>.
        </p>
        <p className={`${styles.description} ${styles.centerAlign}`}>
          Union Gables Inn | Saratoga Springs - 1
        </p>
        <h3 className={styles.h3}>Envision Your Stay</h3>
        <p className={styles.description}>
          {" "}
          Step inside our historic mansion of 118 years, featuring a classic
          wraparound porch, airy living areas with period antiques, and over one
          acre of Perennial gardens, fountains, and a seasonal Romanesque-style
          pool. Included in your stay is a freshly-prepared breakfast from our
          Cordon Bleu trained chef, homemade baked goods served in the
          afternoon, and exemplary concierge service.
        </p>
        <p className={styles.description}>
          Stay in one of our{" "}
          <span className={styles.span}>oversized rooms and suites</span>, all
          with private bathrooms and each uniquely decorated. Each room at our
          B&B in Saratoga Springs, NY features a romantic natural gas fireplace,
          complimentary wireless Intenet, and a variety of period antiques.
          Designated <span className={styles.span}>pet friendly</span>, extended
          stay, and rooms with private patios are available.
        </p>
        <p className={`${styles.description} ${styles.centerAlign}`}>
          Union Gables Inn | Saratoga Springs - 2
        </p>
        <h3 className={styles.h3}>Discover Saratoga Springs</h3>
        <p className={styles.description}>
          Take in all that Saratoga Springs has to offer without the hassle of
          parking downtown. Rich in history with its array of natural springs,
          classic architecture, beautiful parks, and boutique shopping, in
          addition to the excitement of thoroughbred horse races, we invite you
          to visit:
        </p> */}
      </div>
      {/* <DiscoverSaratogaSprings />
      <hr />
      <p className={styles.reserveMessage}>
        Reserve your stay today at our historic and romantic bed and breakfast
        in Saratoga Springs, New York!
      </p>
      <GoodToKnow />
      <Offers />
      <ReasonsToStay />
      <WhereWeAre /> */}
    </div>
  );
};

// const DiscoverSaratogaSprings = () => {
//   return (
//     <div className={styles.discoverContainer}>
//       <ul>
//         <li className={styles.discoverItem}>Congress Park</li>
//         <li className={styles.discoverItem}>Saratoga Race Course</li>
//         <li className={styles.discoverItem}>Saratoga Performing Arts Center</li>
//       </ul>
//       <ul>
//         <li className={styles.discoverItem}>Saratoga Springs City Center</li>
//         <li className={styles.discoverItem}>Saratoga Spa State Park</li>
//         <li className={styles.discoverItem}>
//           Annual festivals and events in Downtown Saratoga Springs
//         </li>
//       </ul>
//     </div>
//   );
// };

// const GoodToKnow = () => {
//   return (
//     <div className={styles.goodContainer}>
//       <h3 className={styles.h3}>Good to Know</h3>
//       <p className={`${styles.description} ${styles.centerAlign}`}>
//         Built in 1901 and nicknamed the ‘Sunnyside House’
//       </p>
//       <p className={`${styles.description} ${styles.centerAlign}`}>
//         Best of Saratoga Region for Six Years in a Row
//       </p>
//       <p className={`${styles.description} ${styles.centerAlign}`}>
//         Tripadvisor Award of Excellence and Green Leader Hotel Awards
//       </p>
//       <p className={`${styles.description} ${styles.centerAlign}`}>
//         Glorious Gardens Award and Soroptimist Best Garden Award
//       </p>
//     </div>
//   );
// };

// const Offers = () => {
//   return (
//     <div>
//       <p>Unlock Exclusive Offers</p>
//       <p>Fresh Gourmet Breakfasts</p>
//       <p>Private Events</p>
//     </div>
//   );
// };

// const ReasonsToStay = () => {
//   return (
//     <div className={styles.reasonsContainer}>
//       <p>3 Reasons to stay with us</p>
//       <p>
//         Easily walk to over 125 restaurants, music venues, bars, museums and
//         downtown shopping.
//       </p>
//       {/** Add the three numbered buttons */}
//     </div>
//   );
// };

// const WhereWeAre = () => {
//   return (
//     <div>
//       <h3>Where we are</h3>
//       {/** Add spinner + google api or something? */}
//     </div>
//   );
// };

export default HomePage;
