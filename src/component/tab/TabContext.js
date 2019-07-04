import React, { useState } from "react";
import { useQueryParam, StringParam } from "use-query-params";

export const TabContext = React.createContext();

export const TabProvider = ({ children }) => {
  const [defaultActivePane, setDefaultActivePane] = useQueryParam(
    "active",
    StringParam
  );
  const [activePane, setActivePane] = useState(
    defaultActivePane || "projectContent"
  );
  return (
    <TabContext.Provider
      value={{
        activePane,
        setActivePane: value => {
          setActivePane(value);
          setDefaultActivePane(value);
        }
      }}
    >
      {children}
    </TabContext.Provider>
  );
};

{
  /* <Provider>
  {" "}
  --> {(foo, bar)}
  <div>
    <p>useContext()</p>
  </div>
  <div>
    <Consumer>
      {({ foo, bar }) => {
        return <div />;
      }}
    </Consumer>
  </div>
</Provider>; */
}
