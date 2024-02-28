import NavBar from "./NavBar";
import Footer from "./Footer";
import { Outlet } from "react-router-dom";

const Applayout = () => {
  return (
    <div>
      <NavBar />
      <div className="relative  overflow-hidden font-poppins">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};

export default Applayout;
