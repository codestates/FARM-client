import { useSelector, useDispatch } from "react-redux";
import { setFarm } from "../Redux/actions/actions";
import { memo } from "react";
import CreateFarm from "./CreateFarm";
import { Link } from "react-router-dom";
import SetFarm from "./SetFarm";
import { useHistory } from "react-router";

function ReadFarmList() {
  const history = useHistory();
  const arrFarmList = useSelector((state) => {
    return state.myPageReducer.projectList;
  });
  const strAccessToken = useSelector((state) => state.authReducer.accessToken);
  const dispatch = useDispatch();
  const setFarmData = async (id, name) => {
    const farmData = await SetFarm(id, name, strAccessToken);
    dispatch(setFarm(farmData));
    history.push("/farmpage");
  };
  return (
    <div>
      <div className="Farmer_Info Farm_List">농장 목록</div>
      {arrFarmList.length !== 0 ? (
        <div className="Farm_Template">
          {arrFarmList.map((el, idx) => {
            return (
              <div
                className="Farm_Item"
                key={idx}
                style={{ "background-image": `url(${el.img})` }}
                onClick={(e) => {
                  setFarmData(el.id, el.name);
                }}
              >
                <div className="Farm_Name_Image">
                  <p className="Farm_Name_Text">{el.name}</p>
                </div>
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
