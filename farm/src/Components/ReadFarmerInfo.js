import { memo } from "react";
import { useSelector } from "react-redux";

function ReadFarmerInfo() {
  const objUserInfo = useSelector((state) => {
    return state.myPageReducer;
  });
  console.log(`유저 인포란다`, objUserInfo);
  return (
    <div>
      <p>{objUserInfo.username}</p>
      <p>{objUserInfo.email}</p>
      <p>보유한 밭 개수 : {objUserInfo.projectList.length}</p>
    </div>
  );
}

export default memo(ReadFarmerInfo);
