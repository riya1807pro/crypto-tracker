import React, { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";

const ThemeToggle: React.FC = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <button onClick={toggleTheme} className="theme-toggle">
      {theme === "light" ? "Switch to Dark Mode" : "Switch to Light Mode"}
    </button>
  );
};

export default ThemeToggle;