import { Link, useParams } from "react-router-dom";
import { getAdvantageById } from "./fakeAPI";
import { SiReactrouter } from "react-icons/si";

const ProductDetails = () => {
  const { productId } = useParams();
  const advantage = getAdvantageById(productId);
  if (!advantage) {
    return (
      <div className="text-center my-16 text-7xl">
        Advantage with ID {productId} not found!
      </div>
    );
  }
  return (
    <div className="flex flex-col items-center py-25 bg-black h-[600px] relative">
      <h2 className="text-[40px] text-center text-white border-white border-b-1 py-2 mb-18 font-bold">
        Advantage - {advantage.name}
      </h2>
      <p className="text-[20px] text-center text-white w-[900px] mb-12 leading-relaxed">
        {advantage.text}
      </p>
      <p className="text-[18px] text-center text-red-200 w-[800px] leading-relaxed mb-5">
        {advantage.example}
      </p>
      <SiReactrouter
        size={100}
        color="white"
        className="absolute top-0 right-5"
      />
      <Link
        to="/products"
        className="px-3 py-3 border-1 border-white rounded-2xl 
              flex justify-center items-center hover:bg-gray-800 transition hover:scale-[1.03] text-white"
      >
        Go Back
      </Link>
    </div>
  );
};

export default ProductDetails;
