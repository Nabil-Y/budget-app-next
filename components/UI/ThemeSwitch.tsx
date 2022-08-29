import { useTheme } from "next-themes";
import { useState, useEffect } from "react";

const ThemeSwitch = () => {
  const { systemTheme, theme, setTheme } = useTheme();
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) return null;

  const currentTheme = theme === "system" ? systemTheme : theme;
  const oppositeTheme = currentTheme === "dark" ? "light" : "dark";

  return <button onClick={() => setTheme(oppositeTheme)}>Change theme</button>;
};

export default ThemeSwitch;
