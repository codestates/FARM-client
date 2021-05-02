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
      {state.farmers.map((farmer, idx) => {
        return (
          <div className="Farmer_Duty" key={idx}>
            <div className="Farmer_Name">{farmer.name}</div>
            <div className="Seeds_In_Farmer">
              {farmer.seeds.map((seed, idx) => (
                <ReadFarmerSeed
                  key={idx}
                  seed={seed}
                  farmerId={farmer.user_id}
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
