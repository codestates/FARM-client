import { useSelector } from "react-redux";
import { memo } from "react";

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
            {/* ReadSeeds 컴포넌트가 호출되어야 합니다. */}
            {/* AddSeeds 컴포넌트가 호출되어야 합니다. */}
          </div>
        );
      })}
    </div>
  );
}

export default memo(ReadCrops);
