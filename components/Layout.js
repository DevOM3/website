import React, { useEffect, useState } from "react";
import Footer from "./Footer";
import Navbar from "./Navbar";
import { useStateValue } from "../context/StateProvider";
import layoutStyles from "../styles/components/Layout.module.css";
import Typed from "typed.js";
import { actionTypes } from "../context/reducer";
import Head from "next/head";
import Modal from "./Modal";
import CertificateModal from "./CertificateModal";
import { AnimatePresence, motion } from "framer-motion";

const Layout = ({ children }) => {
  const [
    { currentPage, greetShown, mode, showModal, showCertificateModal },
    dispatch,
  ] = useStateValue();
  const [height, setHeight] = useState(33);

  useEffect(() => {
    dispatch({
      type: actionTypes.SET_MODE,
      mode: localStorage.getItem("mode"),
    });
  }, []);

  useEffect(() => {
    if (!greetShown) {
      var typed = new Typed("#topText", {
        strings: [
          " ",
          "Hello",
          "and",
          "Welcome",
          "to",
          "the",
          "<b>DevOM</b>'s",
          "world",
          " ",
        ],
        typeSpeed: 21,
        showCursor: false,
        backDelay: 771,
        backSpeed: 0,
        fadeOut: true,
        contentType: "html",
        onComplete: () => {
          setHeight(0);
          setTimeout(() => {
            dispatch({
              type: actionTypes.SET_GREET_SHOWN,
              greetShown: true,
            });
          }, 333);
        },
      });
    }

    return () => typed.destroy();
  }, []);

  useEffect(() => {
    if (showCertificateModal) {
      !document
        .getElementsByTagName("body")[0]
        .classList.contains("certificateVisible") &&
        document
          .getElementsByTagName("body")[0]
          .classList.add("certificateVisible");
    } else {
      document
        .getElementsByTagName("body")[0]
        .classList.contains("certificateVisible") &&
        document
          .getElementsByTagName("body")[0]
          .classList.remove("certificateVisible");
    }
  }, [showCertificateModal]);

  useEffect(() => {
    if (showModal) {
      !document
        .getElementsByTagName("body")[0]
        .classList.contains("certificateVisible") &&
        document
          .getElementsByTagName("body")[0]
          .classList.add("certificateVisible");
    } else {
      document
        .getElementsByTagName("body")[0]
        .classList.contains("certificateVisible") &&
        document
          .getElementsByTagName("body")[0]
          .classList.remove("certificateVisible");
    }
  }, [showModal]);

  useEffect(() => {
    if (showCertificateModal) {
      dispatch({
        type: actionTypes.SET_SHOW_CERTIFICATE_MODAL,
        showCertificateModal: false,
      });
      dispatch({
        type: actionTypes.SET_CERTIFICATE,
        certificate: "",
      });
    }
    if (showModal) {
      dispatch({ type: actionTypes.SET_SHOW_MODAL, showModal: false });
      dispatch({ type: actionTypes.SET_FOR_PROMPT, forPrompt: false });
    }
  }, [currentPage]);

  return (
    <div
      style={{
        background: mode === "light" ? "white" : "black",
      }}
      className={layoutStyles.layout}
    >
      {showModal && <Modal />}
      <AnimatePresence>
        {showCertificateModal && <CertificateModal />}
      </AnimatePresence>
      {!greetShown && (
        <div
          id="topTextContainer"
          style={{
            height: height,
            opacity: height,
            backgroundColor: mode === "light" ? "black" : "white",
            color: mode === "light" ? "white" : "black",
          }}
          className={layoutStyles.topTextContainerLight}
        >
          <span id="topText" className={layoutStyles.topText}></span>
        </div>
      )}
      <Head>
        <title>DevOM | {currentPage}</title>
      </Head>
      <Navbar />
      {children}
      <Footer />
    </div>
  );
};

export default Layout;
