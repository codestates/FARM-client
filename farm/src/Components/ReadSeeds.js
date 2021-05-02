import { useSelector } from "react-redux";
import { memo } from "react";
import GiveSeedToFarmers from "./GiveSeedToFarmers";

function ReadSeeds({ id }) {
  const seeds = useSelector((state) => {
    return state.farmReducer.crops.filter((el) => {
      if (id === el.crops_id) {
        return el;
      }
    })[0].seeds;
  });
  return (
    <div>
      {seeds.map((el, idx) => {
        return (
          <div className="Seed_Base" key={idx}>
            <span className="Seed_Name">{el.seed_name}</span>
            <GiveSeedToFarmers
              corpsId={id}
              seedId={el.seed_id}
            ></GiveSeedToFarmers>
          </div>
        );
      })}
    </div>
  );
}

export default memo(ReadSeeds);
