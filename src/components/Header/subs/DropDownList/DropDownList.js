import * as React from "react";
import { Link } from "gatsby";

import styles from './DropDownList.module.css';
import headerStyles from '../../Header.module.css';

const DropDownList = ({ item }) => {
    const { text, links } = item; 
    return (
      <li className={`${styles.dropdown} ${headerStyles.navItem}`}>
        <Link to="#" className={`${styles.dropbtn} ${headerStyles.navLink}}`}>
          {text}
        </Link>
        <ul className={`${styles.dropdownContent}`}>
          {links.map((link) => {
            return <Link to="#" key={link} className={styles.dropLink}>{link}</Link>;
          })}
        </ul>
      </li>
    );
  };

export default DropDownList;