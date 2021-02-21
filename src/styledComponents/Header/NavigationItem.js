import * as React from "react";

import DropDownList from "./DropDownList";
import RegularItem from "./RegularItem";

const NavigationItem = ({ item }) => {
  if (item.links.length > 0) {
    return <DropDownList item={item} key={item.url} />;
  } else {
    return <RegularItem item={item} key={item.url} />;
  }
};

export default NavigationItem;
