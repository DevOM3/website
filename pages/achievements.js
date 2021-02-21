import React, { useEffect } from "react";
import { actionTypes } from "../context/reducer";
import { useStateValue } from "../context/StateProvider";
import { getAchievements } from "../services/databaseFunctions";
import achievementsStyles from "../styles/pages/Achievements.module.css";

export const getStaticProps = async () => {
  const certificatesData = await getAchievements();
  const certificates = certificatesData.docs.map(
    (certificate) => certificate.data().achievementImage
  );

  return {
    props: {
      certificates,
    },
  };
};

const achievements = ({ certificates }) => {
  const [{ mode }, dispatch] = useStateValue();

  useEffect(() => {
    dispatch({
      type: actionTypes.SET_CURRENT_PAGE,
      currentPage: "Achievements",
    });
  }, []);

  const certificateClicked = (certificate) => {
    dispatch({
      type: actionTypes.SET_SHOW_CERTIFICATE_MODAL,
      showCertificateModal: true,
    });
    dispatch({
      type: actionTypes.SET_CERTIFICATE,
      certificate,
    });
  };

  return (
    <div
      style={{ backgroundColor: mode === "light" ? "whitesmoke" : "#111111" }}
      className={achievementsStyles.achievements}
    >
      {certificates.map((certificate) => (
        <img
          style={{ borderColor: mode === "light" ? "black" : "white" }}
          onClick={() => certificateClicked(certificate)}
          src={certificate}
          className={achievementsStyles.certificate}
        />
      ))}
    </div>
  );
};

export default achievements;
