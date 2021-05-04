import { useState, memo } from "react";
import { useSelector, useDispatch } from "react-redux";
import ReadFarmerSeed from "./ReadFarmerSeed";
import InviteFarmers from "./InviteFarmers";
import { useHistory } from "react-router";
import React from "react";
import axios from "axios";
import { inviteFarmers } from "../Redux/actions/actions";

function ReadFarmers() {
  const url = "http://localhost:80";
  const authState = useSelector((state) => state.authReducer);
  const dispatch = useDispatch();
  const state = useSelector((state) => {
    return state.farmReducer;
  });
  const history = useHistory();

  return (
    <div className="Farmer_Fields">
      {state.farmers.map((farmer, idx) => {
        return (
          <div className="Farmer_Wrapper" key={idx}>
            <div className="Farmer_Content">
              <div className="Farmer_Header">{farmer.name}</div>
              <div className="Seeds_In_Farmer">
                {farmer.seeds.map((seed, idx) => (
                  <ReadFarmerSeed
                    key={idx}
                    seed={seed}
                    farmerId={farmer.user_id}
                  />
                ))}
              </div>
              {/* </div>{" "} */}
            </div>
          </div>
        );
      })}
      <InviteFarmers />
    </div>
  );
}

export default memo(ReadFarmers);
