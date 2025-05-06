import { useEffect } from "react";

const Modal = () => {
  useEffect(() => {
    const validInterval = setInterval(() => {
      console.log(`Interval - ${Date.now()}`);
    }, 10000);
    return () => {
      clearInterval(validInterval);
    };
  }, []);
  return (
    <div style={{ fontSize: 40, marginBottom: 30 }}>
      Open SetInterval in console and clear if closed
    </div>
  );
};

export default Modal;
