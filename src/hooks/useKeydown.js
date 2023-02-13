import React from "react";

export default function useKeydown(key, cb) {
  React.useEffect(() => {
    function handleKeydown(event) {
      if (event.code !== key) return;
      cb(event);
    }
    window.addEventListener("keydown", handleKeydown);

    return () => {
      window.removeEventListener("keydown", handleKeydown);
    };
  }, [key, cb]);
}
