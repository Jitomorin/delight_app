import React, { useState } from "react";
import { ReactComponent as MenuIcon } from "../assets/Logos/align-justify.svg";
import { ReactComponent as ShoppingcartIcon } from "../assets/Logos/shopping-cart.svg";
import { ReactComponent as UserIcon } from "../assets/Logos/user.svg";
import { ReactComponent as SearchIcon } from "../assets/Logos/search.svg";
import "./style.css";
import Sidebar from "./Sidebar";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => {
    console.log("open");
    setOpen(true);
  };
  const handleClose = () => {
    console.log("close");
    setOpen(false);
  };
  return (
    <nav className="navbar">
      <Sidebar open={open} handleClose={handleClose} />
      <div className="navbar__hamburger">
        {/* <img src={MenuIcon} alt="hamburger" /> */}
        <button onClick={handleOpen}>
          <MenuIcon />
        </button>
      </div>

      <div className="navbar__action">
        <button>
          <SearchIcon />
        </button>
        <button>
          <UserIcon />
        </button>
        <button>
          <ShoppingcartIcon />
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
