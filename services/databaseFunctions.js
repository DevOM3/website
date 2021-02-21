import { db, storage } from "./firebase";
import firebase from "firebase";

export const getContactData = async () => {
  return await db.collection("Contacts").orderBy("at", "desc").get();
};

export const saveContactData = async (data) => {
  await db
    .collection("Contacts")
    .add({ ...data, at: firebase.firestore.FieldValue.serverTimestamp() });
};

export const getVideosData = async () => {
  return await db.collection("Videos").orderBy("at", "desc").get();
};

export const getGamingData = async () => {
  return await db.collection("Gaming").orderBy("at", "desc").get();
};

export const uploadVideo = async (video) => {
  return await db
    .collection("Videos")
    .add({ video: video, at: firebase.firestore.FieldValue.serverTimestamp() });
};

export const uploadGamePlay = async (video) => {
  return await db
    .collection("Gaming")
    .add({ video: video, at: firebase.firestore.FieldValue.serverTimestamp() });
};

export const uploadAchievement = async (achievement) => {
  await storage
    .ref(`/achievements/${achievement.name}`)
    .put(achievement)
    .then(() =>
      storage
        .ref("achievements")
        .child(achievement.name)
        .getDownloadURL()
        .then((fireBaseUrl) => {
          db.collection("Achievements").add({
            achievementImage: fireBaseUrl,
            at: firebase.firestore.FieldValue.serverTimestamp(),
          });
        })
    );
};

export const uploadProject = async (projectObject) => {
  await storage
    .ref(`/projects/${projectObject.image.name}`)
    .put(projectObject.image)
    .then(() =>
      storage
        .ref("projects")
        .child(projectObject.image.name)
        .getDownloadURL()
        .then((fireBaseUrl) => {
          db.collection("Projects").add({
            name: projectObject.name,
            link: projectObject.link,
            image: fireBaseUrl,
            type: projectObject.type,
            at: firebase.firestore.FieldValue.serverTimestamp(),
          });
        })
    );
};

export const saveProject = async (projectObject) => {
  await db.collection("Projects").add({
    name: projectObject.name,
    link: projectObject.link,
    image: projectObject.image,
    type: projectObject.type,
    at: firebase.firestore.FieldValue.serverTimestamp(),
  });
};

export const getAchievements = async () => {
  return await db.collection("Achievements").orderBy("at", "asc").get();
};

export const getProjects = async () => {
  return await db.collection("Projects").orderBy("at", "asc").get();
};
