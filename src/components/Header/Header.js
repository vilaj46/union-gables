import * as React from "react";
import { Link } from "gatsby";

import styles from "./Header.module.css";

// Sub Components
import NavigationItem from './subs/NavigationItem/NavigationItem';

// Items API
import headerItems from './headerItems.js';

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.headerWidth}>
        <Link to="/" className={styles.LOGO}>
          <h1 className={styles.mainLink}>Union Gables Inn Saratoga Springs</h1>
        </Link>
        <nav className={styles.nav}>
          {headerItems.map((item) => (
            <NavigationItem item={item} key={item.url} />
          ))}
        </nav>
      </div>
    </header>
  );
};

export default Header;
