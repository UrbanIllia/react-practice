import { Link, useParams } from 'react-router-dom';
import { getAdvantageById } from './fakeAPI';
import { SiReactrouter } from 'react-icons/si';

const ProductDetails = () => {
  const { productId } = useParams();
  const advantage = getAdvantageById(productId);
  if (!advantage) {
    return (
      <div className="my-16 text-center text-7xl">
        Advantage with ID {productId} not found!
      </div>
    );
  }
  return (
    <div className="relative flex h-[600px] flex-col items-center bg-black py-25">
      <h2 className="mb-18 border-b-1 border-white py-2 text-center text-[40px] font-bold text-white">
        Advantage - {advantage.name}
      </h2>
      <p className="mb-12 w-[900px] text-center text-[20px] leading-relaxed text-white">
        {advantage.text}
      </p>
      <p className="mb-5 w-[800px] text-center text-[18px] leading-relaxed text-red-200">
        {advantage.example}
      </p>
      <SiReactrouter
        size={100}
        color="white"
        className="absolute top-0 right-5"
      />
      <Link
        to="/react5/advantages"
        className="flex items-center justify-center rounded-2xl border-1 border-white px-3 py-3 text-white transition hover:scale-[1.03] hover:bg-gray-800"
      >
        Go Back
      </Link>
    </div>
  );
};

export default ProductDetails;
