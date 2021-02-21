import React from "react";
import { useStateValue } from "../context/StateProvider";
import comingSoonStyles from "../styles/components/ComingSoon.module.css";

const ComingSoon = () => {
  const [{ mode }, dispatch] = useStateValue();

  return (
    <div
      style={{ background: mode === "light" ? "whitesmoke" : "#111111" }}
      className={comingSoonStyles.modal}
    >
      <div className={comingSoonStyles.comingSoonTextContainer}>
        <div
          style={{ backgroundColor: mode === "light" ? "black" : "white" }}
          className={comingSoonStyles.lightBar}
        ></div>
        <div className={comingSoonStyles.topLayer}></div>
        <h1 style={{ color: mode === "light" ? "black" : "white" }}>
          Coming Soon
        </h1>
      </div>
    </div>
  );
};

export default ComingSoon;
