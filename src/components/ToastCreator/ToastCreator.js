import React from "react";
import { ToastContext } from "../ToastProvider";
import styles from "../ToastPlayground/ToastPlayground.module.css";
import Button from "../Button";

const VARIANT_OPTIONS = ["notice", "warning", "success", "error"];

function ToastCreator() {
  const {
    variantChoice,
    setVariantChoice,
    toastMessage,
    setToastMessage,
    handleAddToast,
  } = React.useContext(ToastContext);

  return (
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
  );
}

export default ToastCreator;
