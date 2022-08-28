import type { AppProps } from "next/app";
import { ThemeProvider, DefaultTheme } from "styled-components";
import GlobalStyle from "../components/Styled/GlobalStyles";
import useCustomTheme from "../hooks/useCustomTheme";

const lightTheme: DefaultTheme = {
  colors: {
    primary: "#047857",
    secondary: "#BEF263",
    black: "#171717",
    white: "#F8FAFC",
    grey: "#BBBBBB",
    greyLight: "#EBEBEB",
    greyDark: "#494949",
  },
};

const darkTheme: DefaultTheme = {
  colors: {
    primary: "#BEF263",
    secondary: "#047857",
    black: "#F8FAFC",
    white: "#171717",
    grey: "#BBBBBB",
    greyLight: "#EBEBEB",
    greyDark: "#494949",
  },
};

export default function App({ Component, pageProps }: AppProps) {
  const { isMounted, theme, toggleTheme } = useCustomTheme();
  const userTheme = theme === "dark" ? darkTheme : lightTheme;
  userTheme.toggle = toggleTheme;

  return (
    isMounted && (
      <ThemeProvider theme={userTheme}>
        <GlobalStyle />
        <button onClick={toggleTheme}> Change Theme </button>
        <Component {...pageProps} />
      </ThemeProvider>
    )
  );
}
