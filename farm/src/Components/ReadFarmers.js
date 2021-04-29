import { useState, memo } from "react";
import { useSelector, useDispatch } from "react-redux";
import ReadFarmerSeed from "./ReadFarmerSeed";
import InviteFarmers from "./InviteFarmers";

import React from "react";

function ReadFarmers() {
  const state = useSelector((state) => {
    return state.farmReducer;
  });

  return (
    <div className="Farmer_Fields">
      {state.farmers.map((farmer) => {
        return (
          <div className="Farmer_Duty">
            <div className="Farmer_Name">{farmer.userName}</div>
            <div className="Seeds_In_Farmer">
              {farmer.seeds.map((seed) => (
                <ReadFarmerSeed
                  key={seed.id}
                  seed={seed}
                  farmerId={farmer.id}
                />
              ))}
            </div>
          </div>
        );
      })}
      <InviteFarmers />
    </div>
  );
}

export default memo(ReadFarmers);
