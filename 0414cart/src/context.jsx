import { useContext, useReducer, useEffect, createContext } from "react";
import reducer from "./reducer";
// syzdavame otdelen fayl s razlichnite actions i gi importvame v actions i reducer.
import {
  CLEAR_CART,
  REMOVE,
  INCREASE,
  DECREASE,
  LOADING,
  DISPLAY_ITEMS,
} from "./actions";

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
