import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const CoctailsNotFound = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate("/", { replace: true });
    }, 10000);
    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <div className="flex flex-col justify-center items-center">
      <h3 className="text-center text-7xl my-4">Redirect at 10 seconds</h3>
      <button
        className="px-5 py-2 bg-amber-200 text-3xl border-2 rounded-2xl my-4 hover:bg-amber-400 transition cursor-pointer"
        onClick={() => navigate("/")}
      >
        If you want faster, CLICK HERE
      </button>
      <img
        src="/public/images/404.jpg"
        alt="Page not found 404"
        className="w-[60%]"
      />
    </div>
  );
};

export default CoctailsNotFound;
