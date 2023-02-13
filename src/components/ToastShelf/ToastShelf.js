import React from "react";

import Toast from "../Toast";
import styles from "./ToastShelf.module.css";

// Dismissing a toast message:
// Remove item with that key/ref from toastMessages

function ToastShelf({ toastMessages, setToastMessages }) {
  function handleDismiss(id) {
    const nextToasts = toastMessages.filter((toast) => toast.id !== id);
    setToastMessages(nextToasts);
  }

  return (
    <ol className={styles.wrapper}>
      {toastMessages.map(({ variant, message, id }) => {
        return (
          <li
            className={styles.toastWrapper}
            key={id}
          >
            <Toast
              variant={variant}
              dismiss={handleDismiss}
              id={id}
            >
              {message}
            </Toast>
          </li>
        );
      })}
    </ol>
  );
}

export default React.memo(ToastShelf);
