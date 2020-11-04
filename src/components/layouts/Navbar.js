import React, { useState } from "react";
import MenuIcon from "@material-ui/icons/Menu";
import "../css/Navbar.css";
import { SearchRounded } from "@material-ui/icons";
import ReplayIcon from "@material-ui/icons/Replay";
import DragHandleIcon from "@material-ui/icons/DragHandle";
import SettingsIcon from "@material-ui/icons/Settings";
import AppsIcon from "@material-ui/icons/Apps";
import { Avatar } from "@material-ui/core";

const Navbar = () => {
  const [navbar, setNavbar] = useState(false);

  const navShadow = () => {
    if (window.scrollY >= 10) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  };

  window.addEventListener("scroll", navShadow);
  return (
    <div className={navbar ? "navbar active" : "navbar"}>
      <div className="navbar__Left">
        <MenuIcon />
        <img src="https://www.gstatic.com/images/branding/product/1x/keep_2020q4_48dp.png" />
        <h2>Keep</h2>
      </div>
      <div className="navbar__Center">
        <SearchRounded />
        <input type="text" placeholder="Search" />
      </div>
      <div className="navbar__Tabview">
        <SearchRounded />
      </div>
      <div className="navbar__Right">
        <ReplayIcon />
        <DragHandleIcon />
        <SettingsIcon />
      </div>
      <div className="navbar__user">
        <AppsIcon />
        <Avatar />
      </div>
    </div>
  );
};

export default Navbar;
