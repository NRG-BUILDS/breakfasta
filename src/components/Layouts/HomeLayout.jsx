import { Outlet } from "react-router-dom";
import Navbar from "../Navbar";

const HomeLayout = () => {
  return (
    <div className="relative">
      <Navbar />
      <Outlet />
    </div>
  );
};

export default HomeLayout;
