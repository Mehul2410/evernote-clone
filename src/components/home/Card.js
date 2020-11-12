import React from "react";
import "../css/Card.css";
//
//
//
import {
  ArchiveRounded,
  ArrowBackIosRounded,
  ArrowForwardIosRounded,
  BrushOutlined,
  CheckBoxOutlineBlankOutlined,
  NotificationImportantRounded,
  PhotoAlbumRounded,
} from "@material-ui/icons";
import "../css/Input.css";
import TextareaAutosize from "react-autosize-textarea";
import PaletteIcon from "@material-ui/icons/Palette";
import GroupAddIcon from "@material-ui/icons/GroupAdd";
import { Icon, InlineIcon } from "@iconify/react";
import pinIcon from "@iconify/icons-mdi/pin";
import UndoIcon from "@material-ui/icons/Undo";
import RedoIcon from "@material-ui/icons/Redo";

const Card = ({ value }) => {
  return (
    <div className="card">
      <div className="input__Title">
        <input type="text" placeholder="Title" />
        <Icon className="pin" icon={pinIcon} />
      </div>
      <div className="input__Note">
        <TextareaAutosize
          className="textareaClick"
          placeholder="Take a note..."
          value={value}
        />
      </div>
      <div className="card__Options">
        <div className="card__OptionsV">
          <NotificationImportantRounded />
          <GroupAddIcon />
          <PaletteIcon />
          <PhotoAlbumRounded />
          <ArchiveRounded />
        </div>
      </div>
    </div>
  );
};

export default Card;
