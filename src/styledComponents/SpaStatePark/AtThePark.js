import * as React from "react";

import SharedComponents from "./SharedComponents";

import api from "../../api/spaStateParkAPI";

const AtThePark = () => {
  return (
    <SharedComponents.ListContainer>
      <SharedComponents.ListHeader>
        {api.activitiesListTitle}
      </SharedComponents.ListHeader>
      <SharedComponents.ListSubHeader>
        {api.activitiesListSubTitle}
      </SharedComponents.ListSubHeader>
      <SharedComponents.List>
        {api.activities.map((item, index) => {
          if (index === api.activities.length - 1) {
            return (
              <SharedComponents.Item>
                <SharedComponents.LastItemText>
                  <SharedComponents.Arrow />
                  {item}
                </SharedComponents.LastItemText>
              </SharedComponents.Item>
            );
          } else {
            return (
              <SharedComponents.Item>
                <SharedComponents.ItemText>
                  <SharedComponents.Arrow />
                  {item}
                </SharedComponents.ItemText>
              </SharedComponents.Item>
            );
          }
        })}
      </SharedComponents.List>
    </SharedComponents.ListContainer>
  );
};

export default AtThePark;
