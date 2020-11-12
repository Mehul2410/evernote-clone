import {
  ArchiveRounded,
  BrushOutlined,
  CheckBoxOutlineBlankOutlined,
  NotificationImportantRounded,
  PhotoAlbumRounded,
} from "@material-ui/icons";
import React, { useState } from "react";
import "../css/Input.css";
import TextareaAutosize from "react-autosize-textarea";
import PaletteIcon from "@material-ui/icons/Palette";
import GroupAddIcon from "@material-ui/icons/GroupAdd";
import { Icon, InlineIcon } from "@iconify/react";
import pinIcon from "@iconify/icons-mdi/pin";
import UndoIcon from "@material-ui/icons/Undo";
import RedoIcon from "@material-ui/icons/Redo";

const Input = () => {
  const [click, setClick] = useState(true);
  const [query, setQuery] = useState([]);
  const [note, setNote] = useState("");
  // imp //////////////////////////////////////////////////////////////////////////////
  const onSubmit = (e) => {
    e.preventDefault();
    console.log(query);
    setNote(query);
    console.log("submit", note);
  };
  const onChange = (e) => {
    setQuery(e.target.value);
  };
  const clicked = () => {
    setClick(!click);
  };
  return (
    <>
      {click ? (
        <div className="inputHome">
          <div className="input__Note">
            <TextareaAutosize
              className="textareaHome"
              placeholder="Take a note..."
              onClick={clicked}
            />
            <CheckBoxOutlineBlankOutlined />
            <BrushOutlined />
            <PhotoAlbumRounded />
          </div>
        </div>
      ) : (
        <form className="input" onSubmit={onSubmit}>
          <div className="input__Title">
            <input type="text" placeholder="Title" />
            <Icon className="pin" icon={pinIcon} />
          </div>
          <div className="input__Note">
            <TextareaAutosize
              className="textareaClick"
              placeholder="Take a note..."
              onChange={onChange}
              value={query}
            />
            {/* onsubmit */}
          </div>
          <div className="input__Options">
            <div>
              <NotificationImportantRounded />
              <GroupAddIcon />
              <PaletteIcon />
              <PhotoAlbumRounded />
              <ArchiveRounded />
              <UndoIcon />
              <RedoIcon />
            </div>

            <button type="submit">Close</button>
          </div>
        </form>
      )}
    </>
  );
};

export default Input;
