import { Outlet } from "react-router-dom";
import Footer from "./Footer";
import Header from "./Header";

const Body = () => {
  return (
    <>
      <div>
        <Header />
      </div>
      <div>
        <Outlet />
      </div>
      <div className="h-full mt-96">
        <Footer />
      </div>
    </>
  );
};

export default Body;
