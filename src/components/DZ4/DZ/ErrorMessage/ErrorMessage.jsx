const ErrorMessage = ({ message }) => {
  return (
    <div>
      <p className="text-red-600 text-[70px] text-center">{message}!</p>
    </div>
  );
};

export default ErrorMessage;
