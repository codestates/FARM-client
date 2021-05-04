import { useSelector } from "react-redux";
import { memo } from "react";
import GiveSeedToFarmers from "./GiveSeedToFarmers";

function ReadSeeds({ id }) {
  const seeds = useSelector((state) => {
    return state.farmReducer.crops.filter((el) => {
      if (id === el.crops_id) {
        return el;
      }
    });
  });
  return (
    <>
      {seeds[0].Seeds.map((el, idx) => {
        return (
          <div className="Seed_Board" key={idx}>
            <span className="Seed_Name">{el.seed_name}</span>
            <GiveSeedToFarmers
              corpsId={id}
              seedId={el.seed_id}
            ></GiveSeedToFarmers>
          </div>
        );
      })}
    </>
  );
}

export default memo(ReadSeeds);
