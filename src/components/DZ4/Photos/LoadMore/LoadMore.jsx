const LoadMore = ({ handleClick }) => {
  return (
    <button
      type="button"
      className="block  mx-auto  my-10 text-white bg-blue-400 
          rounded-xl px-4 py-6 uppercase font-bold cursor-pointer 
          transition-bg duration-300 hover:bg-blue-600 focus:bg-blue-600"
      onClick={handleClick}
    >
      Load More
    </button>
  );
};

export default LoadMore;
