import { createContext, useContext, useState, useEffect } from "react";

const AppContext = createContext();
/*
kak da napravim taka, che da zadadem tymna tema za default, ako user-a si e izbral
neq - TOZI PYT S JAVASCRIPT!!!
So every time you'll toggle the theme you'll change the value over here
 (i ni posochi dependency array-a v useEffecta s isDarkTheme)*/
const getInitialDarkMode = () => {
  const prefersDarkMode = window.matchMedia(
    "(prefers-color-scheme:dark)"
  ).matches;
  console.log(prefersDarkMode);
  return prefersDarkMode;
};

export const AppProvider = ({ children }) => {
  const [isDarkTheme, setIsDarkTheme] = useState(getInitialDarkMode());
  const [searchTerm, setSearchTerm] = useState("dog");
  const toggleDarkTheme = () => {
    const newDarkTheme = !isDarkTheme;
    setIsDarkTheme(newDarkTheme);
    // za da sykratim tozi kod - mozhem da mahnem tezi dolni 2 reda i da
    // dobavim "isDarkTheme" v dependency array-a na useEffect dolu
    // const body = document.querySelector("body");
    // body.classList.toggle("dark-theme", newDarkTheme);
  };

  useEffect(() => {
    document.body.classList.toggle("dark-theme", isDarkTheme);
  }, [isDarkTheme]);

  return (
    <AppContext.Provider
      value={{ isDarkTheme, toggleDarkTheme, searchTerm, setSearchTerm }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => useContext(AppContext);
