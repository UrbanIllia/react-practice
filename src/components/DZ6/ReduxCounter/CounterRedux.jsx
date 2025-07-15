import { useDispatch, useSelector } from 'react-redux';

const CounterRedux = () => {
  const counter = useSelector((state) => state.counter.counter);
  const step = useSelector((state) => state.counter.step);
  const dispatch = useDispatch();

  const handleMinusClick = () => {};
  const handlePlusClick = () => {
    dispatch({ type: 'INCREMENT' });
  };
  const handleResetClick = () => {};
  const handleChangeStep = () => {};

  return (
    <div className="my-10 bg-amber-200 py-10">
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
              onClick={handleMinusClick}
              className="cursor-pointer rounded-md bg-red-500 px-4 py-2 text-white hover:bg-red-600 focus:ring-2 focus:ring-red-500 focus:outline-none"
            >
              minus
            </button>
            <button
              onClick={handleResetClick}
              className="cursor-pointer rounded-md bg-gray-500 px-4 py-2 text-white hover:bg-gray-600 focus:ring-2 focus:ring-gray-500 focus:outline-none"
            >
              reset
            </button>
            <button
              onClick={handlePlusClick}
              className="cursor-pointer rounded-md bg-green-500 px-4 py-2 text-white hover:bg-green-600 focus:ring-2 focus:ring-green-500 focus:outline-none"
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
