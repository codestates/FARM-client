import React, { useState } from "react";
import { useSelector } from "react-redux";
export default function ReadStorage({ arrStorage }) {
  const state = useSelector((state) => state.farmReducer);
  return (
    <div className="Whole_Storage">
      {arrStorage.length === 0 ? (
        <div className="Storage_Empty">곳간이 비었습니다.</div>
      ) : (
        arrStorage.map((crop, idx) => {
          const arrTheCrop = state.crops.filter(
            (el) => el.Kind === crop.Kind.icon
          );
          return (
            <div key={idx} className="Storage_Part">
              <div className="Storage_Icon_And_Name">
                <div className="Storage_Kindicon">{crop.Kind.icon}</div>
                <div className="Storage_Cropname">{arrTheCrop[0].name}</div>
              </div>

              {crop.Seeds.map((seed, idx) => {
                return (
                  <div key={idx} className="Storage_Seed">
                    {seed.name}
                  </div>
                );
              })}
            </div>
          );
        })
      )}
    </div>
  );
}
