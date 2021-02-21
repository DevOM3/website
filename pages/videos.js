import React, { useEffect } from "react";
import { actionTypes } from "../context/reducer";
import { useStateValue } from "../context/StateProvider";
import videosStyles from "../styles/pages/Videos.module.css";
import { getVideosData } from "../services/databaseFunctions";

export const getStaticProps = async () => {
  const videos = await getVideosData();
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

const videos = ({ videoList }) => {
  const [{ mode }, dispatch] = useStateValue();

  useEffect(() => {
    dispatch({
      type: actionTypes.SET_CURRENT_PAGE,
      currentPage: "Videos",
    });

    videoList.map(
      (video) =>
        (document.getElementsByClassName(videosStyles.videos)[0].innerHTML +=
          video.video)
    );
  }, []);

  return (
    <div
      style={{ background: mode === "light" ? "whitesmoke" : "#111111" }}
      className={videosStyles.videos}
    ></div>
  );
};

export default videos;
