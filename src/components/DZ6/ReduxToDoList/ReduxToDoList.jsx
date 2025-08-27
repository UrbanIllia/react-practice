import { TbBrandRedux } from 'react-icons/tb';
import { MdOutlineDeleteForever } from 'react-icons/md';
import AddForm from './AddForm';
import { useDispatch, useSelector } from 'react-redux';
import { nanoid } from '@reduxjs/toolkit';
import getRandomColorLight from '../../../utils/getRandomColorLight';
import { toast } from 'react-toastify';
import { addQuery, addTodo, deleteTodo } from '../../../redux/todoSlice';

const ReduxToDoList = () => {
  const todos = useSelector((state) => state.todos.todos);
  const filter = useSelector((state) => state.todos.filter);
  const dispatch = useDispatch();

  const handleAddTodo = ({ author, todo }) => {
    if (!author || !todo) {
      return toast.error('Is not full');
    }
    const isExist = todos.some((item) => item.todo === todo);
    if (isExist) {
      return toast.error('We have this schet');
    }
    const newTodo = {
      id: nanoid(),
      author: author,
      todo: todo,
      completed: false,
    };
    // console.log(newTodo);
    dispatch(addTodo(newTodo));
  };

  const handleSearch = (event) => {
    dispatch(addQuery(event.target.value));
  };

  const filtered = todos.filter((item) =>
    item.todo.toLowerCase().includes(filter.toLowerCase()),
  );

  return (
    <div className="mx-auto flex min-h-screen w-[60%] flex-col items-center gap-4 bg-gray-100 p-6">
      <AddForm handleAddTodo={handleAddTodo} />
      {todos.length > 0 && (
        <input
          type="text"
          value={filter}
          onChange={handleSearch}
          placeholder="Enter something for search..."
          className="mt-4 w-[300px] rounded-md border border-gray-300 px-4 py-2 focus:ring-2 focus:ring-blue-500 focus:outline-none"
        />
      )}

      <ul className="w-full space-y-2">
        {filtered.map((item) => (
          <li
            key={item.id}
            className="mx-auto flex w-[60%] flex-row items-center justify-between rounded-md bg-white p-3 shadow-sm transition duration-200 hover:bg-gray-50"
          >
            <div className="flex flex-row items-center justify-center gap-2">
              <TbBrandRedux color={getRandomColorLight()} />
              <h3>
                <strong>Todo: </strong> {item.todo}
              </h3>
              <p>
                <strong>Author: </strong> {item.author}
              </p>
            </div>

            <button className="cursor-pointer">
              <MdOutlineDeleteForever
                size={20}
                color="red"
                onClick={() => dispatch(deleteTodo(item.id))}
              />
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ReduxToDoList;
