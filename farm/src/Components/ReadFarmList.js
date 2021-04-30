import { useSelector } from "react-redux";
import { memo } from "react";
import CreateFarm from "./CreateFarm";

function ReadFarmList() {
  const arrFarmList = useSelector((state) => {
    return state.myPageReducer.projectList;
  });

  return (
    <div>
      {arrFarmList.length !== 0 ? (
        <div>
          {arrFarmList.map((el, idx) => {
            return (
              <div key={idx}>
                <p>{el.farm_name}</p>
                <img src={el.image} />
              </div>
            );
          })}
          <CreateFarm isFarm={true}></CreateFarm>
        </div>
      ) : (
        <CreateFarm isFarm={false}></CreateFarm>
      )}
    </div>
  );
}

export default memo(ReadFarmList);
