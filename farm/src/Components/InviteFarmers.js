import React, { useState, useRef, useEffect, memo } from "react";
import { useHistory } from "react-router";
import { useSelector, useDispatch } from "react-redux";
// import invite from "../../../../FARM-server/controllers/farm/invite";
import axios from "axios";
import { inviteFarmers } from "../Redux/actions/actions";
import Modal from "./Modal";

function InviteFarmers() {
  const emailInput = useRef();
  const [isModal, setIsModal] = useState(false);
  const [strEmail, setStrEmail] = useState("");
  const [strErr, setStrErr] = useState("");
  const authState = useSelector((state) => state.authReducer);
  const state = useSelector((state) => {
    return state.farmReducer;
  });
  useEffect(() => {
    if (emailInput.current) {
      emailInput.current.focus();
    }
  }, [isModal]);
  const dispatch = useDispatch();
  const inviteFarmer = async () => {
    // 서버에 strEmail 담아서 post 요청. 요청 정보 없으면 modal창에 안내문구 추가. 있으면 추가처리하기 모달창 닫기
    try {
      const objRes = await axios.post(
        `${process.env.REACT_APP_API_URL}/farm/invite`,
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
      setIsModal(false);
    } catch (err) {
      setStrErr("이미 초대된 농부이거나 존재하지 않는 농부입니다.");
    }
  };

  const handleEmail = (e) => {
    setStrEmail(e.target.value);
  };

  const openModal = () => {
    setIsModal(true);
  };
  const closeModal = () => {
    setIsModal(false);
    setStrErr("");
  };
  return (
    <div className="Farmer_Wrapper Invite_New">
      <div
        className={isModal ? "Modal_Background" : "New_Farmer_Btn"}
        onClick={openModal}
      >
        새로운 농부 초대하기
        {isModal ? (
          <Modal
            open={openModal}
            close={closeModal}
            header="새로운 농부 초대하기"
            btntext="초 대"
            callback={inviteFarmer}
          >
            <form
              onSubmit={(e) => {
                e.preventDefault();
                inviteFarmer();
              }}
              className="Invite_Farmer_Form"
            >
              <p style={{ color: "black" }}>
                초대할 농부의 이메일을 입력하세요
              </p>
              <input type="text" ref={emailInput} onChange={handleEmail} />
              <p style={{ color: "red" }}>{strErr}</p>
            </form>
          </Modal>
        ) : null}
      </div>{" "}
    </div>
  );
}
export default memo(InviteFarmers);
