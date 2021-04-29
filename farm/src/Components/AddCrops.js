import { useDispatch, useSelector } from "react-redux";
import { useState, useRef, useEffect } from "react";
import { addCrops } from "../Redux/actions/actions";
import SelectIcon from "./SelectIcon";

function AddCrops({ id }) {
  const iconList = useSelector((state) => {
    return state.farmReducer.iconList;
  });
  console.log(`iconList`, iconList);
  const [isAdd, setIsAdd] = useState(false);
  const [strName, setStrName] = useState("");
  const [strIcon, setStrIcon] = useState(iconList[0]);
  console.log(`strIcon`, strIcon);
  const [numIcon, setNumIcon] = useState(0);
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

  const addCropsToFarm = (e) => {
    e.preventDefault();
    if (strName === "") {
      return alert("농작물 이름을 작성해주세요");
    }
    dispatch(addCrops(strName, strIcon, numIcon));
    setIsAdd(false);
    setStrName("");

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
        <div ref={Ref}>
          <form onSubmit={addCropsToFarm}>
            <SelectIcon
              setIcon={setIcon}
              iconList={iconList}
              strIcon={strIcon}
            ></SelectIcon>
            <input value={strName} onChange={changeName}></input>
            <button type="submit">추가하기</button>
          </form>
        </div>
      ) : (
        <div ref={Ref} onClick={handleClick}>
          <div> 여기를 눌러서 농작물을 추가하세요 </div>
        </div>
      )}
    </>
  );
}

export default AddCrops;
