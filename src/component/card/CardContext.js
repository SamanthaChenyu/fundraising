import React, { useState } from "react";

export const CardContext = React.createContext();

export const CardProvider = ({ children }) => {
  const [translateBanner, setTranslateBanner] = useState();
  return (
    <CardProvider.Provider
      value={{
        translateBanner,
        setTranslateBanner: value => {
          setTranslateBanner(value);
        }
      }}
    >
      {children}
    </CardProvider.Provider>
  );
};
