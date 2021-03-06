import { useDispatch, useSelector } from "react-redux";
import { useState, useRef, useEffect, memo } from "react";
import { addSeeds } from "../Redux/actions/actions";
import axios from "axios";

function AddSeeds({ id }) {
  const strAccessToken = useSelector((state) => state.authReducer.accessToken);
  const [isAdd, setIsAdd] = useState(false);
  const [strName, setStrName] = useState("");
  const [strWarning, setStrWarning] = useState("");
  const dispatch = useDispatch();
  const inputFocusRef = useRef(null);
  const Ref = useRef(null);
  useEffect(() => {
    if (inputFocusRef.current) {
      inputFocusRef.current.focus();
    }
  }, [isAdd]);
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

  const addSeedToCrops = async (e) => {
    e.preventDefault();
    if (strName === "") {
      setStrWarning("씨앗의 이름을 입력해주세요!");
      return;
    }
    const objSeed = await axios.post(
      `${process.env.REACT_APP_API_URL}/seed/create`,
      {
        seed_name: strName,
        crop_id: id,
      },
      {
        headers: {
          Authorization: `Bearer ${strAccessToken}`,
          "Content-Type": "application/json",
        },
        withCredentials: true,
      }
    );
    dispatch(addSeeds(id, objSeed.data.data.seed_id, strName));
    setStrWarning("");
    setStrName("");
  };

  return (
    <div className="Seeds_Add_base">
      {isAdd ? (
        <div className="Seed_Board Add_Seed" ref={Ref}>
          <form onSubmit={addSeedToCrops}>
            <input
              ref={inputFocusRef}
              placeholder="씨앗 이름을 입력해주세요"
              value={strName}
              onChange={changeName}
            ></input>
            <button type="submit">추가하기</button>
            <div className="Seed_Err">{strWarning}</div>
          </form>
        </div>
      ) : (
        <div className="Seed_Board" ref={Ref} onClick={handleClick}>
          여기를 눌러 새로운 씨앗을 추가하세요
        </div>
      )}
    </div>
  );
}

export default memo(AddSeeds);
