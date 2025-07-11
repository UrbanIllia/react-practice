import React from 'react';
import { FaFemale } from 'react-icons/fa';
import { FaMale } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const UsersList = ({ users, state }) => {
  //   const gender = users.gender;
  return (
    <ul className="grid grid-cols-4 justify-center gap-6">
      {users?.map((item) => (
        <Link to={`${item.id}`} state={state}>
          <li
            key={item.id}
            className="tranition flex cursor-pointer flex-row items-center justify-between rounded-2xl border-2 border-white px-8 py-4 text-center text-xl text-white hover:bg-gray-800"
          >
            <div>
              {' '}
              <h3>{item.firstName}</h3>
              <h3>{item.lastName}</h3>
            </div>

            {item.gender === 'female' ? (
              <FaFemale size={30} color="gold" />
            ) : item.gender === 'male' ? (
              <FaMale size={30} color="gold" />
            ) : null}
          </li>
        </Link>
      ))}
    </ul>
  );
};

export default UsersList;
