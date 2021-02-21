import { motion } from "framer-motion";
import React, { useEffect } from "react";
import { actionTypes } from "../context/reducer";
import { useStateValue } from "../context/StateProvider";
import certificateModalStyles from "../styles/components/CertificateModal.module.css";

const CertificateModal = () => {
  const [{ certificate, showCertificateModal }, dispatch] = useStateValue();

  useEffect(() => {
    if (!showCertificateModal) {
      dispatch({
        type: actionTypes.SET_CERTIFICATE,
        certificate: "",
      });
    }
  }, [showCertificateModal]);

  const dismissModal = () => {
    dispatch({
      type: actionTypes.SET_SHOW_CERTIFICATE_MODAL,
      showCertificateModal: false,
    });
  };

  return (
    <motion.div
      initial={{ opacity: 0, scaleX: 0, y: "100vh" }}
      animate={{ opacity: 1, scaleX: 1, y: 0 }}
      exit={{ opacity: 0, scaleX: 0, y: "100vh" }}
      transition={{ type: "tween" }}
      onClick={dismissModal}
      className={certificateModalStyles.certificateModal}
    >
      <img src={certificate} className={certificateModalStyles.certificate} />
    </motion.div>
  );
};

export default CertificateModal;
