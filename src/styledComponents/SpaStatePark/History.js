import * as React from "react";

import api from "../../api/spaStateParkAPI";

import SharedComponents from "./SharedComponents";

const History = () => {
  return (
    <SharedComponents.ListContainer>
      <SharedComponents.ListHeader>
        {api.historiesListTitle}
      </SharedComponents.ListHeader>
      <SharedComponents.ListSubHeader>
        {api.historiesListSubTitle}
      </SharedComponents.ListSubHeader>
      <SharedComponents.List>
        {api.histories.map((item, index) => {
          if (index === api.histories.length - 1) {
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

export default History;
