import AddCrops from "../Components/AddCrops";

function FarmPage(props) {
  //  카테고리(Crops)를 랜더링하는 ReadCrops 컴포넌트와 AddCrops 컴포넌트를 호출합니다.
  //  작업자(Farmers) 정보를 랜더링하는 ReadFarmers 컴포넌트와 InviteFarmers 컴포넌트를 호출합니다.
  //  곳간 정보를 랜더링 할 수 있도록 하는 ReadLumberroom 컴포넌트를 호출합니다.
  //  작업자 정보와 할일 목록을 볼 수 있는 탭 버튼(프로젝트 이름)과 곳간을 볼 수 있는 탭 버튼(곳간)을 두어 선택한 탭 버튼에 따라 화면에 필요한 정보들이 랜더링 되도록 합니다.
  return (
    <div>
      <AddCrops></AddCrops>
    </div>
  );
}

export default FarmPage;
