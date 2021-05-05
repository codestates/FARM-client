import { useState, memo } from "react";
import { useSelector, useDispatch } from "react-redux";
import ReadFarmerSeed from "./ReadFarmerSeed";
import InviteFarmers from "./InviteFarmers";
import React from "react";
import axios from "axios";
import { inviteFarmers } from "../Redux/actions/actions";
import { Draggable, Droppable } from "react-beautiful-dnd";
function ReadFarmers() {
  const url = "http://localhost:80";
  const authState = useSelector((state) => state.authReducer);
  const dispatch = useDispatch();
  const state = useSelector((state) => {
    return state.farmReducer;
  });
  console.log(`state`, state.farmers);
  return (
    <div className="Farmer_Fields">
      {state.farmers.map((farmer, idx) => {
        return (
          <div className="Farmer_Wrapper" key={idx}>
            <div className="Farmer_Content">
              <div className="Farmer_Header">{farmer.name}</div>
              <Droppable droppableId={farmer.user_id}>
                {(provided, snapshot) => {
                  return (
                    <div
                      ref={provided.innerRef}
                      style={{
                        backgroundColor: snapshot.isDraggingOver
                          ? "#e0e0e0"
                          : "#f6f8fa",
                      }}
                      className="Seeds_In_Farmer"
                    >
                      {state.farmers[idx].seeds.length === 0
                        ? "🌱 씨앗을 드래그해서 심어주세요"
                        : ""}
                      {farmer.seeds.map((seed, idx) => (
                        <ReadFarmerSeed
                          key={idx}
                          seed={seed}
                          farmerId={farmer.user_id}
                        />
                      ))}
                    </div>
                  );
                }}
              </Droppable>
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
