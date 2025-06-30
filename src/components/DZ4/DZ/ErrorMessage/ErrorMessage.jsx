
import { MdErrorOutline } from "react-icons/md";
const ErrorMessage = () => {
  return (
    <div className="flex flex-col gap-4 justify-center items-center">
      <h3 className="text-red-600 font-bold text-5xl">ERROR!!!</h3>
      <MdErrorOutline size={180} color="green" />
    </div>
  );
};

export default ErrorMessage;
