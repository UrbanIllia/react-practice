import { TbBrandRedux } from 'react-icons/tb';
import { MdOutlineDeleteForever } from 'react-icons/md';
import AddForm from './AddForm';
import getRandomColorLight from '../../../utils/getRandomColorLight';

const ReduxToDoList = () => {
  return (
    <div className="mx-auto flex min-h-screen w-[60%] flex-col items-center gap-4 bg-gray-100 p-6">
      <AddForm />
      <input
        type="text"
        placeholder="Enter something for search..."
        className="mt-4 w-full rounded-md border border-gray-300 px-4 py-2 focus:ring-2 focus:ring-blue-500 focus:outline-none"
      />
      {/* <ul className="w-full space-y-2">
        {filteredDate.map((item) => (
          <li
            key={item.id}
            className="flex flex-row items-center justify-between rounded-md bg-white p-3 shadow-sm transition duration-200 hover:bg-gray-50"
          >
            <div className="flex flex-row items-center justify-center gap-2">
              <TbBrandRedux color={getRandomColorLight()} />
              <p>
                <strong>Todo: </strong> {item.todo}
              </p>
              <p>
                <strong>Author: </strong> {item.author}
              </p>
            </div>

            <button
              className="cursor-pointer"
            >
              <MdOutlineDeleteForever size={20} color="red" />
            </button>
          </li>
        ))}
      </ul> */}
    </div>
  );
};

export default ReduxToDoList;
