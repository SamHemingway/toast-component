import React from "react";

export default function useKeydown(key, cb) {
  React.useEffect(() => {
    function handleKeydown(event) {
      cb(event.key);
    }
    window.addEventListener("keydown", handleKeydown);

    return () => {
      window.removeEventListener("keydown", handleKeydown);
    };
  }, []);
}
