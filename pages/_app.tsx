import type { AppProps } from "next/app";
import GlobalStyle from "../components/Styled/GlobalStyles";
import { Provider } from "react-redux";
import { store } from "../store/store";
import { ThemeProvider } from "next-themes";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <GlobalStyle />
      <ThemeProvider enableSystem>
        <Component {...pageProps} />
      </ThemeProvider>
    </Provider>
  );
}
