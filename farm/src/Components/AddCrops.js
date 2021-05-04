import { useDispatch, useSelector } from "react-redux";
import { useState, useRef, useEffect } from "react";
import { addCrops } from "../Redux/actions/actions";
import SelectIcon from "./SelectIcon";
import axios from "axios";

function AddCrops({ id }) {
  const iconList = useSelector((state) => {
    return state.farmReducer.iconList;
  });
  const strAccessToken = useSelector((state) => state.authReducer.accessToken);
  const [isAdd, setIsAdd] = useState(false);
  const [strName, setStrName] = useState("");
  const [strIcon, setStrIcon] = useState(iconList[0]);
  const [numIcon, setNumIcon] = useState(0);
  const [strWarning, setStrWarning] = useState("");

  const Ref = useRef(null);
  const dispatch = useDispatch();

  useEffect(() => {
    const handleClick = (e) => {
      if (Ref.current && !Ref.current.contains(e.target)) {
        setIsAdd(false);
      }
    };
    document.addEventListener("mousedown", handleClick);
    return () => {
      document.removeEventListener("mousedown", handleClick);
    };
  }, []);

  const handleClick = () => {
    setIsAdd(true);
  };

  const changeName = (e) => {
    setStrName(e.target.value);
  };

  const setIcon = (icon, idx) => {
    setStrIcon(icon);
    setNumIcon(idx);
  };

  const addCropsToFarm = async (e) => {
    e.preventDefault();
    if (strName === "") {
      setStrWarning("농작물 이름을 입력해주세요!");
      return;
    }
    const objCrops = await axios.post(
      `${process.env.REACT_APP_API_URL}/crop/create`,
      {
        crop_name: strName,
        kind: strIcon,
        farm_id: id,
      },
      {
        headers: {
          Authorization: `Bearer ${strAccessToken}`,
          "Content-Type": "application/json",
        },
        withCredentials: true,
      }
    );
    dispatch(addCrops(objCrops.data.data.crop_id, strName, strIcon, numIcon));
    setIsAdd(false);
    setStrName("");
    setStrWarning("");
    let icon = iconList.filter((el, idx) => {
      if (idx !== numIcon) {
        return el;
      }
    });
    setStrIcon(icon[0]);
  };

  return (
    <>
      {isAdd ? (
        <div className="Add_Crop_Field" ref={Ref}>
          <form onSubmit={addCropsToFarm}>
            <SelectIcon
              setIcon={setIcon}
              iconList={iconList}
              strIcon={strIcon}
            ></SelectIcon>
            <input value={strName} onChange={changeName}></input>
            <button type="submit">추가하기</button>
            <div>{strWarning}</div>
          </form>
        </div>
      ) : (
        <div className="Add_Crop_Field" ref={Ref} onClick={handleClick}>
          <div className="Add_Crop_Text">새로운 작물 추가하기</div>
        </div>
      )}
    </>
  );
}

export default AddCrops;
