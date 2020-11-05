import React from "react";
import "../css/Body.css";
import Input from "./Input";
import Sidebar from "./Sidebar";
import Card from "./Card";

const Body = () => {
  return (
    <div className="body">
      <div className="body__Left">
        <Sidebar />
      </div>
      <div className="body__Cards">
        <div className="body__Center">
          <Input />
        </div>
        <div className="body__CardBody">
          <div className="masonry-wrapper">
            <div className="masonry">
              <Card />
              <Card />
              <Card />
              <Card />
              <Card /> <Card />
              <Card />
              <Card />
            </div>
          </div>
        </div>
      </div>
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
