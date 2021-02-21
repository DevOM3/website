import React from "react";
import { useStateValue } from "../context/StateProvider";
import linkCardStyles from "../styles/components/LinkCard.module.css";
import Link from "next/link";

const LinkCard = ({ title, description }) => {
  const [{ mode }] = useStateValue();

  return (
    <div
      style={{
        background:
          mode === "light" ? "rgba(255, 255, 255, 0.1)" : "rgba(0, 0, 0, 0.1)",
        borderTopColor:
          mode === "light" ? "rgba(255, 255, 255, 0.4)" : "rgba(0, 0, 0, 0.4)",
        borderLeftColor:
          mode === "light" ? "rgba(255, 255, 255, 0.4)" : "rgba(0, 0, 0, 0.4)",
        borderBottomColor:
          mode === "light" ? "rgba(255, 255, 255, 0.4)" : "rgba(0, 0, 0, 0.4)",
        borderRightColor:
          mode === "light" ? "rgba(255, 255, 255, 0.4)" : "rgba(0, 0, 0, 0.4)",
      }}
      className={linkCardStyles.linkCard}
    >
      <Link href={`/${title.toLowerCase()}`}>
        <a>
          <span
            style={{
              background:
                mode === "light"
                  ? "rgba(255, 255, 255, 0.7)"
                  : "rgba(0, 0, 0, 0.7)",
            }}
            className={linkCardStyles.slider}
          ></span>
          <h2 style={{ color: mode === "light" ? "black" : "white" }}>
            {title}
          </h2>
          <p style={{ color: mode === "dark" && "whitesmoke" }}>
            {description}
          </p>
        </a>
      </Link>
    </div>
  );
};

export default LinkCard;
