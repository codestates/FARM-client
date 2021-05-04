import { memo } from "react";
import { useSelector } from "react-redux";

function ReadFarmerInfo() {
  const objUserInfo = useSelector((state) => {
    return state.myPageReducer;
  });
  return (
    <div>
      <p className="Farmer_Info">농부 정보</p>
      <div className="Userinfo_Wrapper">
        <p className="Userinfo_Name">{objUserInfo.username}</p>
        <p className="Userinfo_Email">{objUserInfo.email}</p>
        <p className="Userinfo_Farms">
          참여중인 농장 : {objUserInfo.projectList.length}
        </p>
      </div>
    </div>
  );
}

export default memo(ReadFarmerInfo);
