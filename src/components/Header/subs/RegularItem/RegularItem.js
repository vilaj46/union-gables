import * as React from "react";
import { Link } from 'gatsby';

// styling
import styles from './RegularItem.module.css';
import headerStyles from '../../Header.module.css';

const RegularItem = ({ item }) => {
    if (item.text === 'Book Now') {
      return (
        <li key={item.url} className={styles.bookNow}>
          <Link to={item.url} className={styles.bookNowLink}>
            {item.text}
          </Link>
        </li>
      )
    } else {
      return ( 
        <li key={item.url} className={headerStyles.navItem}>
            <Link to={item.url} className={headerStyles.navLink}>
                {item.text}
            </Link>
        </li> 
      )
    }
}

export default RegularItem;