import * as React from "react";
import { Link } from "gatsby";

import styles from "./Header.module.css";
import "../styles.css";

const items = [
  {
    text: "About Us",
    url: "/aboutus",
    description: "About Us.",
    links: [
      "Breakfast",
      "Amenities",
      "Pet Friendly",
      "Reservation Policies",
      "Reviews",
      "Location",
      "Contact",
    ],
  },
  {
    text: "Rooms",
    url: "/rooms",
    description: "Rooms.",
    links: [
      "Main Mansion",
      "Carriage House",
      "Garden Level",
      "Alexander House",
    ],
  },
  {
    text: "Promotions",
    url: "/promotions",
    description: "Promotions.",
    links: ["Gift Certificates"],
  },
  {
    text: "Saratoga Springs",
    url: "./saratoga-springs",
    description: "Saratoga Springs",
    links: [
      "Saratoga Events",
      "Dining Guide",
      "Saratoga Race Course",
      "Saratoga Performing Arts Center",
      "Skidmore College",
      "Saratoga Springs City Center",
      "Saratoga Spa State Park",
    ],
  },
  {
    text: "Gallery",
    url: "/gallery",
    description: "Gallery.",
    links: ["hey"],
  },
  {
    text: "Book Now",
    url: "./booknow",
    description: "Book Now",
    links: ["hey"],
  },
];
const Header = () => {
  return (
    <header className={styles.header}>
      <Link to="/" className={styles.LOGO}>
        <h1 className={styles.mainLink}>Union Gables Inn Saratoga Springs</h1>
      </Link>
      <nav className={styles.nav}>
        {items.map((item) => (
          // <li key={link.url} className={styles.navItem}>
          //   <Link to={link.url} className={styles.navLink}>
          //     {link.text}
          //   </Link>
          // </li>
          <DropDownList item={item} />
        ))}
      </nav>
    </header>
  );
};

const DropDownList = ({ item }) => {
  const { text, links } = item;
  return (
    <li className={`${styles.dropdown} ${styles.navItem}`}>
      <Link to="#" className={`${styles.dropbtn} ${styles.navLink}}`}>
        {text}
      </Link>
      <ul className={`${styles.dropdownContent}`}>
        {/* <p className={styles.dropLink}>Link 1</p> */}
        {links.map((link) => {
          return <p className={styles.dropLink}>{link}</p>;
        })}
      </ul>
    </li>
  );
};

export default Header;
