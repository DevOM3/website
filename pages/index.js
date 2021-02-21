import anime from "animejs";
import { useEffect } from "react";
import LinkCard from "../components/LinkCard";
import { actionTypes } from "../context/reducer";
import { useStateValue } from "../context/StateProvider";
import styles from "../styles/pages/Home.module.css";

export default function Home() {
  const [{ mode }, dispatch] = useStateValue();

  useEffect(() => {
    dispatch({
      type: actionTypes.SET_CURRENT_PAGE,
      currentPage: "Home",
    });

    const position = document.documentElement;
    position.addEventListener("mousemove", (e) => {
      position.style.setProperty("--x", `${e.clientX}px`);
    });

    const text = document.querySelector(`.${styles.flyingText}`);
    text.innerHTML = text.textContent.replace(/\S/g, "<span>$&</span>");

    const animation = anime.timeline({
      targets: `.${styles.flyingText} span`,
      easing: "easeInOutExpo",
      loop: false,
    });
    animation
      .add({
        rotate: () => {
          return anime.random(-360, 360);
        },
        translateX: () => {
          return anime.random(-500, 500);
        },
        translateY: () => {
          return anime.random(-500, 500);
        },
        duration: 5000,
        delay: anime.stagger(21),
      })
      .add({
        rotate: 0,
        translateX: 0,
        translateY: 0,
        duration: 5000,
        delay: anime.stagger(21),
      });
  }, []);

  return (
    <div
      style={{ background: mode === "light" ? "whitesmoke" : "#111111" }}
      className={styles.container}
    >
      <section
        style={{
          background: mode === "light" ? "whitesmoke" : "#111111",
        }}
        className={styles.textSection}
      >
        <div className={styles.text}>
          <h2
            className={mode === "light" ? styles.h2 : styles.h2dark}
            style={{ "--i": 0.5 }}
          >
            <span>Welcome to DevOM 😎</span>
            <span>Development</span>
            <span>Apps</span>
            <span>Coding</span>
            <span>Python</span>
            <span>Web</span>
            <span>Apps</span>
            <span>Fullstack</span>
            <span>Tech</span>
            <span>JavaScript</span>
          </h2>
          <h2
            className={mode === "light" ? styles.h2 : styles.h2dark}
            style={{ "--i": 1.5 }}
          >
            <span>HTML</span>
            <span>CSS</span>
            <span>Flutter</span>
            <span>ReactJS</span>
            <span>NextJS</span>
            <span>Frontend</span>
            <span>Programming 💻</span>
            <span>Coding</span>
            <span>Tech</span>
            <span>DevOM</span>
          </h2>
          <h2
            className={mode === "light" ? styles.h2 : styles.h2dark}
            style={{ "--i": 2.5 }}
          >
            <span>Programming 💻</span>
            <span>Development</span>
            <span>Coding</span>
            <span>Freelancing</span>
            <span>Python JS</span>
            <span>Web</span>
            <span>Freelancing</span>
            <span>Tech</span>
            <span>DevOM</span>
          </h2>
          <h2
            className={mode === "light" ? styles.h2 : styles.h2dark}
            style={{ "--i": 2.25 }}
          >
            <span>Welcome to DevOM 😎</span>
            <span>Programming 💻</span>
            <span>Development</span>
            <span>Freelancing</span>
            <span>Python JS</span>
            <span>Backend</span>
            <span>Web</span>
            <span>Apps</span>
            <span>Tech</span>
            <span>DevOM</span>
          </h2>
          <h2
            className={mode === "light" ? styles.h2 : styles.h2dark}
            style={{ "--i": 1.25 }}
          >
            <span>Programming 💻</span>
            <span>Development</span>
            <span>Coding</span>
            <span>Freelancing</span>
            <span>Python JS</span>
            <span>Web</span>
            <span>Apps</span>
            <span>Tech</span>
            <span>DevOM</span>
          </h2>
          <h2
            className={mode === "light" ? styles.h2 : styles.h2dark}
            style={{ "--i": 0.75 }}
          >
            <span>Programming 💻</span>
            <span>Development</span>
            <span>Coding</span>
            <span>Freelancing</span>
            <span>Python JS</span>
            <span>Web</span>
            <span>Apps</span>
            <span>Tech</span>
            <span>DevOM</span>
          </h2>
          <h2
            className={mode === "light" ? styles.h2 : styles.h2dark}
            style={{ "--i": 3 }}
          >
            <span>Welcome to DevOM 😎</span>
            <span>Programming 💻</span>
            <span>Web</span>
            <span>Development</span>
            <span>Freelancing</span>
            <span>Python JS</span>
            <span>Apps</span>
            <span>DevOM</span>
            <span>Tech</span>
            <span>Coding</span>
          </h2>
          <h2
            className={mode === "light" ? styles.h2 : styles.h2dark}
            style={{ "--i": 0.35 }}
          >
            <span>Programming 💻</span>
            <span>Coding</span>
            <span>Development</span>
            <span>Welcome to DevOM 😎</span>
            <span>Apps</span>
            <span>Freelancing</span>
            <span>Python JS</span>
            <span>Tech</span>
            <span>Web</span>
            <span>DevOM</span>
          </h2>
          <h2
            className={mode === "light" ? styles.h2 : styles.h2dark}
            style={{ "--i": 2.35 }}
          >
            <span>Python JS</span>
            <span>Freelancing</span>
            <span>Programming 💻</span>
            <span>Development</span>
            <span>Web</span>
            <span>Coding</span>
            <span>Welcome to DevOM 😎</span>
            <span>Apps</span>
            <span>Tech</span>
            <span>DevOM</span>
          </h2>
        </div>
      </section>
      <div
        className={styles.quickLinks}
        style={{
          background:
            mode === "light"
              ? `linear-gradient(to bottom, #f1f4f9, #dff1ff)`
              : `url("https://www.wallpapertip.com/wmimgs/79-791580_wallpapers-cool-red-and-black-background.jpg")  no-repeat center center fixed`,
        }}
      >
        {mode === "light" ? (
          <>
            <div className={styles.lightColor}></div>
            <div className={styles.lightColor}></div>
            <div className={styles.lightColor}></div>
          </>
        ) : (
          <></>
        )}{" "}
        <LinkCard
          title="Projects"
          description="Click to see my all projects😉. Whether they belongs to the Android 📱 applications category or Web category 💻. Live preview of Websites is also available 🙃 (exclusively for PC)💻"
        />
        <LinkCard
          title="Achievements"
          description="I love 💖 to code, to develope something incredible and thus I do so many things in the field of programming 👨‍💻. Just take a look at some of my biggest Achievements according to me!😛"
        />
        <LinkCard
          title="Videos"
          description="Programming 👨‍💻 and Development is what I love 💖 to do. But YouTube is what I was always fascinated about 🤨. Handling my own YouTube channel is my passion 😁. So I also teach programing up there on my YouTube channel 📹. Take a look at this section 😉"
        />
        <LinkCard
          title="Gaming"
          description="Programming is what I love 💖; But Gaming is what I was doing since I was 8 😙. Can't even imagine my life without Gaming 😶. So, I play and stream lots of games 🎮. Click here to explore more 😋"
        />
        <LinkCard
          title="Contact"
          description="Wanna talk with me? 😄 OR Want to work with me? 🤔 Just visit the Contact section and PING me with ICMP 🤣🤣🤣 (if you know what I mean) and I'll probably be there for you! 😉🙃"
        />
        <LinkCard
          title="About"
          description="Wanna know more about me ? 🤨 Just visit this About section and I will type out everything about me that you must know 😉."
        />
      </div>
      <section
        style={{ background: mode === "light" ? "whitesmoke" : "#111111" }}
        className={styles.flyingTextContainer}
      >
        <p
          style={{ color: mode === "light" ? "black" : "white" }}
          className={styles.flyingText}
        >
          Welcome to DevOM's world.
          <br />
          This is the Portfolio Website or just the place where I showcase my
          projects, my development, my potential, my skills, my achievements,
          etc. You can also watch my educational YouTube videos and my GamePlay
          videos and much more.
          <br />
          This is the place to enrich your skills and passion of programming,
          coding and development by watching my educational YouTube Videos.
          Also, you can visit my projects and use whatever you want from them.
          And entertainment? Watch my GamePlay videos and live-streams if you
          too love playing Video Games like me.
          <br />
          Thank you for visiting and contributing to the traffic on this
          website. Explore the website to know more about me. Hope, you will
          love it!!!
        </p>
      </section>
      {/* <section
        style={{ display: mode === "dark" ? "flex" : "none" }}
        className={styles.circlePlayground}
      >
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
      </section> */}
    </div>
  );
}
