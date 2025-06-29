import React from "react";

const ErrorMessage = ({ message }) => {
  return (
    <div>
      <p className="text-[46px] text-red-700 text-center">{message}</p>
    </div>
  );
};

export default ErrorMessage;
