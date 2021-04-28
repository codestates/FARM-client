import { memo } from "react";

import React from "react";

export default function ReadFarmerSeed({ seed }) {
  console.log("ReadFarmerSeed seed:", seed);
  const { CropId, name } = seed;
  // console.log(`CropId`, CropId);

  return (
    <div className="seedInFarmer">
      <div>{CropId}</div>
      <div>{name}</div>
    </div>
  );
}
