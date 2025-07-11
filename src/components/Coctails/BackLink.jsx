import { Link } from "react-router-dom";
import { FaArrowUpFromBracket } from "react-icons/fa6";

export const BackLink = ({ children, to }) => {
  return (
    <div>
      <Link
        to={to}
        className="bg-gradient-to-r from-amber-200 via-amber-400 to-amber-500
         absolute right-0 bottom-0 text-black px-3 py-2 rounded-lg text-lg
         hover:from-amber-300 hover:via-amber-500 hover:to-amber-600 transition cursor-pointer"
      >
        {children}
        <FaArrowUpFromBracket size={40} />
      </Link>
    </div>
  );
};
