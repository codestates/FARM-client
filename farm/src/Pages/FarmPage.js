import ReadFarmers from "../Components/ReadFarmers";
import AddCrops from "../Components/AddCrops";
import ReadCrops from "../Components/ReadCrops";
import ReadStorage from "../Components/ReadStorage";
import React, { useState } from "react";

export default function FarmPage() {
  const [isOpenStorage, setIsOpenStorage] = useState(false);
  const goToStorage = () => {
    setIsOpenStorage(true);
  };
  const goToFarm = () => {
    setIsOpenStorage(false);
  };
  //"밭 이름" 부분은 useSelector로 state접근해서 현재 Farm 연결해줘야함. 이건 MyPage에서 Props넘겨 줘야 함.
  return (
    <div>
      <nav className="Sub_Nav">
        <div className="Farm_Name" onClick={goToFarm}>
          밭 이름
        </div>
        <div className="Storage" onClick={goToStorage}>
          곳간
        </div>
      </nav>
      {isOpenStorage ? (
        <ReadStorage />
      ) : (
        <div>
          <ReadFarmers />
        </div>
      )}

      <div className="Farm_Crops_Field">
        <ReadCrops />
        <AddCrops />
      </div>
    </div>
  );
}
