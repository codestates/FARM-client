import { useState, useRef, useEffect } from "react";

function SelectIcon({ setIcon, iconList, strIcon }) {
  const [isSelect, setIsSelect] = useState(false);
  const Ref = useRef(null);

  useEffect(() => {
    const handleClick = (e) => {
      if (Ref.current && !Ref.current.contains(e.target)) {
        setIsSelect(false);
      }
    };
    document.addEventListener("mousedown", handleClick);
    return () => {
      document.removeEventListener("mousedown", handleClick);
    };
  }, []);

  const handleClick = () => {
    setIsSelect(true);
  };

  return (
    <>
      {isSelect ? (
        <ul ref={Ref}>
          {iconList.map((el, idx) => {
            return (
              <li
                key={idx}
                onClick={(e) => {
                  setIcon(el, idx);
                  setIsSelect(false);
                }}
              >
                {el}
              </li>
            );
          })}
        </ul>
      ) : (
        <div ref={Ref} onClick={handleClick}>
          <div>{strIcon}</div>
        </div>
      )}
    </>
  );
}

export default SelectIcon;
