import React, { useEffect } from "react";
import Typed from "typed.js";
import { actionTypes } from "../context/reducer";
import { useStateValue } from "../context/StateProvider";
import aboutStyles from "../styles/pages/About.module.css";

const about = () => {
  const [{ mode }, dispatch] = useStateValue();

  useEffect(() => {
    dispatch({
      type: actionTypes.SET_CURRENT_PAGE,
      currentPage: "About",
    });

    var options = {
      strings: [
        ` ^1111
        Hello 👋, what's up?
        <br />
        <br />
        You know me as DevOM and you also know that I make YouTube videos 📽,
        I do streaming, I am a geek 🤓, a techy 👨‍💻. I teach Programming,
        Development 💻, New Technologies, Best Practices and many more things
        😚. Thinking about hacking me 🤯 using the information you have?
        <br />
        <br />
        Wait what? 😎
        <br />
        <br />
        You know almost nothing about me ...... 🙃
        <br />
        Who am I? 🤭
        <br />
        What I do? 😬
        <br />
        Where I live? 🏡
        <br />
        <br />
        NOTHING!!! 😛
        <br />
        <br />
        <br />
        I'm just a student who loves Programming, Coding and Development.
        Wanna know my name? 😁😁😁 I'm not gonna tell you until I reach 💯K on
        YouTube which is my goal 😉.
        <br />
        What I do? 🤔
        <br />
        As I said I am a student 👨‍🎓 so I am still learning 😑. What I am
        learning..... I'm a Computer Science student so I learn outdated
        technologies 😪 and programing languages that our great Indian Eduction
        System 🙄 force us to study and learn 😥 to get F*cking 🥴 useless
        degree 🙄🙄🙄.
        <br />
        Thus I thought that I should come forward and teach what I learnt
        rather than college curriculum 🤗🤗 and contribute to the community so
        that anyone can develop what he/she wants to 😉...
        `,
      ],
      typeSpeed: 24,
      loop: false,
      showCursor: true,
      cursorChar: "_",
    };

    var typed = new Typed(`#about`, options);

    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <div
      className={aboutStyles.about}
      style={{
        background:
          mode === "light"
            ? `linear-gradient(to bottom, #f1f4f9, #dff1ff)`
            : `url("https://www.wallpapertip.com/wmimgs/79-791580_wallpapers-cool-red-and-black-background.jpg")  no-repeat center center fixed`,
      }}
    >
      {mode === "light" ? (
        <>
          <div className={aboutStyles.lightColor}></div>
          <div className={aboutStyles.lightColor}></div>
          <div className={aboutStyles.lightColor}></div>
        </>
      ) : (
        <></>
      )}
      <div
        className={
          mode === "light"
            ? aboutStyles.aboutContainer
            : aboutStyles.darkAboutContainer
        }
      >
        <span
          className={
            mode === "light" ? aboutStyles.lightTitle : aboutStyles.darkTitle
          }
        >
          About
        </span>
        <span
          id="about"
          className={
            mode === "light" ? aboutStyles.lightText : aboutStyles.darkText
          }
        ></span>
      </div>
    </div>
  );
};

export default about;
