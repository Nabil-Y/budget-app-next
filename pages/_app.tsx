import type { AppProps } from "next/app";
import GlobalStyle from "../components/Styled/GlobalStyles";
import { ThemeProvider } from "next-themes";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <GlobalStyle />
      <ThemeProvider enableSystem>
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
}
