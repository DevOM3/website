import React, { useEffect, useState } from "react";
import adminStyles from "../../styles/pages/Admin.module.css";
import { useStateValue } from "../../context/StateProvider";
import {
  uploadVideo,
  uploadGamePlay,
  uploadAchievement,
  uploadProject,
  getContactData,
  saveProject,
} from "../../services/databaseFunctions";
import { actionTypes } from "../../context/reducer";

export const getStaticProps = async () => {
  const contacts = await getContactData();
  const contactData = contacts.docs.map((contact) => ({
    id: contact.id,
    name: contact.data().name,
    email: contact.data().email,
    description: contact.data().description,
  }));

  return {
    props: {
      contactData,
    },
  };
};

const devom = ({ contactData }) => {
  const [{ mode }, dispatch] = useStateValue();
  const [video, setVideo] = useState(``);
  const [gamePlay, setGamePlay] = useState(``);
  const [name, setName] = useState(``);
  const [link, setLink] = useState(``);
  const [imageLink, setImageLink] = useState(``);
  const [type, setType] = useState(``);

  const [achievementImageAsFile, setAchievementImageAsFile] = useState("");
  const [projectImageAsFile, setProjectImageAsFile] = useState("");

  useEffect(() => {
    dispatch({
      type: actionTypes.SET_CURRENT_PAGE,
      currentPage: "Admin Panel",
    });
  }, []);

  const submitVideo = (e) => {
    if (video) {
      dispatch({
        type: actionTypes.SET_SHOW_MODAL,
        showModal: true,
      });
      e.preventDefault();
      uploadVideo(video)
        .then(() => {
          setVideo(``);
          dispatch({
            type: actionTypes.SET_SHOW_MODAL,
            showModal: false,
          });
        })
        .catch((error) => alert(error));
    }
  };
  const submitGamePlayVideo = (e) => {
    if (gamePlay) {
      dispatch({
        type: actionTypes.SET_SHOW_MODAL,
        showModal: true,
      });
      e.preventDefault();
      uploadGamePlay(gamePlay)
        .then(() => {
          setGamePlay(``);
          dispatch({
            type: actionTypes.SET_SHOW_MODAL,
            showModal: false,
          });
        })
        .catch((error) => alert(error));
    }
  };
  const submitAchievement = (e) => {
    if (achievementImageAsFile) {
      dispatch({
        type: actionTypes.SET_SHOW_MODAL,
        showModal: true,
      });
      e.preventDefault();
      uploadAchievement(achievementImageAsFile)
        .then(() => {
          setAchievementImageAsFile(``);
          dispatch({
            type: actionTypes.SET_SHOW_MODAL,
            showModal: false,
          });
        })
        .catch((error) => alert(error));
    }
  };
  const submitProject = (e) => {
    if (name && link && type) {
      //https://play-lh.googleusercontent.com/1d6v9czdjxdIMEkb_uAPKN3A_HzjwPtkSdbEDbiAXbnrHS2fC9-d2T3ZKlJQQI6weEo=s180-rw
      e.preventDefault();
      if (projectImageAsFile) {
        uploadProject({
          name,
          link,
          type,
          image: projectImageAsFile,
        })
          .then(() => {
            setProjectImageAsFile(``);
            setName(``);
            setLink(``);
            setType(``);
            dispatch({
              type: actionTypes.SET_SHOW_MODAL,
              showModal: false,
            });
          })
          .catch((error) => alert(error));
      }
      if (imageLink) {
        dispatch({
          type: actionTypes.SET_SHOW_MODAL,
          showModal: true,
        });
        saveProject({
          name,
          link,
          type,
          image: imageLink,
        })
          .then(() => {
            setImageLink(``);
            setName(``);
            setLink(``);
            setType(``);
            dispatch({
              type: actionTypes.SET_SHOW_MODAL,
              showModal: false,
            });
          })
          .catch((error) => alert(error));
      }
    }
  };

  const handleAchievementImageChange = (e) => {
    const image = e.target.files[0];
    setAchievementImageAsFile((imageFile) => image);
  };
  const handleProjectImageChange = (e) => {
    const image = e.target.files[0];
    setProjectImageAsFile((imageFile) => image);
  };

  return (
    <div
      style={{ background: mode === "light" ? "whitesmoke" : "#111111" }}
      className={adminStyles.admin}
    >
      <h2 style={{ color: mode === "light" ? "#111111" : "whitesmoke" }}>
        Videos
      </h2>
      <input
        type="text"
        placeholder="Video iFrame Link"
        value={video}
        onChange={(e) => setVideo(e.target.value)}
      />
      <button onClick={submitVideo}>UPLOAD</button>
      <h2 style={{ color: mode === "light" ? "#111111" : "whitesmoke" }}>
        Gaming
      </h2>
      <input
        value={gamePlay}
        type="text"
        placeholder="GamePlay iFrame Link"
        onChange={(e) => setGamePlay(e.target.value)}
      />
      <button onClick={submitGamePlayVideo}>UPLOAD</button>
      <h2 style={{ color: mode === "light" ? "#111111" : "whitesmoke" }}>
        Achievements
      </h2>
      <input
        type="file"
        onChange={handleAchievementImageChange}
        style={{ color: mode === "light" ? "#111111" : "whitesmoke" }}
      />
      <button onClick={submitAchievement}>UPLOAD</button>
      <h2 style={{ color: mode === "light" ? "#111111" : "whitesmoke" }}>
        Projects
      </h2>
      <input
        value={name}
        type="text"
        placeholder="Project name"
        onChange={(e) => setName(e.target.value)}
      />
      <input
        value={link}
        type="text"
        placeholder="Project Link"
        onChange={(e) => setLink(e.target.value)}
      />
      <input
        value={type}
        type="text"
        placeholder="Project Type"
        onChange={(e) => setType(e.target.value)}
      />
      <input
        value={imageLink}
        type="text"
        placeholder="Project Image Link"
        onChange={(e) => setImageLink(e.target.value)}
      />
      <input
        type="file"
        onChange={handleProjectImageChange}
        style={{ color: mode === "light" ? "#111111" : "whitesmoke" }}
      />
      <button onClick={submitProject}>UPLOAD</button>
      <h2 style={{ color: mode === "light" ? "#111111" : "whitesmoke" }}>
        Contact
      </h2>
      {contactData.map((contact) => (
        <div className={adminStyles.contactDataCard} key={contact.id}>
          <h3>{contact.name}</h3>
          <h5>{contact.email}</h5>
          <p>{contact.description}</p>
        </div>
      ))}
    </div>
  );
};

export default devom;
