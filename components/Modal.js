import React, { useEffect } from "react";
import { actionTypes } from "../context/reducer";
import { useStateValue } from "../context/StateProvider";
import modalStyles from "../styles/components/Modal.module.css";

const Modal = () => {
  const [{ forPrompt }, dispatch] = useStateValue();

  useEffect(() => {
    if (forPrompt) {
      const timer = setTimeout(() => {
        dispatch({ type: actionTypes.SET_SHOW_MODAL, showModal: false });
        dispatch({ type: actionTypes.SET_FOR_PROMPT, forPrompt: false });
      }, 2500);

      return () => clearTimeout(timer);
    }
  }, [forPrompt]);

  return (
    <div className={modalStyles.modal}>
      <div className={modalStyles.comingSoonTextContainer}>
        <div className={modalStyles.lightBar}></div>
        <div className={modalStyles.topLayer}></div>
        <h1>{forPrompt ? "Thank You" : "Loading..."}</h1>
      </div>
    </div>
  );
};

export default Modal;
