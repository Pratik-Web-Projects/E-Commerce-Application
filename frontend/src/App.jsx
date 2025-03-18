import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { FaMoon, FaSun } from "react-icons/fa";
import { LoginPage,RegisterPage } from "./routes/Routes.js";
import "./index.css";
import './App.css'
import { useDarkMode } from "./context/DarkModeContext.jsx";

function App() {
  const { darkMode, toggleDarkMode } = useDarkMode();

  return (

    <BrowserRouter>
      <div
        className={`min-h-screen ${
          darkMode ? "bg-gray-900 text-white" : "bg-gray-100 text-gray-900"
        }`}
        >
        <button
          onClick={toggleDarkMode}
          className="fixed top-4 right-4 p-2 bg-gray-800 text-white rounded-full shadow-lg"
        >
          {darkMode ? <FaSun size={24} /> : <FaMoon size={24} />}
        </button>
        <Routes>
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage/>}/>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App
