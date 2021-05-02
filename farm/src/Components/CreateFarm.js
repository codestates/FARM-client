import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { createFarm, setFarm } from "../Redux/actions/actions";
import { useHistory } from "react-router";
import SetFarm from "./SetFarm";
import Modal from "./Modal";
import axios from "axios";

const env = process.env;

function CreateFarm({ isFarm }) {
  const objUserData = useSelector((state) => {
    return state.myPageReducer;
  });
  const dispatch = useDispatch();
  const [isModal, setIsModal] = useState(false);
  const [strProjectName, setProjectName] = useState("");
  const [strErr, setErr] = useState("");

  const histoty = useHistory();
  const projectName = (e) => {
    setProjectName(e.target.value);
  };
  const openModal = () => {
    setIsModal(true);
  };
  const closeModal = () => {
    setIsModal(false);
  };

  const createProject = async () => {
    if (strProjectName === "") {
      setErr("밭 이름을 정확히 입력해주세요");
      return;
    } else {
      // 서버 통신 후 id와 image 받아와야 함.
      const objFarm = await axios.post(`http://localhost:80/farm/create`, {
        user_id: objUserData.id,
        farm_name: strProjectName,
        img: "sdfa",
      });
      dispatch(createFarm(objFarm.data.id, strProjectName, "sdfa"));
      setErr("");
      let data = await SetFarm(objFarm.data.id, strProjectName);
      dispatch(setFarm(data));
      closeModal();
      setProjectName("");
      histoty.push("/farmpage");
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
          <form onSubmit={createProject}>
            <input className="Create_Input" onChange={projectName}></input>
            <div>{strErr}</div>
          </form>
        </Modal>
      ) : (
        <></>
      )}
    </div>
  );
}

export default CreateFarm;
