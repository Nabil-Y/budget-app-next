import Head from "next/head";
import { LayoutProps } from "../../types/types";
import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";

const Layout = (props: LayoutProps) => {
  const { children, ...customMeta } = props;

  const meta = {
    title: "BudJet",
    description:
      "Save your money with BudJet, your money management companion app",
    image: "/static/Logo.png",
    type: "website",
    ...customMeta,
  };
  return (
    <>
      <Head>
        <title>{meta.title}</title>
        <meta name="robots" content="follow, index" />
        <meta name="description" content={meta.description} />
        <meta property="type" content={meta.type} />

        <meta property="og:site_name" content="BudJet" />
        <meta property="og:title" content={meta.title} />
        <meta property="og:image" content={meta.image} />
        <meta property="og:description" content={meta.description} />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@nabil_io" />
        <meta name="twitter:title" content={meta.title} />
        <meta name="twitter:description" content={meta.description} />
        <meta name="twitter:image" content={meta.image} />
      </Head>

      <Header />
      <Main>{children}</Main>
      <Footer />
    </>
  );
};

export default Layout;
