import { Link } from "react-router-dom";
import { Cart, Login } from "./Icons/icon";
import { useState } from "react";
import { PillButton } from "./buttons/Button";

const Navbar = () => {
  const [avtiveLink, setActiveLink] = useState("Home");
  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Menu", path: "/menu" },
    { name: "About Us", path: "/about-us" },
  ];
  return (
    <nav className="sticky z-40 bg-white top-0 left-0 w-full border-b">
      <div className="mx-auto container w-full flex items-center justify-between">
        {/* Logo */}
        <p className="text-2xl">Breakasta</p>
        <div className="hidden lg:flex items-center gap-2 text-[22px]  *:p-3 *:py-6 *:mb-3 *:rounded-b-md">
          {navLinks.map((nv) => (
            <Link
              to={nv.path}
              onClick={() => setActiveLink(nv.name)}
              className={avtiveLink === nv.name ? "bg-primary text-white" : ""}
            >
              {nv.name}
            </Link>
          ))}
        </div>
        <div className="flex items-center gap-2">
          <button>
            <Cart />
          </button>
          <PillButton className={" text-white bg-primary"}>
            <Login />
            Sign Up
          </PillButton>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
