import { useLocalStorage } from "../hooks/useLocalStorage";
import { ThemeProvider } from "styled-components";
import { ThemeContext } from "../context/ThemeContext";
import { lightTheme } from "../styles/themes/lightTheme";
import { darkTheme } from "../styles/themes/darkTheme";
import { useEffect } from "react";

export function ThemeContextProvider({ children }) {
  const [themeName, setThemeName] = useLocalStorage("theme", "light");

  const toggleTheme = () => {
    setThemeName((prev) => (prev === "light" ? "dark" : "light"));
  };

  const theme = themeName === "light" ? lightTheme : darkTheme;

  useEffect(() => {
    document.body.className = themeName;
  }, [themeName]);

  return (
    <ThemeContext.Provider value={{ themeName, toggleTheme }}>
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    </ThemeContext.Provider>
  );
}
