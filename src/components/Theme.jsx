import React, { useState, useContext, createContext } from "react";
import "../Theme.css";

const ThemeContext = createContext();

export const useThemeContext = () => {
  return useContext(ThemeContext);
};

const Theme = ({ children }) => {
  const [isDark, setIsDark] = useState(true);

  const changeColor = () => {
    setIsDark((prevColor) => !prevColor);
    console.log("Theme changed:", isDark);
  };

  return (
    // <body className={isDark ? "Dark" : "Light"}>
    //     <button onClick={changeColor}>Change</button>
    // </body>
    <ThemeContext.Provider value={{ isDark, changeColor }}>
      {children}
    </ThemeContext.Provider>
  );
};

export default Theme;
