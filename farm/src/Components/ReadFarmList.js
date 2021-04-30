import { useSelector } from "react-redux";
import { memo } from "react";

function ReadFarmList() {
  const arrFarmList = useSelector((state) => {
    return state.myPageReducer.projectList;
  });

  return (
    <div>
      {arrFarmList !== undefined ? (
        <div>
          {arrFarmList.map((el, idx) => {
            return (
              <div key={idx}>
                <p>{el.farm_name}</p>
                <img src={el.image} />
              </div>
            );
          })}
        </div>
      ) : (
        <div>여기를 눌러 추가하십쇼</div>
      )}
    </div>
  );
}

export default memo(ReadFarmList);
