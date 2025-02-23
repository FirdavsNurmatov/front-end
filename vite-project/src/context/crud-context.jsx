import React from "react";
import { crudReducer } from "./crud-reducer";

const initialState = {
  usersList: [],
};

export const CrudContextProvider = React.createContext({});

export const CrudContext = ({ children }) => {
  const [data, dispatch] = React.useReducer(crudReducer, initialState);

  return (
    <CrudContextProvider.Provider value={{ data, dispatch }}>
      {children}
    </CrudContextProvider.Provider>
  );
};
