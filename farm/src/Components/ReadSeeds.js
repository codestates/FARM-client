import { useSelector } from "react-redux";
import { memo } from "react";

function ReadSeeds({ id }) {
  const seeds = useSelector((state) => {
    return state.farmReducer.crops.filter((el) => {
      if (id === el.id) {
        return el;
      }
    })[0].seeds;
  });
  return (
    <div>
      {seeds.map((el, idx) => {
        return (
          <div className="Seed_Base" key={idx}>
            <span className="Seed_Name">{el.name}</span>
          </div>
        );
      })}
    </div>
  );
}

export default memo(ReadSeeds);
