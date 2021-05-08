import * as React from "react";

import styles from '../../pages/Index.module.css';

const FontContainer = ({children}) => {
  return (
    <div className={styles.mainPage}>
        {children}
    </div>
  );
};

export default FontContainer;
