import { createContext, useContext, useEffect, useState } from "react";

const DarkModeContext = createContext();

const DarkModeProvider = ({children}) =>{
    const [darkMode, setDarkMode] = useState(true);

    const toggleDarkMode = () => {
        setDarkMode((prev) => !prev);
    };

    useEffect(() => {
        const savedDarkMode = localStorage.getItem("darkMode");
        if (savedDarkMode === "true") {
            setDarkMode(true);
        }
    }, []);

    useEffect(() => {
        if (darkMode) {
          document.body.classList.add("dark");
          document.body.classList.remove("light");
          localStorage.setItem("darkMode", "true");
        } else {
          document.body.classList.add("light");
          document.body.classList.remove("dark");
          localStorage.removeItem("darkMode");
        }
      }, [darkMode]);
      return (
        <DarkModeContext.Provider value={{darkMode, toggleDarkMode}}>
            {children}
        </DarkModeContext.Provider>
    );
};

export default DarkModeProvider;

export const useDarkMode = () =>  useContext(DarkModeContext);
