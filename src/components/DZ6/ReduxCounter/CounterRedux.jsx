import { useDispatch, useSelector } from 'react-redux';
import {
  changeStep,
  decrement,
  increment,
  reset,
} from '../../../redux/counterSlice';

const CounterRedux = () => {
  const counter = useSelector((state) => state.counter.counter);
  const step = useSelector((state) => state.counter.step);
  const dispatch = useDispatch();

  const handleMinus = () => {
    dispatch(decrement());
  };
  const handlePlus = () => {
    dispatch(increment());
  };
  const handleReset = () => {
    dispatch(reset());
  };
  const handleChangeStep = (event) => {
    dispatch(changeStep(+event.target.value));
  };

  return (
    <div className="my-4 w-[80%] bg-amber-200 py-10">
      <div className="mx-auto w-[70%] rounded-lg bg-white p-6">
        <h1 className="mb-4 text-center text-7xl font-bold text-red-600">
          {counter}
        </h1>
        <div className="flex items-center justify-center gap-4">
          <input
            type="number"
            value={step}
            onChange={handleChangeStep}
            className="w-20 rounded-md border border-gray-300 p-2 focus:ring-2 focus:ring-blue-500 focus:outline-none"
          />
          <div className="flex gap-2">
            <button
              className="cursor-pointer rounded-md bg-red-500 px-4 py-2 text-white transition hover:bg-red-600"
              onClick={handleMinus}
            >
              minus
            </button>
            <button
              className="cursor-pointer rounded-md bg-gray-500 px-4 py-2 text-white transition hover:bg-gray-600"
              onClick={handleReset}
            >
              reset
            </button>
            <button
              className="cursor-pointer rounded-md bg-green-500 px-4 py-2 text-white transition hover:bg-green-600"
              onClick={handlePlus}
            >
              plus
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CounterRedux;
