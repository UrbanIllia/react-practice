const Game = ({ percentage, title, variants, handleClick }) => {
  return (
    <div className="p-6 text-center">
      <div className="mb-6 h-2.5 w-full overflow-hidden rounded-full bg-gray-700">
        <div
          className="h-full bg-gradient-to-r from-green-400 to-cyan-500 transition-all duration-300 ease-in-out"
          style={{ width: `${percentage}%` }}
        ></div>
      </div>
      <h1 className="mb-6 text-2xl font-semibold text-amber-300">{title}</h1>
      <ul className="space-y-3">
        {variants.map((item, index) => (
          <li
            key={item}
            className="cursor-pointer rounded-lg border border-gray-600 bg-gray-700 p-4 text-white transition-all duration-200 hover:border-gray-400"
            onClick={() => handleClick(index)}
          >
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Game;
