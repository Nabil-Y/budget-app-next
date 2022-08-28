import { useEffect, useState } from "react";

const useCustomTheme = () => {
  const [isMounted, setIsMounted] = useState(false);
  const [theme, setTheme] = useState("light");

  const setAndSaveTheme = (theme: string) => {
    setTheme(theme);
    localStorage.setItem("theme", theme);
  };

  const toggleTheme = () => {
    const theme = getTheme();
    if (theme === "dark") return setAndSaveTheme("light");
    return setAndSaveTheme("dark");
  };

  const getTheme = (): string | null => {
    return localStorage.getItem("theme");
  };

  useEffect(() => {
    const theme = getTheme();
    if (
      theme === "dark" ||
      (!theme && window.matchMedia("(prefers-color-scheme: dark)").matches)
    ) {
      setAndSaveTheme("dark");
    } else {
      setAndSaveTheme("light");
    }
    setIsMounted(true);
  }, []);

  return { isMounted, theme, toggleTheme };
};

export default useCustomTheme;
