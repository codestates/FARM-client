import { useDispatch, useSelector } from "react-redux";
import { useState, useRef, useEffect, memo } from "react";
import { deleteSeed, deleteSeedFromCrop } from "../Redux/actions/actions";
import axios from "axios";

function DeleteSeed({ cropsId, seedId }) {
  const userList = useSelector((state) => {
    return state.farmReducer.farmers;
  });

  const strAccessToken = useSelector((state) => state.authReducer.accessToken);
  const dispatch = useDispatch();
  const Ref = useRef(null);

  //   useEffect(() => {
  //     const handleClick = (e) => {
  //       if (Ref.current && !Ref.current.contains(e.target)) {
  //         setIsDelete(false);
  //       }
  //     };
  //     document.addEventListener("mousedown", handleClick);
  //     return () => {
  //       document.removeEventListener("mousedown", handleClick);
  //     };
  //   }, []);

  const deleteUserSeed = async (id) => {
    const objDeleteSeed = await axios.delete(
      `${process.env.REACT_APP_API_URL}/seed/delete`,
      {
        headers: {
          Authorization: `Bearer ${strAccessToken}`,
        },
        data: {
          seed_id: seedId,
        },
      }
    );
    dispatch(deleteSeedFromCrop(cropsId, seedId));
  };
  return (
    <>
      <button
        className="Give_Seed_Button"
        ref={Ref}
        onClick={() => deleteUserSeed()}
      >
        삭제하기
      </button>
    </>
  );
}

export default memo(DeleteSeed);
