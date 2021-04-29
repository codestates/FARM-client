import { useDispatch, useSelector } from "react-redux";
import { useState, useRef, useEffect } from "react";
import { giveSeed } from "../Redux/actions/actions";

function GiveSeedToFarmers({ corpsId, seedId }) {
  const userList = useSelector((state) => {
    return state.farmReducer.farmers;
  });
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

  const giveSeedFarmer = (id) => {
    dispatch(giveSeed(corpsId, seedId, id));
  };
  return (
    <div>
      {isGive ? (
        <ul ref={Ref}>
          {userList.map((el, idx) => {
            return (
              <li
                key={idx}
                onClick={(e) => {
                  e.preventDefault();
                  giveSeedFarmer(el.id);
                }}
              >
                {el.userName}
              </li>
            );
          })}
        </ul>
      ) : (
        <button ref={Ref} onClick={handleClick}>
          씨앗 주기
        </button>
      )}
    </div>
  );
}
export default GiveSeedToFarmers;
