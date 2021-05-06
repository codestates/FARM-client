import React, { useState, useEffect, useRef, memo } from "react";
import { useDispatch, useSelector } from "react-redux";
import { changeCropsName } from "../Redux/actions/actions";
import axios from "axios";

function EditCropsName({ handleClick, defaultName, crops_id }) {
  const strAccessToken = useSelector((state) => state.authReducer.accessToken);
  const [inputValue, setInputValue] = useState(defaultName);
  const dispatch = useDispatch();
  const inputValueContainer = useRef(inputValue);
  const Ref = useRef(null);
  const onInputValueCahnge = (e) => {
    setInputValue(e.target.value);
    inputValueContainer.current = e.target.value;
  };
  useEffect(() => {
    // 커서 이동

    Ref.current.focus();

    //documentClick 정의

    const handleDocumentClick = (e) => {
      if (e.key === "Enter") {
        handleClick();
      } else if (
        Ref.current &&
        !Ref.current.contains(e.target) &&
        //빈칸일 때는 바뀌면 안되므로 해당 케이스 대응하는 부분.
        inputValueContainer.current !== ""
      ) {
        handleClick();
      }
    };
    document.addEventListener("keypress", handleDocumentClick);
    document.addEventListener("mousedown", handleDocumentClick);
    return async () => {
      //documentClick 제거
      document.removeEventListener("keypress", handleDocumentClick);
      document.removeEventListener("mousedown", handleDocumentClick);
      const newName = inputValueContainer.current;
      //documentClick이 일어나면
      // 1) dispatch , action
      // 2) server에 name을 바꾸는 부분을 보내야함
      await axios.put(
        `${process.env.REACT_APP_API_URL}/crop/update`,
        {
          crops_id,
          newName,
        },
        {
          headers: {
            Authorization: `Bearer ${strAccessToken}`,
            "Content-Type": "application/json",
          },
          withCredentials: true,
        }
      );
      console.log(newName);
      dispatch(changeCropsName(crops_id, newName));
    };
  }, []);
  return (
    <input
      ref={Ref}
      onChange={onInputValueCahnge}
      className="Crops_Name Edit_Crops_Name"
      value={inputValue}
      placeholder="빈칸은 허용하지 않습니다."
    ></input>
  );
}
export default memo(EditCropsName);
