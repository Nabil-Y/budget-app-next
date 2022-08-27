import type { AppProps } from "next/app";
import { ThemeProvider, DefaultTheme } from "styled-components";
import GlobalStyle from "../components/Styled/GlobalStyles";

const theme: DefaultTheme = {
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

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
}
