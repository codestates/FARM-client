import { memo } from "react";
import { useSelector, useDispatch } from "react-redux";
import ReadFarmerSeed from "./ReadFarmerSeed";

import React from "react";

function ReadFarmers() {
  const state = useSelector((state) => {
    return state.farmReducer;
  });

  return (
    <div className="farmerFields">
      {state.farmers.map((farmer) => {
        return (
          <div className="farmerDuty">
            <div className="eachFarmer">{farmer.userName}</div>
            <div>
              {farmer.seeds.map((seed) => (
                <ReadFarmerSeed key={seed.id} seed={seed} />
              ))}
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default memo(ReadFarmers);
