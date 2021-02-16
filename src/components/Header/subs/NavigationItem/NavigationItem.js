import * as React from "react";

// Sub Components 
import DropDownList from '../DropDownList/DropDownList';
import RegularItem from '../RegularItem/RegularItem';

const NavigationItem = ({ item }) => {
    if (item.links.length > 0) {
        return <DropDownList item={item} key={item.url} />
    } else {
        return <RegularItem item={item} key={item.url} />
    }
}

export default NavigationItem;