import ReadFarmerInfo from "../Components/ReadFarmerInfo";
import ReadFarmList from "../Components/ReadFarmList";
import axios from "axios";
import { useSelector, useDispatch } from "react-redux";

export default function myPage({ accessToken, handleLogout }) {
  return (
    <div>
      <nav>
        <span className="Btn_Logout" onClick={handleLogout}>
          로그아웃
        </span>
      </nav>
      <ReadFarmerInfo />
      <ReadFarmList accessToken={accessToken} />
    </div>
  );
}
