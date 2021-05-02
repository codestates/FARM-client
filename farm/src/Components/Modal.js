import React from "react";

const Modal = ({ open, close, header, btntext, callback, children }) => {
  // 열기, 닫기, 모달 헤더 텍스트를 부모로부터 받아옴

  const closedModal = (e) => {
    e.preventDefault();
    if (callback) {
      callback();
    }
  };
  return (
    <div className={open ? "Modal_Open Modal" : "Modal"} onClick={close}>
      {open ? (
        <section onClick={(e) => e.stopPropagation()}>
          <header>
            {header}
            <button className="Modal_Close" onClick={close}>
              &times;
            </button>
          </header>
          <main>{children}</main>
          <footer>
            <button className="Modal_Close" onClick={closedModal}>
              {btntext}
            </button>
          </footer>
        </section>
      ) : null}
    </div>
  );
};

export default Modal;
