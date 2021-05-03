import React, { useState, useRef } from "react";

export default function InviteFarmers() {
  const emailInput = useRef();
  const [isOpenModal, setIsOpenModal] = useState(false);
  const handleModal = () => {
    setIsOpenModal(!isOpenModal);
  };
  const inviteFarmer = (e) => {
    e.preventDefault();
    // 서버에 strEmail 담아서 post 요청. 요청 정보 없으면 modal창에 안내문구 추가. 있으면 추가처리하기 모달창 닫기
    handleModal();
  };
  const [strEmail, setStrEmail] = useState("");
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
