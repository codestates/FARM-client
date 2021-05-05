import React from "react";
import { memo, useState } from "react";
import EditCropsName from "./EditCropsName";
import edit from "../icons/edit.svg";
export default function ReadCropInfo({ cropInfo }) {
  const [isClicked, setIsClicked] = useState(false);
  const toggleIsClicked = () => {
    setIsClicked((state) => !state);
  };
  return (
    <div className="Crops_Base">
      <span className="Crops_Icon">{cropInfo.Kind}</span>
      {isClicked ? (
        <EditCropsName
          defaultName={cropInfo.name}
          handleClick={toggleIsClicked}
          crops_id={cropInfo.crops_id}
        />
      ) : (
        <span
          onClick={toggleIsClicked}
          className="Crops_Name Render_Crops_Name"
        >
          {cropInfo.name}
        </span>
      )}
      <img className="Crops_Edit_Icon" width={13} src={edit}></img>
      <span className="Crops_Cnt">{cropInfo.Seeds.length}</span>
    </div>
  );
}
