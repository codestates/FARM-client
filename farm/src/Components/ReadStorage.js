import React, { useState } from "react";
import { useSelector } from "react-redux";
export default function ReadStorage({ arrStorage }) {
  const state = useSelector((state) => state.farmReducer);
  console.log(`arrStorage`, arrStorage);
  console.log(
    `arrStorage.map(el=>el)`,
    arrStorage.map((el) => el)
  );
  return (
    <div className="Whole_Storage">
      {arrStorage.length === 0 ? (
        <div>곳간이 비었습니다.</div>
      ) : (
        arrStorage.map((crop, idx) => {
          console.log(`crop`, crop);
          return (
            <div key={idx} className="Storage_Part">
              <div>{crop.Kind.icon}</div>
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
