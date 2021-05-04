import React, { useState, useRef } from "react";
import { useHistory } from "react-router";
import { useSelector, useDispatch } from "react-redux";
// import invite from "../../../../FARM-server/controllers/farm/invite";
import axios from "axios";
import { inviteFarmers } from "../Redux/actions/actions";

export default function InviteFarmers() {
  const url = "http://localhost:80";
  const emailInput = useRef();
  const [isOpenModal, setIsOpenModal] = useState(false);
  const [strEmail, setStrEmail] = useState("");
  const authState = useSelector((state) => state.authReducer);
  const state = useSelector((state) => {
    return state.farmReducer;
  });
  const dispatch = useDispatch();
  const inviteFarmer = async (e) => {
    e.preventDefault();
    // 서버에 strEmail 담아서 post 요청. 요청 정보 없으면 modal창에 안내문구 추가. 있으면 추가처리하기 모달창 닫기
    try {
      const objRes = await axios.post(
        `${url}/farm/invite`,
        {
          farm_id: state.farmId,
          email: strEmail,
        },
        {
          headers: {
            Authorization: `Bearer ${authState.accessToken}`,
            "Content-Type": "application/json",
          },
          withCredentials: true,
        }
      );
      if (objRes.data.message === "new member added") {
        dispatch(inviteFarmers(objRes.data.id, objRes.data.username, strEmail));
      }
      handleModal();
    } catch (err) {
      alert("이미 초대된 농부이거나 존재하지 않는 농부입니다.");
    }
  };
  const handleModal = () => {
    setIsOpenModal(!isOpenModal);
  };

  const handleEmail = (e) => {
    setStrEmail(e.target.value);
  };
  return (
    <div
      className={
        isOpenModal ? "Modal_Background" : "Farmer_Fields Invite_Farmer"
      }
      onClick={handleModal}
    >
      새로운 농부 초대하기
      {isOpenModal ? (
        <form
          onSubmit={inviteFarmer}
          className="Invite_Modal"
          onClick={(e) => e.stopPropagation()}
        >
          초대할 농부의 이메일을 입력하세요
          <input type="text" ref={emailInput} onChange={handleEmail} />
          <input type="submit" value="초 대" className="Invite_Btn" />
        </form>
      ) : null}
    </div>
  );
}
