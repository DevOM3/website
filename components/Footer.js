import { IconButton } from "@material-ui/core";
import React from "react";
import { useStateValue } from "../context/StateProvider";
import footerStyle from "../styles/components/Footer.module.css";
import FacebookIcon from "@material-ui/icons/Facebook";
import InstagramIcon from "@material-ui/icons/Instagram";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import GitHubIcon from "@material-ui/icons/GitHub";
import TwitterIcon from "@material-ui/icons/Twitter";
import YouTubeIcon from "@material-ui/icons/YouTube";

const Footer = () => {
  const [{ mode }] = useStateValue();

  return (
    <div
      style={{
        backgroundColor: mode === "light" ? "white" : "black",
      }}
      className={footerStyle.footer}
    >
      <div className={footerStyle.socials}>
        <IconButton
          href="https://www.facebook.com/om.londhe.332/"
          target="_blank"
          className={[
            footerStyle.socialIconButton,
            footerStyle.facebookIconButton,
          ]}
        >
          <FacebookIcon
            className={[footerStyle.socialIcon, footerStyle.facebookIcon]}
          />
        </IconButton>
        <IconButton
          href="https://www.instagram.com/theomlondhe/"
          target="_blank"
          className={[
            footerStyle.socialIconButton,
            footerStyle.instagramIconButton,
          ]}
        >
          <InstagramIcon
            className={[footerStyle.socialIcon, footerStyle.instagramIcon]}
          />
        </IconButton>
        <IconButton
          href="https://www.linkedin.com/in/omlondhe/"
          target="_blank"
          className={[
            footerStyle.socialIconButton,
            footerStyle.linkedInIconButton,
          ]}
        >
          <LinkedInIcon
            className={[footerStyle.socialIcon, footerStyle.linkedInIcon]}
          />
        </IconButton>
        <IconButton
          href="https://github.com/DevOM3"
          target="_blank"
          className={[
            footerStyle.socialIconButton,
            mode === "light"
              ? footerStyle.gitHubIconButton
              : footerStyle.gitHubIconButtonDark,
          ]}
        >
          <GitHubIcon
            className={[footerStyle.socialIcon, footerStyle.gitHubIcon]}
          />
        </IconButton>
        <IconButton
          href="https://twitter.com/OmLondhe2003"
          target="_blank"
          className={[
            footerStyle.socialIconButton,
            footerStyle.twitterIconButton,
          ]}
        >
          <TwitterIcon
            className={[footerStyle.socialIcon, footerStyle.twitterIcon]}
          />
        </IconButton>
        <IconButton
          href="https://www.youtube.com/channel/UC37r_ioco3IGWroy2ZYAj-g"
          target="_blank"
          className={[
            footerStyle.socialIconButton,
            footerStyle.youTubeIconButton,
          ]}
        >
          <YouTubeIcon
            className={[footerStyle.socialIcon, footerStyle.youTubeIcon]}
          />
        </IconButton>
        <IconButton
          href="https://www.youtube.com/channel/UCP9Ga6L1FcfTY5tme8GXinw/videos"
          target="_blank"
          className={[
            footerStyle.socialIconButton,
            footerStyle.youTubeIconButton,
          ]}
        >
          <YouTubeIcon
            className={[footerStyle.socialIcon, footerStyle.youTubeIcon]}
          />
        </IconButton>
      </div>
      <span style={{ color: mode === "light" ? "black" : "whitesmoke" }}>
        Copyright &copy; DevOM for lifetime
      </span>
    </div>
  );
};

export default Footer;
