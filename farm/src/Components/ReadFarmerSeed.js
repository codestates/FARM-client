import axios from "axios";
import React, { useState, memo } from "react";
import { useSelector, useDispatch } from "react-redux";
import { deleteSeed, moveToStorage } from "../Redux/actions/actions";
import { useHistory } from "react-router";
import Modal from "./Modal";

function ReadFarmerSeed({ seed, farmerId }) {
  const { kind, seedname, seed_id } = seed;
  const dispatch = useDispatch();
  const history = useHistory();
  const authState = useSelector((state) => state.authReducer);
  const state = useSelector((state) => state.farmReducer);
  const [isModal, setIsModal] = useState(false);
  const harvestCrop = async () => {
    // 곳간으로 복사 작업 후 삭제
    const objRes = await axios.post(
      `${process.env.REACT_APP_API_URL}/seed/harvest`,
      {
        seed_id: seed_id,
      },
      {
        headers: {
          Authorization: `Bearer ${authState.accessToken}`,
          "Content-Type": "application/json",
        },
        withCredentials: true,
      }
    );
    if (objRes.data.message !== "ok") {
      alert("로그인 기간이 만료 되었습니다. 다시 로그인 해주세요.");
      history.push("/");
    }
    setIsModal(false);
    // dispatch(moveToStorage(kind, seed_id, seedname) );
    dispatch(deleteSeed(farmerId, seed_id));
  };

  const openModal = () => {
    setIsModal(true);
  };

  return (
    <div className="Seed_In_Farmer">
      <div className="Crop_Icon_In_Farmer">{kind}</div>
      <div className="Seedname_In_Farmer">{seedname}</div>
      <button className="Complete_Btn" onClick={openModal}>
        수확하기
      </button>
      {isModal ? (
        <Modal
          open={openModal}
          close={harvestCrop}
          header="수확 완료"
          btntext="확 인"
          callback={harvestCrop}
        >
          <p>수확에 성공했습니다.</p>
        </Modal>
      ) : null}
    </div>
  );
}
export default memo(ReadFarmerSeed);
