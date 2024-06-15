import { useContext, useReducer, useEffect, createContext } from "react";
import reducer from "./reducer";
// syzdavame reducer. Iznacqme reducer f-qta v otdelen fayl.
const AppContext = createContext();

const initialState = {
  loading: false,
  cart: [],
};

export const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  // i taka mozhem da dostypvame state-a ot cqloto prilozhenie
  return (
    <AppContext.Provider value={{ ...state }}>{children}</AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};
