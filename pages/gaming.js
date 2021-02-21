import React, { useEffect } from "react";
import { actionTypes } from "../context/reducer";
import { useStateValue } from "../context/StateProvider";
import { getGamingData } from "../services/databaseFunctions";
import gamingStyles from "../styles/pages/Gaming.module.css";

export const getStaticProps = async () => {
  const videos = await getGamingData();
  const videoList = videos.docs.map((video) => ({
    id: video.id,
    video: video.data().video,
  }));

  return {
    props: {
      videoList,
    },
  };
};

const gaming = ({ videoList }) => {
  const [{ mode }, dispatch] = useStateValue();

  useEffect(() => {
    dispatch({
      type: actionTypes.SET_CURRENT_PAGE,
      currentPage: "Gaming",
    });

    videoList.map(
      (video) =>
        (document.getElementsByClassName(gamingStyles.videos)[0].innerHTML +=
          video.video)
    );
  }, []);

  return (
    <div
      style={{ background: mode === "light" ? "whitesmoke" : "#111111" }}
      className={gamingStyles.videos}
    ></div>
  );
};

export default gaming;
