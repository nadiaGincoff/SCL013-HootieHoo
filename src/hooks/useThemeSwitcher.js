import React, { useState, useEffect } from "react";
import style from "../hooks/useThemeSwitcher.css";

const useThemeSwitcher = () => {
  const [mode, setMode] = useState(() => localStorage.getItem("mode"));

  useEffect(() => {
    if (mode === "dark") {
      document.body.classList.add("dark-mode");
      localStorage.setItem("mode", "dark");
    } else {
      document.body.classList.remove("dark-mode");
      localStorage.setItem("mode", "light");
    }
  }, [mode]);

  return (
    <a
      className="cursor-pointer"
      onClick={() => setMode((mode) => (mode === "dark" ? "light" : "dark"))}
    >
      <div className="containerMode">
        <button className="buttonMode">
          <small>{mode === "dark" ? "Light" : "Dark"}</small>
        </button>
      </div>
    </a>
  );
};

export default useThemeSwitcher;
