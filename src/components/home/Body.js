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

// ::placeholder {
//   color: #e2e2e3;
//   opacity: 1; /* Firefox */
// }

// :-ms-input-placeholder {
//   /* Internet Explorer 10-11 */
//   color: #e2e2e3;
// }

// ::-ms-input-placeholder {
//   /* Microsoft Edge */
//   color: #e2e2e3;
// }
