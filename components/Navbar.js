import React, { useEffect, useState } from "react";
import navbarStyles from "../styles/components/Navbar.module.css";
import Brightness4RoundedIcon from "@material-ui/icons/Brightness4Rounded";
import { IconButton } from "@material-ui/core";
import { useStateValue } from "../context/StateProvider";
import { actionTypes } from "../context/reducer";
import MenuRoundedIcon from "@material-ui/icons/MenuRounded";
import ExpandLessRoundedIcon from "@material-ui/icons/ExpandLessRounded";
import Link from "next/link";
import { motion } from "framer-motion";

const Navbar = () => {
  const [{ currentPage, mode }, dispatch] = useStateValue();
  const [drawerOpen, setDrawerOpen] = useState(false);

  useEffect(() => {
    if (window.innerWidth < 810) {
      document.querySelector(`#navbar`).style.transition =
        "max-height 551ms linear";
      document.getElementsByClassName(
        navbarStyles.navbarLinks
      )[0].style.transition = `opacity 551ms ease-in-out`;

      if (drawerOpen) {
        document.querySelector(`#navbar`).style.height = "auto";
        document.querySelector(`#navbar`).style.maxHeight = "1000px";
        document.getElementsByClassName(
          navbarStyles.navbarLinks
        )[0].style.opacity = 1;
      } else {
        document.querySelector(`#navbar`).style.maxHeight = "54px";
        document.getElementsByClassName(
          navbarStyles.navbarLinks
        )[0].style.opacity = 0;
      }
    }
  }, [drawerOpen]);

  useEffect(() => {
    document
      .querySelectorAll(`#links`)
      .forEach((li) =>
        mode === "light"
          ? li.classList.remove(navbarStyles.linksDark)
          : li.classList.add(navbarStyles.linksDark)
      );
  }, [mode, currentPage]);

  return (
    <div
      id="navbar"
      style={{
        background:
          mode === "light" ? `rgba(251, 251, 251, 0.4)` : `rgba(0, 0, 0, 0.7)`,
      }}
      className={navbarStyles.navbar}
    >
      <div className={navbarStyles.mobileNavbarTop}>
        <Link href="/">
          <a>
            <div className={navbarStyles.navbarLogo}>
              <span style={{ color: mode === "light" ? "black" : "white" }}>
                DevOM
              </span>
            </div>
          </a>
        </Link>
        <IconButton
          style={{
            transition: `all 521ms`,
            transform: `${drawerOpen ? "rotate(0deg)" : "rotate(180deg)"}`,
          }}
          className={navbarStyles.menuButton}
          onClick={() => setDrawerOpen(!drawerOpen)}
        >
          {drawerOpen ? (
            <ExpandLessRoundedIcon
              style={{ color: mode === "light" ? "black" : "white" }}
            />
          ) : (
            <MenuRoundedIcon
              style={{ color: mode === "light" ? "black" : "white" }}
            />
          )}
        </IconButton>
      </div>
      <div className={navbarStyles.navbarLinks}>
        <ul>
          {/* <AnimatePresence> */}
          {!(currentPage === "Home") && (
            <Link href="/">
              <motion.a
                initial={{ scale: 0, opacity: 0, y: "-100vh" }}
                animate={{ scale: 1, opacity: 1, y: "0vh" }}
                transition={{ type: "tween" }}
              >
                <li
                  id="links"
                  style={{
                    color: mode === "light" ? "black" : "white",
                    border:
                      mode === "light"
                        ? `1px solid #222222`
                        : `1px solid #dddddd`,
                  }}
                  className={navbarStyles.links}
                >
                  Home
                </li>
              </motion.a>
            </Link>
          )}
          {!(currentPage === "Projects") && (
            <Link href="/projects">
              <motion.a
                initial={{ scale: 0, opacity: 0, y: "-100vh" }}
                animate={{ scale: 1, opacity: 1, y: "0vh" }}
                transition={{ type: "tween" }}
              >
                <li
                  id="links"
                  style={{
                    color: mode === "light" ? "black" : "white",
                    border:
                      mode === "light"
                        ? `1px solid #222222`
                        : `1px solid #dddddd`,
                  }}
                  className={navbarStyles.links}
                >
                  Projects
                </li>
              </motion.a>
            </Link>
          )}
          {!(currentPage === "Achievements") && (
            <Link href="/achievements">
              <motion.a
                initial={{ scale: 0, opacity: 0, y: "-100vh" }}
                animate={{ scale: 1, opacity: 1, y: "0vh" }}
                transition={{ type: "tween" }}
              >
                <li
                  id="links"
                  style={{
                    color: mode === "light" ? "black" : "white",
                    border:
                      mode === "light"
                        ? `1px solid #222222`
                        : `1px solid #dddddd`,
                  }}
                  className={navbarStyles.links}
                >
                  Achievements
                </li>
              </motion.a>
            </Link>
          )}
          {!(currentPage === "Videos") && (
            <Link href="/videos">
              <motion.a
                initial={{ scale: 0, opacity: 0, y: "-100vh" }}
                animate={{ scale: 1, opacity: 1, y: "0vh" }}
                transition={{ type: "tween" }}
              >
                <li
                  id="links"
                  style={{
                    color: mode === "light" ? "black" : "white",
                    border:
                      mode === "light"
                        ? `1px solid #222222`
                        : `1px solid #dddddd`,
                  }}
                  className={navbarStyles.links}
                >
                  Videos
                </li>
              </motion.a>
            </Link>
          )}
          {!(currentPage === "Gaming") && (
            <Link href="/gaming">
              <motion.a
                initial={{ scale: 0, opacity: 0, y: "-100vh" }}
                animate={{ scale: 1, opacity: 1, y: "0vh" }}
                transition={{ type: "tween" }}
              >
                <li
                  id="links"
                  style={{
                    color: mode === "light" ? "black" : "white",
                    border:
                      mode === "light"
                        ? `1px solid #222222`
                        : `1px solid #dddddd`,
                  }}
                  className={navbarStyles.links}
                >
                  Gaming
                </li>
              </motion.a>
            </Link>
          )}
          {!(currentPage === "Contact") && (
            <Link href="/contact">
              <motion.a
                initial={{ scale: 0, opacity: 0, y: "-100vh" }}
                animate={{ scale: 1, opacity: 1, y: "0vh" }}
                transition={{ type: "tween" }}
              >
                <li
                  id="links"
                  style={{
                    color: mode === "light" ? "black" : "white",
                    border:
                      mode === "light"
                        ? `1px solid #222222`
                        : `1px solid #dddddd`,
                  }}
                  className={navbarStyles.links}
                >
                  Contact
                </li>
              </motion.a>
            </Link>
          )}
          {!(currentPage === "About") && (
            <Link href="/about">
              <motion.a
                initial={{ scale: 0, opacity: 0, y: "-100vh" }}
                animate={{ scale: 1, opacity: 1, y: "0vh" }}
                transition={{ type: "tween" }}
              >
                <li
                  id="links"
                  style={{
                    color: mode === "light" ? "black" : "white",
                    border:
                      mode === "light"
                        ? `1px solid #222222`
                        : `1px solid #dddddd`,
                  }}
                  className={navbarStyles.links}
                >
                  About
                </li>
              </motion.a>
            </Link>
          )}
          {/* </AnimatePresence> */}
        </ul>
        <IconButton
          id="modeButton"
          disableFocusRipple
          focusRipple={false}
          disableRipple
          style={{
            backgroundColor: "transparent",
            color: mode === "light" ? "black" : "white",
            transition: `all 271ms ease-in-out`,
            transform: mode === "light" ? `rotate(180deg)` : `rotate(0deg)`,
          }}
          onClick={() => {
            dispatch({
              type: actionTypes.SET_MODE,
              mode: mode === "light" ? "dark" : "light",
            });
            localStorage.setItem("mode", mode === "light" ? "dark" : "light");
          }}
        >
          <Brightness4RoundedIcon />
        </IconButton>
      </div>
    </div>
  );
};

export default Navbar;
