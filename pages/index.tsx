import type { NextPage } from "next";
import Head from "next/head";
import Layout from "../components/Layout/Layout";
import ThemeSwitch from "../components/UI/ThemeSwitch";

const Home: NextPage = () => {
  return (
    <Layout>
      <h1>
        Welcome to <a href="https://nextjs.org">Next.js!</a>
      </h1>
      <p>
        Get started by editing <code>pages/index.tsx</code>
      </p>
      <ThemeSwitch />
    </Layout>
  );
};

export default Home;
