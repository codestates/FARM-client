import React, { useState } from "react";
import { useSelector } from "react-redux";
export default function ReadStorage() {
  const state = useSelector((state) => state.farmReducer);
  return (
    <div className="Whole_Storage">
      {state.storage.map((crop) => {
        return (
          <div className="Storage_Part">
            <div>{crop.CropIcon}</div>
            {crop.seeds.map((seed) => {
              return <div className="Storage_Seed">{seed.name}</div>;
            })}
          </div>
        );
      })}
    </div>
  );
}
