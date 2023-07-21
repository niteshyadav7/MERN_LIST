import { Outlet } from "react-router-dom";
import Footer from "./Footer";
import Header from "./Header";

const Body = () => {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
};

export default Body;
