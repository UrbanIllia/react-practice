import React from "react";
import { FaFemale } from "react-icons/fa";
import { FaMale } from "react-icons/fa";
import { Link } from "react-router-dom";

const UsersList = ({ users, state }) => {
  //   const gender = users.gender;
  return (
    <ul className="grid grid-cols-4 gap-6 justify-center ">
      {users?.map((item) => (
        <Link to={`/users/${item.id}`} state={state}>
          <li
            key={item.id}
            className="text-white px-8 py-4 border-white border-2 text-center text-xl
          rounded-2xl hover:bg-gray-800 tranition cursor-pointer flex flex-row justify-between items-center"
          >
            <div>
              {" "}
              <h3>{item.firstName}</h3>
              <h3>{item.lastName}</h3>
            </div>

            {item.gender === "female" ? (
              <FaFemale size={30} color="gold" />
            ) : item.gender === "male" ? (
              <FaMale size={30} color="gold" />
            ) : null}
          </li>
        </Link>
      ))}
    </ul>
  );
};

export default UsersList;
