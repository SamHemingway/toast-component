import React from "react";

import Button from "../Button";
import ToastShelf from "../ToastShelf";

import styles from "./ToastPlayground.module.css";

const VARIANT_OPTIONS = ["notice", "warning", "success", "error"];

function ToastPlayground() {
  const [variantChoice, setVariantChoice] = React.useState("notice");
  const [toastMessage, setToastMessage] = React.useState(
    `This is a toast message!`
  );
  const [toastMessages, setToastMessages] = React.useState([]);

  function handleAddToast() {
    const nextToast = {
      variant: variantChoice,
      message: toastMessage,
      id: crypto.randomUUID(),
    };
    const nextToastMessages = [...toastMessages, nextToast];
    setToastMessages(nextToastMessages);
    setToastMessage("");
    setVariantChoice("notice");
  }

  return (
    <div className={styles.wrapper}>
      <header>
        <img
          alt="Cute toast mascot"
          src="/toast.png"
        />
        <h1>Toast Playground</h1>
      </header>

      {toastMessages.length > 0 && (
        <ToastShelf
          toastMessages={toastMessages}
          setToastMessages={setToastMessages}
        />
      )}

      <form
        className={styles.controlsWrapper}
        onSubmit={(event) => {
          event.preventDefault();
          handleAddToast();
        }}
      >
        <div className={styles.row}>
          <label
            htmlFor="message"
            className={styles.label}
            style={{ alignSelf: "baseline" }}
          >
            Message
          </label>
          <div className={styles.inputWrapper}>
            <textarea
              id="message"
              className={styles.messageInput}
              value={toastMessage}
              onChange={(event) => {
                const nextToastMessage = event.target.value;
                setToastMessage(nextToastMessage);
              }}
            />
          </div>
        </div>

        <div className={styles.row}>
          <div className={styles.label}>Variant</div>
          <div className={`${styles.inputWrapper} ${styles.radioWrapper}`}>
            {VARIANT_OPTIONS.map((option, index) => {
              return (
                <label
                  htmlFor={`variant-${option}`}
                  key={index}
                >
                  <input
                    id={`variant-${option}`}
                    type="radio"
                    name="variant"
                    value={option}
                    checked={variantChoice === option}
                    onChange={(event) => setVariantChoice(event.target.value)}
                  />
                  {option}
                </label>
              );
            })}
          </div>
        </div>
        <div className={styles.row}>
          <div className={styles.label} />
          <div className={`${styles.inputWrapper} ${styles.radioWrapper}`}>
            <Button>Pop Toast!</Button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default ToastPlayground;
