import ReadFarmerInfo from "../Components/ReadFarmerInfo";
import ReadFarmList from "../Components/ReadFarmList";

function MyPage({ accessToken, handleLogout }) {
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
export default MyPage;
