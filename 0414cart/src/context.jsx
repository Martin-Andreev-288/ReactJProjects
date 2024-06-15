import { useContext, useReducer, useEffect, createContext } from "react";
// syzdavame context i proverqvame dali e syzdaden uspeshno. Za context-a ne napravih screenshot za predishniq proekt
const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const greeting = "hello";
  return (
    <AppContext.Provider value={{ greeting }}>{children}</AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};
