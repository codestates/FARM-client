import { useSelector } from "react-redux";
import { memo, useState } from "react";

import ReadSeeds from "./ReadSeeds";
import AddSeeds from "./AddSeeds";

import ReadCropInfo from "./ReadCropInfo";
function ReadCrops() {
  const crops = useSelector((state) => {
    return state.farmReducer.crops;
  });
  return (
    <div>
      {crops.map((el, idx) => {
        return (
          <div className="Farm_Field">
            <ReadCropInfo key={idx} cropInfo={el} />
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
