import { LayoutProps } from "../../types/types";
import Header from "./Header";
import Footer from "./Footer";

const Layout = (props: LayoutProps) => {
  const { children } = props;
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
};

export default Layout;
