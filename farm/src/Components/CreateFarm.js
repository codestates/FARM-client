import { useRef, useState, useEffect, memo } from "react";
import { useDispatch, useSelector } from "react-redux";
import { createFarm, setFarm } from "../Redux/actions/actions";
import { useHistory } from "react-router";
import SetFarm from "./SetFarm";
import Modal from "./Modal";
import axios from "axios";
import backImage from "../Redux/image.json";

const env = process.env;

function CreateFarm({ isFarm }) {
  const objUserData = useSelector((state) => {
    return state.myPageReducer;
  });
  const strAccessToken = useSelector((state) => state.authReducer.accessToken);
  const dispatch = useDispatch();
  const [isModal, setIsModal] = useState(false);
  const [strProjectName, setProjectName] = useState("");
  const [strErr, setErr] = useState("");
  const projectInputRef = useRef();
  const history = useHistory();
  const projectName = (e) => {
    setProjectName(e.target.value);
  };
  const openModal = () => {
    setIsModal(true);
  };
  const closeModal = () => {
    setIsModal(false);
  };
  useEffect(() => {
    if (projectInputRef.current) {
      projectInputRef.current.focus();
    }
  }, [isModal]);
  const createProject = async () => {
    if (strProjectName === "") {
      setErr("밭 이름을 정확히 입력해주세요");
      return;
    } else {
      // 서버 통신 후 id와 image 받아와야 함.
      const numImg = Math.floor(Math.random() * backImage.image.length);
      const strImg = backImage.image[numImg];
      const objFarm = await axios.post(
        `${process.env.REACT_APP_API_URL}/farm/create`,
        {
          user_id: objUserData.id,
          farm_name: strProjectName,
          img: strImg,
        },
        {
          headers: {
            Authorization: `Bearer ${strAccessToken}`,
            "Content-Type": "application/json",
          },
          withCredentials: true,
        }
      );
      dispatch(createFarm(objFarm.data.id, strProjectName, strImg));
      setErr("");
      let data = await SetFarm(objFarm.data.id, strProjectName, strAccessToken);
      dispatch(setFarm(data));
      closeModal();
      setProjectName("");
      history.push("/farmpage");
    }
  };
  return (
    <div className="Farm_Item">
      {isFarm ? (
        <div
          className="Create_Farm"
          onClick={() => {
            setIsModal(true);
          }}
        >
          <svg
            className="Creat_Farm_Image"
            width="157"
            height="65"
            viewBox="0 0 157 65"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M14.16 42.28V49.46H12.68V42.6H10.22V54.4C7.68 52.98 6.82 49.98 6.82 46.8V43.9H4.26V47C4.26 50.12 3.28 53.44 0.52 55.08L2.16 57.02C3.8 56.02 4.88 54.34 5.52 52.32C6.12 54.12 7.14 55.6 8.7 56.48L10.22 54.44V59.88H12.68V51.58H14.16V60.7H16.66V42.28H14.16ZM28.8984 56.54V53.8H34.4784V51.68H23.7984V49.62H34.0584V43.48H21.1584V45.58H31.4584V47.56H21.1784V53.8H26.2584V56.54H19.2584V58.7H35.9384V56.54H28.8984ZM45.9769 44.74C48.3169 44.74 49.7569 45.32 49.7569 46.46C49.7569 47.6 48.3169 48.18 45.9769 48.18C43.6769 48.18 42.2169 47.6 42.2169 46.46C42.2169 45.32 43.6769 44.74 45.9769 44.74ZM45.9769 50.28C49.9569 50.28 52.5969 48.8 52.5969 46.46C52.5969 44.14 49.9569 42.64 45.9769 42.64C42.0169 42.64 39.3569 44.14 39.3569 46.46C39.3569 48.8 42.0169 50.28 45.9769 50.28ZM42.2769 54.88H39.5969V60.4H52.5169V58.3H42.2769V54.88ZM37.6569 51.24V53.34H44.7969V56.5H47.4969V53.34H54.3369V51.24H37.6569ZM68.8666 58.7C66.4066 58.7 65.1466 58.26 65.1466 57.3C65.1466 56.32 66.4066 55.9 68.8666 55.9C71.3266 55.9 72.5866 56.32 72.5866 57.3C72.5866 58.26 71.3266 58.7 68.8666 58.7ZM68.8666 53.88C64.8866 53.88 62.4866 55.12 62.4866 57.3C62.4866 59.48 64.8866 60.72 68.8666 60.72C72.8466 60.72 75.2666 59.48 75.2666 57.3C75.2666 55.12 72.8466 53.88 68.8666 53.88ZM70.2466 50.82V48.98H75.4066V46.88H65.3266V42.62H62.6866V48.98H67.6066V50.82H60.6066V52.9H77.2666V50.82H70.2466ZM89.965 50.66C87.065 49.8 85.805 47.74 85.765 45.64H89.365V43.52H79.405V45.64H83.065C83.025 47.94 81.705 50.28 78.725 51.28L80.045 53.34C82.205 52.64 83.665 51.18 84.485 49.36C85.285 50.88 86.685 52.1 88.705 52.7L89.965 50.66ZM87.465 58.7C85.105 58.7 83.845 58.2 83.845 57.16C83.845 56.1 85.105 55.6 87.465 55.6C89.805 55.6 91.065 56.1 91.065 57.16C91.065 58.2 89.805 58.7 87.465 58.7ZM87.465 53.56C83.625 53.56 81.225 54.9 81.225 57.16C81.225 59.4 83.625 60.72 87.465 60.72C91.285 60.72 93.685 59.4 93.685 57.16C93.685 54.9 91.285 53.56 87.465 53.56ZM93.485 46.54V42.3H90.845V53.24H93.485V48.7H95.925V46.54H93.485ZM108.635 50.62H105.035V45.9H108.635V50.62ZM111.235 43.82H102.455V52.7H111.235V43.82ZM107.175 54.42H104.535V60.4H117.075V58.3H107.175V54.42ZM116.415 47.62V42.3H113.775V55.74H116.415V49.78H118.855V47.62H116.415ZM135.013 46.38H125.013V44.76H134.873V42.66H122.393V48.46H135.013V46.38ZM124.853 57.44H134.933V52.56H122.213V54.54H132.333V55.58H122.233V60.56H135.413V58.54H124.853V57.44ZM120.333 49.44V51.52H136.993V49.44H120.333ZM139.732 44.2V46.3H145.872C145.492 50.38 143.452 53.26 138.752 55.52L140.132 57.6C146.672 54.44 148.572 49.84 148.572 44.2H139.732ZM151.392 42.28V60.7H154.052V42.28H151.392Z"
              fill="white"
            />
            <path
              d="M78 4.5L63 18H67.5V30H88.5V18H93L78 4.5ZM76.5 15H79.5V19.5H84V22.5H79.5V27H76.5V22.5H72V19.5H76.5V15Z"
              fill="white"
            />
          </svg>

          {/* 새로운 농장 만들기 */}
        </div>
      ) : (
        <div
          className="Create_Farm No_Farm"
          onClick={() => {
            setIsModal(true);
          }}
        >
          <svg
            className="Creat_Farm_Image"
            width="157"
            height="65"
            viewBox="0 0 157 65"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M14.16 42.28V49.46H12.68V42.6H10.22V54.4C7.68 52.98 6.82 49.98 6.82 46.8V43.9H4.26V47C4.26 50.12 3.28 53.44 0.52 55.08L2.16 57.02C3.8 56.02 4.88 54.34 5.52 52.32C6.12 54.12 7.14 55.6 8.7 56.48L10.22 54.44V59.88H12.68V51.58H14.16V60.7H16.66V42.28H14.16ZM28.8984 56.54V53.8H34.4784V51.68H23.7984V49.62H34.0584V43.48H21.1584V45.58H31.4584V47.56H21.1784V53.8H26.2584V56.54H19.2584V58.7H35.9384V56.54H28.8984ZM45.9769 44.74C48.3169 44.74 49.7569 45.32 49.7569 46.46C49.7569 47.6 48.3169 48.18 45.9769 48.18C43.6769 48.18 42.2169 47.6 42.2169 46.46C42.2169 45.32 43.6769 44.74 45.9769 44.74ZM45.9769 50.28C49.9569 50.28 52.5969 48.8 52.5969 46.46C52.5969 44.14 49.9569 42.64 45.9769 42.64C42.0169 42.64 39.3569 44.14 39.3569 46.46C39.3569 48.8 42.0169 50.28 45.9769 50.28ZM42.2769 54.88H39.5969V60.4H52.5169V58.3H42.2769V54.88ZM37.6569 51.24V53.34H44.7969V56.5H47.4969V53.34H54.3369V51.24H37.6569ZM68.8666 58.7C66.4066 58.7 65.1466 58.26 65.1466 57.3C65.1466 56.32 66.4066 55.9 68.8666 55.9C71.3266 55.9 72.5866 56.32 72.5866 57.3C72.5866 58.26 71.3266 58.7 68.8666 58.7ZM68.8666 53.88C64.8866 53.88 62.4866 55.12 62.4866 57.3C62.4866 59.48 64.8866 60.72 68.8666 60.72C72.8466 60.72 75.2666 59.48 75.2666 57.3C75.2666 55.12 72.8466 53.88 68.8666 53.88ZM70.2466 50.82V48.98H75.4066V46.88H65.3266V42.62H62.6866V48.98H67.6066V50.82H60.6066V52.9H77.2666V50.82H70.2466ZM89.965 50.66C87.065 49.8 85.805 47.74 85.765 45.64H89.365V43.52H79.405V45.64H83.065C83.025 47.94 81.705 50.28 78.725 51.28L80.045 53.34C82.205 52.64 83.665 51.18 84.485 49.36C85.285 50.88 86.685 52.1 88.705 52.7L89.965 50.66ZM87.465 58.7C85.105 58.7 83.845 58.2 83.845 57.16C83.845 56.1 85.105 55.6 87.465 55.6C89.805 55.6 91.065 56.1 91.065 57.16C91.065 58.2 89.805 58.7 87.465 58.7ZM87.465 53.56C83.625 53.56 81.225 54.9 81.225 57.16C81.225 59.4 83.625 60.72 87.465 60.72C91.285 60.72 93.685 59.4 93.685 57.16C93.685 54.9 91.285 53.56 87.465 53.56ZM93.485 46.54V42.3H90.845V53.24H93.485V48.7H95.925V46.54H93.485ZM108.635 50.62H105.035V45.9H108.635V50.62ZM111.235 43.82H102.455V52.7H111.235V43.82ZM107.175 54.42H104.535V60.4H117.075V58.3H107.175V54.42ZM116.415 47.62V42.3H113.775V55.74H116.415V49.78H118.855V47.62H116.415ZM135.013 46.38H125.013V44.76H134.873V42.66H122.393V48.46H135.013V46.38ZM124.853 57.44H134.933V52.56H122.213V54.54H132.333V55.58H122.233V60.56H135.413V58.54H124.853V57.44ZM120.333 49.44V51.52H136.993V49.44H120.333ZM139.732 44.2V46.3H145.872C145.492 50.38 143.452 53.26 138.752 55.52L140.132 57.6C146.672 54.44 148.572 49.84 148.572 44.2H139.732ZM151.392 42.28V60.7H154.052V42.28H151.392Z"
              fill="white"
            />
            <path
              d="M78 4.5L63 18H67.5V30H88.5V18H93L78 4.5ZM76.5 15H79.5V19.5H84V22.5H79.5V27H76.5V22.5H72V19.5H76.5V15Z"
              fill="white"
            />
          </svg>
        </div>
      )}

      {isModal ? (
        <Modal
          open={openModal}
          close={closeModal}
          header="농장 이름을 입력해주세요"
          btntext="농장 만들기"
          callback={createProject}
        >
          <form
            onSubmit={(e) => {
              e.preventDefault();
              createProject();
            }}
          >
            <input
              ref={projectInputRef}
              className="Create_Input"
              onChange={projectName}
            ></input>
            <div>{strErr}</div>
          </form>
        </Modal>
      ) : (
        <></>
      )}
    </div>
  );
}

export default memo(CreateFarm);
