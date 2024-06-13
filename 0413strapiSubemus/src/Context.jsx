import { createContext, useState, useContext } from "react";

const AppContext = createContext();
// zapochvame da dobavqme logika.
// Kogato hovernem v/u stranicite (t.e. v/u Product/Solutions/Resources)
// tr da izlizat razni neshta. Zasega izlizat samo id-tata, kato
// poglednem v components. Za celta izpolzvame onMouseEnter
export const AppProvider = ({ children }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [pageId, setPageId] = useState(null);
  const openSidebar = () => {
    setIsSidebarOpen(true);
  };
  const closeSidebar = () => {
    setIsSidebarOpen(false);
  };
  return (
    <AppContext.Provider
      value={{ isSidebarOpen, openSidebar, closeSidebar, pageId, setPageId }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};
