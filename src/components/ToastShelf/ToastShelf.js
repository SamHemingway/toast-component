import React from "react";

import Toast from "../Toast";
import styles from "./ToastShelf.module.css";
import { ToastContext } from "../ToastProvider";

function ToastShelf() {
  const { toastMessages } = React.useContext(ToastContext);

  return (
    toastMessages.length > 0 && (
      <ol
        className={styles.wrapper}
        role="region"
        aria-live="assertive"
        aria-label="notification"
      >
        {toastMessages.map(({ variant, message, id }) => {
          return (
            <li
              className={styles.toastWrapper}
              key={id}
            >
              <Toast
                variant={variant}
                id={id}
              >
                {message}
              </Toast>
            </li>
          );
        })}
      </ol>
    )
  );
}

export default React.memo(ToastShelf);
