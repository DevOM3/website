import React, { useEffect } from "react";
import projectsStyle from "../styles/pages/Projects.module.css";
import mobileProjectsStyles from "../styles/pages/MobileProjects.module.css";
import { useStateValue } from "../context/StateProvider";
import { actionTypes } from "../context/reducer";
import { getProjects } from "../services/databaseFunctions";

export const getStaticProps = async () => {
  const projectsData = await getProjects();
  const projectList = projectsData.docs.map((project) => ({
    id: project.id,
    title: project.data().name,
    image: project.data().image,
    link: project.data().link,
    type: project.data().type,
  }));

  return {
    props: {
      projectList,
    },
  };
};

const projects = ({ projectList }) => {
  const [{ mode }, dispatch] = useStateValue();

  useEffect(() => {
    window.onload = window.scrollTo(0, 0);
    dispatch({
      type: actionTypes.SET_CURRENT_PAGE,
      currentPage: "Projects",
    });
    window.onload = window.scrollTo(0, 0);
  }, []);

  useEffect(() => (window.onload = window.scrollTo(0, 0)), [projectList]);

  return (
    <div
      style={{ background: mode === "light" ? "whitesmoke" : "#121212" }}
      className={projectsStyle.projects}
    >
      <div className={mobileProjectsStyles.mobileApps}>
        {projectList
          .filter((project) => project.type === "App")
          .map((projectData) => (
            <a target="_blank" href={projectData.link}>
              <div
                className={
                  mode === "light"
                    ? mobileProjectsStyles.appDiv
                    : mobileProjectsStyles.appDivDark
                }
              >
                <img
                  className={mobileProjectsStyles.appImage}
                  src={projectData.image}
                />
                <span
                  style={{
                    background:
                      mode === "light"
                        ? "rgba(255, 255, 255, 0.4)"
                        : "rgba(0, 0, 0, 0.4)",
                    color: mode === "light" ? "black" : "white",
                  }}
                  className={mobileProjectsStyles.appTitle}
                  dangerouslySetInnerHTML={{ __html: projectData.title }}
                ></span>
              </div>
            </a>
          ))}
      </div>
      {projectList
        .filter((project) => project.type === "Website")
        .map((projectData) => (
          <a target="_blank" href={projectData.link}>
            <div
              className={
                mode === "light"
                  ? projectsStyle.websiteDiv
                  : projectsStyle.websiteDivDark
              }
            >
              <object
                style={{ background: "white " }}
                onLoad={() => self.scroll(0, 0)}
                className={
                  mode === "light"
                    ? projectsStyle.website
                    : projectsStyle.websiteDark
                }
                type="text/html"
                data={projectData.link}
              ></object>
              <img
                className={projectsStyle.websiteImage}
                src={projectData.image}
              />
              <span
                style={{
                  background:
                    mode === "light"
                      ? "rgba(255, 255, 255, 0.4)"
                      : "rgba(0, 0, 0, 0.4)",
                  color: mode === "light" ? "black" : "white",
                }}
                className={projectsStyle.websiteTitle}
                dangerouslySetInnerHTML={{ __html: projectData.title }}
              ></span>
              {/* <div className={projectsStyle.visitButtonContainer}>
            <a
              className={projectsStyle.visitButton}
              target="_blank"
              href={website}
            >
              Visit
            </a>
          </div> */}
            </div>
          </a>
        ))}
    </div>
  );
};

export default projects;
