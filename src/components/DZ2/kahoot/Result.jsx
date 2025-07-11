const Result = ({ correct, total, startAgain }) => {
  return (
    <div className="p-6 text-center">
      <img
        className="mx-auto mb-6 h-36 w-36 brightness-150 filter"
        src="https://cdn-icons-png.flaticon.com/512/2278/2278992.png"
        alt="final"
      />
      <h2 className="mb-6 text-xl font-medium text-green-300">
        Ви відповіли правильно на {correct} питання з {total}
      </h2>
      <button
        className="rounded-full bg-pink-600 px-6 py-3 text-lg font-medium text-white transition-colors duration-200 hover:bg-pink-700"
        onClick={startAgain}
      >
        Спробувати знову
      </button>
    </div>
  );
};

export default Result;
