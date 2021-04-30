import { useState } from "react";
import { useDispatch } from "react-redux";
import { createFarm } from "../Redux/actions/actions";
import Modal from "./Modal";

function CreateFarm({ isFarm }) {
  const dispatch = useDispatch();
  const [isModal, setIsModal] = useState(false);
  const [strProjectName, setProjectName] = useState("");
  const [strErr, setErr] = useState("");

  const projectName = (e) => {
    setProjectName(e.target.value);
  };
  const openModal = () => {
    setIsModal(true);
  };
  const closeModal = () => {
    setIsModal(false);
  };

  const createProject = () => {
    if (strProjectName === "") {
      setErr("밭 이름을 정확히 입력해주세요");
      return;
    } else {
      // 서버 통신 후 id와 image 받아와야 함.
      dispatch(createFarm(10, strProjectName, "image"));
      setErr("");
      closeModal();
      // 여기서 생성된 프로젝트로 바로 이동하는 라우터 추가 필요
    }
  };
  return (
    <div>
      {isFarm ? (
        <div
          className="Create_Farm"
          onClick={() => {
            setIsModal(true);
          }}
        >
          새로운 농장 만들기
        </div>
      ) : (
        <div
          className="Create_Farm No_Farm"
          onClick={() => {
            setIsModal(true);
          }}
        >
          <p>밭을 갈아보세요 농부는 어쩌구저쩌구 이거는 나중에 수정할거에요</p>
        </div>
      )}

      {isModal ? (
        <Modal
          open={openModal}
          close={closeModal}
          header="프로젝트 이름을 입력해주세요"
          btntext="밭 갈기"
          callback={createProject}
        >
          <from onSubmit={createProject}>
            <input className="Create_Input" onChange={projectName}></input>
            <div>{strErr}</div>
          </from>
        </Modal>
      ) : (
        <></>
      )}
    </div>
  );
}

export default CreateFarm;
