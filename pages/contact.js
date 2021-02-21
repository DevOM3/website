import React, { useEffect, useState } from "react";
import { actionTypes } from "../context/reducer";
import { useStateValue } from "../context/StateProvider";
import contactStyles from "../styles/pages/Contact.module.css";

const contact = () => {
  const [{ mode }, dispatch] = useStateValue();
  const [showNamePlaceholder, setShowNamePlaceholder] = useState(false);
  const [showEmailPlaceholder, setShowEmailPlaceholder] = useState(false);
  const [showDescriptionPlaceholder, setShowDescriptionPlaceholder] = useState(
    false
  );
  const [name, setName] = useState("");
  const [nameError, setNameError] = useState("");
  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState("");
  const [description, setDescription] = useState("");
  const [descriptionError, setDescriptionError] = useState("");

  useEffect(() => {
    dispatch({
      type: actionTypes.SET_CURRENT_PAGE,
      currentPage: "Contact",
    });
  }, []);

  const ping = (e) => {
    e.preventDefault();

    if (
      name.trim().length < 2 ||
      email.trim().length < 3 ||
      !email.includes("@") ||
      description.trim().length < 7
    ) {
      name.length < 2 &&
        setNameError(`Name must be at least 2 characters long`);
      (email.length < 3 || !email.includes("@")) &&
        setEmailError(`Enter a valid E-mail`);
      description.length < 7 &&
        setDescriptionError(
          `Description is not as long as expected (7 Characters)`
        );
    } else {
      fetch(`/api/contact`, {
        method: "POST",
        body: JSON.stringify({
          name,
          email,
          description,
        }),
      })
        .then((response) => response.json())
        .then((data) => {
          setName("");
          setEmail(``);
          setDescription("");
          dispatch({
            type: actionTypes.SET_SHOW_MODAL,
            showModal: true,
          });
          dispatch({ type: actionTypes.SET_FOR_PROMPT, forPrompt: true });
        });
    }
  };

  return (
    <div
      style={{
        background:
          mode === "light"
            ? `linear-gradient(to bottom, #f1f4f9, #dff1ff)`
            : `url("https://www.wallpapertip.com/wmimgs/79-791580_wallpapers-cool-red-and-black-background.jpg")  no-repeat center center fixed`,
      }}
      className={contactStyles.contact}
    >
      {mode === "light" ? (
        <>
          <div className={contactStyles.lightColor}></div>
          <div className={contactStyles.lightColor}></div>
          <div className={contactStyles.lightColor}></div>
        </>
      ) : (
        <></>
      )}
      <form
        className={
          mode === "light" ? contactStyles.form : contactStyles.darkForm
        }
      >
        <h2 className={contactStyles.heading}>Contact Me</h2>
        <input
          value={name}
          onChange={(e) => {
            setName(e.target.value);
            nameError && e.target.value.trim().length >= 2 && setNameError(``);
          }}
          className={
            mode === "light" ? contactStyles.input : contactStyles.darkInput
          }
          placeholder={!showNamePlaceholder ? "What should I call you?" : ""}
          type="text"
          name="name"
          id="name"
          onFocus={() => setShowNamePlaceholder(true)}
          onBlur={() => setShowNamePlaceholder(false)}
        />
        {nameError && <p className={contactStyles.errorText}>{nameError}</p>}
        <input
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
            emailError &&
              e.target.value.trim().length >= 3 &&
              e.target.value.includes("@") &&
              setEmailError(``);
          }}
          className={
            mode === "light" ? contactStyles.input : contactStyles.darkInput
          }
          placeholder={!showEmailPlaceholder ? "Your E-mail ID" : ""}
          type="email"
          name="email"
          id="email"
          onFocus={() => setShowEmailPlaceholder(true)}
          onBlur={() => setShowEmailPlaceholder(false)}
        />
        {emailError && <p className={contactStyles.errorText}>{emailError}</p>}
        <textarea
          value={description}
          onChange={(e) => {
            setDescription(e.target.value);
            descriptionError &&
              e.target.value.trim().length >= 7 &&
              setDescriptionError(``);
          }}
          className={
            mode === "light" ? contactStyles.input : contactStyles.darkInput
          }
          placeholder={
            !showDescriptionPlaceholder
              ? "What do you wanna say/ask/suggest?"
              : ""
          }
          name="description"
          id="description"
          cols="30"
          rows="10"
          onFocus={() => setShowDescriptionPlaceholder(true)}
          onBlur={() => setShowDescriptionPlaceholder(false)}
        ></textarea>
        {descriptionError && (
          <p className={contactStyles.errorText}>{descriptionError}</p>
        )}
        <button
          className={
            mode === "light" ? contactStyles.button : contactStyles.darkButton
          }
          onClick={ping}
        >
          PING
        </button>
      </form>
    </div>
  );
};

export default contact;
