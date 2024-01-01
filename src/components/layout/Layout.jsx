import styles from "./Layout.module.scss";
import Header from "../header/Header";
import Footer from "../footer/Footer";
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <div style={styles.Layout}>
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
};

export default Layout;
