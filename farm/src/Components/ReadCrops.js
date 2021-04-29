import { useSelector } from "react-redux";
import { memo } from "react";

import ReadSeeds from "./ReadSeeds";
import AddSeeds from "./AddSeeds";

function ReadCrops() {
  const crops = useSelector((state) => {
    return state.farmReducer.crops;
  });
  return (
    <div>
      {crops.map((el, idx) => {
        return (
          <div className="Crops_Base" key={idx}>
            <span className="Corps_Icon">{el.icon}</span>
            <span className="Corps_Name">{el.name}</span>
            <div>
              <ReadSeeds id={el.id} />
              <AddSeeds id={el.id} />
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default memo(ReadCrops);
