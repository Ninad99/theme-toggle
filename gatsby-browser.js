import "./src/styles/main.css";

import React from "react";
import ThemeContextProvider from "./src/context/themeContext";

export const wrapRootElement = ({ element }) => {
  return <ThemeContextProvider>{element}</ThemeContextProvider>;
};
