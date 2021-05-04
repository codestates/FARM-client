import { useSelector, useDispatch } from "react-redux";
import { setFarm } from "../Redux/actions/actions";
import { memo } from "react";
import CreateFarm from "./CreateFarm";
import { Link } from "react-router-dom";
import SetFarm from "./SetFarm";

function ReadFarmList() {
  const arrFarmList = useSelector((state) => {
    return state.myPageReducer.projectList;
  });
  const strAccessToken = useSelector((state) => state.authReducer.accessToken);
  const dispatch = useDispatch();
  const setFarmData = async (id, name) => {
    const farmData = await SetFarm(id, name, strAccessToken);
    dispatch(setFarm(farmData));
  };
  return (
    <div>
      {arrFarmList.length !== 0 ? (
        <div>
          {arrFarmList.map((el, idx) => {
            return (
              <div
                key={idx}
                onClick={(e) => {
                  setFarmData(el.id, el.name);
                }}
              >
                <Link to="/farmpage">
                  <p>{el.name}</p>
                  <img src={el.img} />
                </Link>
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
