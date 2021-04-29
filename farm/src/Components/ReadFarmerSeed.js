import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { deleteSeed } from "../Redux/actions/actions";

export default function ReadFarmerSeed({ seed, farmerId }) {
  const { CropIcon, name, id } = seed;
  const dispatch = useDispatch();
  console.log(`farmerId`, farmerId);
  const harvestCrop = () => {
    dispatch(deleteSeed(farmerId, id));
    console.log(`수확된 id는 `, id);
  };
  return (
    <div className="Seed_In_Farmer">
      <div className="Crop_Icon_In_Farmer">{CropIcon}</div>
      <div>{name}</div>
      <button className="Complete_Btn" onClick={harvestCrop}>
        수확하기
      </button>
    </div>
  );
}
