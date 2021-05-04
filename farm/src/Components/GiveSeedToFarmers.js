import { useDispatch, useSelector } from "react-redux";
import { useState, useRef, useEffect } from "react";
import { giveSeed } from "../Redux/actions/actions";
import axios from "axios";

function GiveSeedToFarmers({ corpsId, seedId }) {
  const userList = useSelector((state) => {
    return state.farmReducer.farmers;
  });
  const strAccessToken = useSelector((state) => state.authReducer.accessToken);
  const [isGive, setIsGive] = useState(false);
  const dispatch = useDispatch();
  const Ref = useRef(null);

  useEffect(() => {
    const handleClick = (e) => {
      if (Ref.current && !Ref.current.contains(e.target)) {
        setIsGive(false);
      }
    };
    document.addEventListener("mousedown", handleClick);
    return () => {
      document.removeEventListener("mousedown", handleClick);
    };
  }, []);

  const handleClick = () => {
    setIsGive(true);
  };

  const giveSeedFarmer = async (id) => {
    const objAssignSeed = await axios.post(
      `http://localhost:80/seed/assign`,
      {
        user_id: id,
        seed_id: seedId,
      },
      {
        headers: {
          Authorization: `Bearer ${strAccessToken}`,
          "Content-Type": "application/json",
        },
        withCredentials: true,
      }
    );
    dispatch(giveSeed(corpsId, seedId, id));
  };
  return (
    <>
      {isGive ? (
        <ul className="Farmer_List" ref={Ref}>
          {userList.map((el, idx) => {
            return (
              <li
                key={idx}
                onClick={(e) => {
                  e.preventDefault();
                  giveSeedFarmer(el.user_id);
                }}
              >
                {el.name}
              </li>
            );
          })}
        </ul>
      ) : (
        <button className="Give_Seed_Button" ref={Ref} onClick={handleClick}>
          씨앗 주기
        </button>
      )}
    </>
  );
}
export default GiveSeedToFarmers;
