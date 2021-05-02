import React, { useState } from "react";
import { useSelector } from "react-redux";
export default function ReadStorage() {
  const state = useSelector((state) => state.farmReducer);
  return (
    <div className="Whole_Storage">
      {state.storage.map((crop, idx) => {
        return (
          <div key={idx} className="Storage_Part">
            <div>{crop.Kind.icon}</div>
            {crop.seeds.map((seed, idx) => {
              return (
                <div key={idx} className="Storage_Seed">
                  {seed.name}
                </div>
              );
            })}
          </div>
        );
      })}
    </div>
  );
}
