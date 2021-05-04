import axios from "axios";
import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { deleteSeed, moveToStorage } from "../Redux/actions/actions";
import { useHistory } from "react-router";

export default function ReadFarmerSeed({ seed, farmerId }) {
  const { kind, seedname, seed_id } = seed;
  const dispatch = useDispatch();
  const history = useHistory();
  const authState = useSelector((state) => state.authReducer);
  const state = useSelector((state) => state.farmReducer);
  const harvestCrop = async () => {
    // 곳간으로 복사 작업 후 삭제
    const url = "http://localhost:80";
    const objRes = await axios.post(
      `${url}/seed/harvest`,
      {
        seed_id: seed_id,
      },
      {
        headers: {
          Authorization: `Bearer ${authState.accessToken}`,
          "Content-Type": "application/json",
        },
        withCredentials: true,
      }
    );
    if (objRes.data.message === "ok") alert("수확에 성공했습니다!");
    else {
      alert("로그인 기간이 만료 되었습니다. 다시 로그인 해주세요.");
      history.push("/");
    }
    // dispatch(moveToStorage(kind, seed_id, seedname));
    dispatch(deleteSeed(farmerId, seed_id));
  };
  return (
    <div className="Seed_In_Farmer">
      <div className="Crop_Icon_In_Farmer">{kind}</div>
      <div>{seedname}</div>
      <button className="Complete_Btn" onClick={harvestCrop}>
        수확하기
      </button>
    </div>
  );
}
