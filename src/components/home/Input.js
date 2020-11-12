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
        <form className="input" onSubmit={}>
          <div className="input__Title">
            <input type="text" placeholder="Title" />
            <Icon className="pin" icon={pinIcon} />
          </div>
          <div className="input__Note">
            <TextareaAutosize
              className="textareaClick"
              placeholder="Take a note..."
            />
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

            <h4> Close</h4>
          </div>
        </form>
      )}
    </>
  );
};

export default Input;
