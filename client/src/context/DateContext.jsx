import React from "react";

const defaultCtxValue = {
  date: "",
};

export const DateContext = React.createContext(defaultCtxValue);

export const DateContextProvider = ({ children }) => {
  const value = {
    date: "",
  };

  return <DateContext.Provider>{children}</DateContext.Provider>;
};
