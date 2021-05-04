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
        <>
          <div className="Kind_Icon">{strIcon}</div>
          <ul className="Kind_Base" ref={Ref}>
            {iconList.map((el, idx) => {
              return (
                <li
                  className="Kind_Seed"
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
        </>
      ) : (
        <div className="Kind_Icon" ref={Ref} onClick={handleClick}>
          {strIcon}
        </div>
      )}
    </>
  );
}

export default SelectIcon;
