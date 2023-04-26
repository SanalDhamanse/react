import React,{  useContext } from "react";
import { ThemeContext, ThemeProvider } from "../Contexts/ThemeContext";


function Layout({startingTheme, children}) {
  return (
    <ThemeProvider startingTheme={startingTheme}>
      <LayoutNoThemProvider>{children}</LayoutNoThemProvider>
    </ThemeProvider>
  );
}
function LayoutNoThemProvider({ children }) {
  const { theme } = useContext(ThemeContext);

  return (
   
      <div
        className={
          theme === "light" ? "container-fluid light" : "container-fluid dark"
        }
      >
        {children}
      </div>
  );
}

export default Layout;
