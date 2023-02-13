import React from "react";
import useKeydown from "../../hooks/useKeydown";
export const ToastContext = React.createContext();

function ToastProvider({ children }) {
  const [variantChoice, setVariantChoice] = React.useState("notice");
  const [toastMessage, setToastMessage] = React.useState(
    `This is a toast message!`
  );

  const [toastMessages, setToastMessages] = React.useState([]);

  const handleEscape = React.useCallback(() => {
    setToastMessages([]);
  }, []);

  useKeydown("Escape", handleEscape);

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

  function handleDismiss(id) {
    const nextToasts = toastMessages.filter((toast) => toast.id !== id);
    setToastMessages(nextToasts);
  }

  return (
    <ToastContext.Provider
      value={{
        variantChoice,
        setVariantChoice,
        toastMessage,
        setToastMessage,
        toastMessages,
        setToastMessages,
        handleAddToast,
        handleDismiss,
      }}
    >
      {children}
    </ToastContext.Provider>
  );
}

export default ToastProvider;
