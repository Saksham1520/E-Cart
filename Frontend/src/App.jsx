import { Outlet } from "react-router-dom";
import "./App.css";
import Home from "./Components/Home";
import Navbar from "./Components/Navbar";
import { useEffect, useState } from "react";

function App() {
  const [darkMode, setMode] = useState(
    () => localStorage.getItem("darkMode") === "false"
  );

  const theme = () => {
    setMode(!darkMode);
  };
  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }

    localStorage.setItem("DarkMode", darkMode);
  }, [darkMode]);

  return (
    <>
      <Navbar theme={theme} darkMode={darkMode} />
      <Outlet />
    </>
  );
}

export default App;
