import React from "react";

import ToastShelf from "../ToastShelf";
import styles from "./ToastPlayground.module.css";
import ToastCreator from "../ToastCreator";

function ToastPlayground() {
  return (
    <div className={styles.wrapper}>
      <header>
        <img
          alt="Cute toast mascot"
          src="/toast.png"
        />
        <h1>Toast Playground</h1>
      </header>

      <ToastShelf />
      <ToastCreator />
    </div>
  );
}

export default ToastPlayground;
