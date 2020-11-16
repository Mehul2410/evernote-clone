import React, { useState } from "react";
import "../css/Card.css";
//
//
//
import {
  ArchiveRounded,
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
  const [click2, setClick2] = useState(true);
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
  const clicked2 = () => {
    setClick2(!click2);
  };
  return (
    <>
      {click2 ? (
        <div className="card">
          <div className="input__Title" onClick={clicked2}>
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
      ) : (
        <form className="input1" onSubmit={onSubmit}>
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

export default Card;
