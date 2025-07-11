import React, { useEffect, useRef, useState } from "react";
import { Link, Outlet, useLocation, useParams } from "react-router-dom";
import { getUserById } from "./usersbyId";
import { TbArrowBack } from "react-icons/tb";
import LoaderUser from "./LoaderUser";

const UsersDetails = () => {
  const [user, setUser] = useState({});
  const [loader, setLoader] = useState(false);
  const { userId } = useParams();
  // const navigate = useNavigate();
  const location = useLocation();
  const goBackRef = useRef(location.state ?? "/users");

  useEffect(() => {
    const getData = async () => {
      try {
        setLoader(true);
        const response = await getUserById(userId);
        setUser(response.data);
      } catch (error) {
        console.log(error);
      } finally {
        setLoader(false);
      }
    };
    getData();
  }, [userId]);

  return (
    <div className=" bg-black text-white p-6 flex flex-col justify-center ">
      {loader && <LoaderUser />}
      {Object.keys(user).length > 0 ? (
        <div className=" bg-black p-6 rounded-lg shadow-lg">
          <img
            src={user.image}
            alt={`${user.firstName} ${user.lastName}`}
            className="w-[380px] h-auto object-cover rounded-full mx-auto mb-4"
          />
          <h2 className="text-5xl font-bold text-center">
            {user.firstName} {user.lastName}
          </h2>
          <p className="text-lg mt-2 text-center">
            <strong>Company:</strong>{" "}
            <span className="text-orange-200">
              {user.company?.name || "N/A"}
            </span>
          </p>
          <p className="text-lg mt-2 text-center">
            <strong>Phone:</strong>
            <span className="text-orange-200"> {user.phone || "N/A"}</span>
          </p>
          <p className="text-lg mt-2 text-center">
            <strong>Role:</strong>{" "}
            <span className="text-orange-200">{user.role || "N/A"}</span>
          </p>
          <p className="text-lg mt-2 text-center">
            <strong>University:</strong>{" "}
            <span className="text-orange-200">{user.university || "N/A"}</span>
          </p>
          <p className="text-lg mt-2 text-center">
            <strong>Address:</strong>{" "}
            <span className="text-orange-200">
              {user.address?.address || "N/A"},{user.address?.city || ""},{" "}
              {user.address?.country || ""}
            </span>
          </p>
        </div>
      ) : (
        <p className="text-center">Loading user details...</p>
      )}
      <Link
        to="posts"
        className="text-white px-2 py-2 border-1 border-white rounded-2xl w-[120px] mx-auto mt-3
              flex justify-center items-center mb-5 hover:bg-gray-800 transition hover:scale-[1.03] "
      >
        Posts
      </Link>
      <Outlet />
      <Link
        to={goBackRef.current}
        className="px-2 py-2 border-1 border-white rounded-2xl w-[120px] mx-auto mt-3
              flex justify-center items-center hover:bg-gray-800
              \ transition hover:scale-[1.03] text-white cursor-pointer self-center"
      >
        <TbArrowBack size={40} />
      </Link>
    </div>
  );
};

export default UsersDetails;
