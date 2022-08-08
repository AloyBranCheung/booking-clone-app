import React, { useReducer } from "react";

const defaultCtxValue = {
  city: undefined,
  dates: [],
  options: {
    adult: undefined,
    children: undefined,
    rooms: undefined,
  },
};

export const SearchContext = React.createContext(defaultCtxValue);

const SearchReducer = (state, action) => {
  switch (action.type) {
    case "NEW_SEARCH":
      return action.payload;
    case "RESET_SEARCH":
      return defaultCtxValue;
    default:
      return state;
  }
};

export const SearchContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(SearchReducer, defaultCtxValue);

  const value = {
    city: state.city,
    dates: state.dates,
    options: state.options,
    dispatch,
  };

  return (
    <SearchContext.Provider value={value}>{children}</SearchContext.Provider>
  );
};
