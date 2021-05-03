import ReadFarmers from "../Components/ReadFarmers";
import AddCrops from "../Components/AddCrops";
import ReadCrops from "../Components/ReadCrops";
import ReadStorage from "../Components/ReadStorage";
import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import axios from "axios";
import { useHistory } from "react-router";
import { setAuth, setNoAuth, setStorage } from "../Redux/actions/actions";

export default function FarmPage() {
  const url = "http://localhost:80";
  const dispatch = useDispatch();
  const history = useHistory();
  const authState = useSelector((state) => state.authReducer);
  const numFarmId = useSelector((state) => {
    return state.farmReducer.farmId;
  });

  const [isOpenStorage, setIsOpenStorage] = useState(false);
  const goToStorage = async () => {
    const objStorage = await axios.get(`${url}/storage/info/${numFarmId}`, {
      headers: {
        Authorization: `Bearer ${authState.accessToken}`,
        "Content-Type": "application/json",
      },
      withCredentials: true,
    });
    console.log(`objStorage.data.data`, objStorage.data.data);
    if (objStorage.data.data) {
      dispatch(setStorage(objStorage.data.data));
    }
    setIsOpenStorage(true);
  };
  const state = useSelector((state) => state.farmReducer);
  const goToFarm = () => {
    setIsOpenStorage(false);
  };
  //"밭 이름" 부분은 useSelector로 state접근해서 현재 Farm 연결해줘야함. 이건 MyPage에서 Props넘겨 줘야 함.
  const handleLogout = () => {
    console.log("로그아웃요청들어옴!");
    axios
      .get(`${url}/users/signout`, {
        headers: {
          Authorization: `Bearer ${authState.accessToken}`,
          "Content-Type": "application/json",
          withCredentials: true,
        },
      })
      .then((res) => {
        console.log(`res in logout`, res);
        dispatch(setNoAuth());
        return history.push("/");
      })
      .catch((err) => alert(err));
  };
  return (
    <div>
      <nav className="Sub_Nav">
        <div className="Farm_Name" onClick={goToFarm}>
          밭 이름
        </div>
        <div className="Storage" onClick={goToStorage}>
          곳간
        </div>
        <div className="Logout_Farm" onClick={handleLogout}>
          로그아웃
        </div>
      </nav>
      {isOpenStorage ? (
        <ReadStorage arrStorage={state.storage} />
      ) : (
        <div>
          <ReadFarmers />
        </div>
      )}

      <div className="Farm_Crops_Field">
        <ReadCrops id={numFarmId} />
        <AddCrops id={numFarmId} />
      </div>
    </div>
  );
}
