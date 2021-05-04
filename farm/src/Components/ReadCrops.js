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
          <div className="Farm_Field">
            <div className="Crops_Base" key={idx}>
              <span className="Crops_Icon">{el.Kind}</span>
              <span className="Crops_Name">{el.name}</span>
              <span className="Crops_Cnt">{el.Seeds.length}</span>
            </div>
            <div className="Seeds_Base">
              <ReadSeeds id={el.crops_id} />
              <AddSeeds id={el.crops_id} />
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default memo(ReadCrops);
