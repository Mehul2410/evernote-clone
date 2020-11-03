import {
  ArchiveRounded,
  ArrowBackIosRounded,
  ArrowForwardIosRounded,
  FormatPaintRounded,
  NotificationImportantRounded,
  PeopleAltRounded,
  PhotoAlbumRounded,
  PinDropRounded,
} from "@material-ui/icons";
import React, { useState } from "react";
import "../css/Input.css";

const Input = () => {
  const [click, setClick] = useState(true);
  const clicked = () => {
    setClick(!click);
  };
  return (
    <>
      {click ? (
        <div className="input">
          <div className="input__Note">
            <input type="text" placeholder="Take a note..." onClick={clicked} />
          </div>
        </div>
      ) : (
        <div className="input">
          <div className="input__Title">
            <input type="text" placeholder="Title" />
            <PinDropRounded />
          </div>
          <div className="input__Note">
            <input type="text" placeholder="Take a note..." />
          </div>
          <div className="input__Options">
            <NotificationImportantRounded />
            <PeopleAltRounded />
            <FormatPaintRounded />
            <PhotoAlbumRounded />
            <ArchiveRounded />
            <ArrowBackIosRounded />
            <ArrowForwardIosRounded />
            <h4> Close</h4>
          </div>
        </div>
      )}
    </>
  );
};

export default Input;
