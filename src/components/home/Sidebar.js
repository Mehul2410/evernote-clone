import React, { useState } from "react";
import EmojiObjectsOutlinedIcon from "@material-ui/icons/EmojiObjectsOutlined";
import NotificationsNoneRoundedIcon from "@material-ui/icons/NotificationsNoneRounded";
import CreateRoundedIcon from "@material-ui/icons/CreateRounded";
import ArchiveRoundedIcon from "@material-ui/icons/ArchiveRounded";
import DeleteOutlinedIcon from "@material-ui/icons/DeleteOutlined";
import "../css/Sidebar.css";
import { NavLink } from "react-router-dom";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <NavLink className="sidebar__options" exact to="/">
        <EmojiObjectsOutlinedIcon />
        <p className="sidebar__labels ">Notes</p>
      </NavLink>
      <NavLink className="sidebar__options" exact to="/reminders">
        <NotificationsNoneRoundedIcon />
        <p className="sidebar__labels">Reminders</p>
      </NavLink>
      <NavLink className="sidebar__options" exact to="/labels">
        <CreateRoundedIcon />
        <p className="sidebar__labels">Edit labels</p>
      </NavLink>
      <NavLink className="sidebar__options" to="/archive">
        <ArchiveRoundedIcon />
        <p className="sidebar__labels">Archive</p>
      </NavLink>
      <NavLink className="sidebar__options" to="/trash">
        <DeleteOutlinedIcon />
        <p className="sidebar__labels">Trash</p>
      </NavLink>
    </div>
  );
};

export default Sidebar;
