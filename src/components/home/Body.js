import React from "react";
import "../css/Body.css";
import Input from "./Input";
import Sidebar from "./Sidebar";

const Body = () => {
  return (
    <div className="body">
      <Sidebar />
      <Input />
    </div>
  );
};

export default Body;
