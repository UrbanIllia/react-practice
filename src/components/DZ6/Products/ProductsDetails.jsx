import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getProductById } from '../../../Services/productsApi';
import { useDispatch, useSelector } from 'react-redux';
import { addCartItem, removeCartItem } from '../../../redux/cartSlice';
import { MdOutlineShoppingCart } from 'react-icons/md';

const ProductsDetails = () => {
  const { productId } = useParams();
  const cart = useSelector((state) => state.cart.cartItems);
  const [product, setProduct] = useState(null);
  const dispatch = useDispatch();

  const [mainImage, setMainImage] = useState(null);

  const [isExist, setIsExist] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await getProductById(productId);
        setProduct(response);

        setMainImage(
          response.images && response.images.length > 0
            ? response.images[0]
            : response.thumbnail,
        );

        if (response && response.id) {
          setIsExist(cart.some((item) => item.id === response.id));
        }
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, [productId, cart]);

  if (!product) {
    return <p className="text-5xl font-bold text-white">...Loading</p>;
  }

  const handleThumbnailClick = (imageUrl) => {
    setMainImage(imageUrl);
  };

  return (
    <div className="relative min-h-screen bg-gray-900 p-6 text-white">
      <h2 className="mb-6 text-center text-4xl font-bold">Product Details</h2>
      <div className="mx-auto max-w-4xl rounded-lg bg-gray-800 p-6 shadow-lg">
        <figure className="mb-6">
          <div className="grid grid-cols-[3fr_1fr] items-center justify-center gap-4">
            <img
              src={mainImage || product.thumbnail}
              alt={product.title}
              className="w-full rounded-lg object-cover"
            />
            <div>
              <ul className="flex flex-col gap-4">
                {product.images &&
                  product.images.map((item) => (
                    <li key={item}>
                      <img
                        src={item}
                        alt={product.title}
                        width="150"
                        className={`cursor-pointer rounded ${
                          mainImage === item
                            ? 'border-2 border-amber-500'
                            : 'hover:border-amber-500'
                        }`}
                        onClick={() => handleThumbnailClick(item)}
                      />
                    </li>
                  ))}
                {/* Додаємо thumbnail як резервне зображення, якщо images відсутнє */}
                {!product.images?.length && product.thumbnail && (
                  <li>
                    <img
                      src={product.thumbnail}
                      alt={product.title}
                      width="150"
                      className={`cursor-pointer rounded ${
                        mainImage === product.thumbnail
                          ? 'border-2 border-amber-500'
                          : 'hover:border-amber-500'
                      }`}
                      onClick={() => handleThumbnailClick(product.thumbnail)}
                    />
                  </li>
                )}
              </ul>
            </div>
          </div>
          <figcaption className="mt-2 text-center text-gray-400">
            {product.title}
          </figcaption>
        </figure>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          <div>
            <h3 className="mb-2 text-2xl font-semibold">{product.title}</h3>
            <p className="mb-4 text-gray-300">{product.description}</p>
            <p className="mb-2 text-xl font-bold text-amber-400">
              Price: ${product.price}
            </p>
            <p className="mb-2 text-green-400">
              Availability: {product.availabilityStatus}
            </p>
            <p className="mb-2 text-yellow-400">Rating: {product.rating}/5</p>
            <div className="mt-4">
              <h4 className="mb-2 text-lg font-medium">Dimensions:</h4>
              <p>Width: {product.dimensions.width} cm</p>
              <p>Height: {product.dimensions.height} cm</p>
              <p>Depth: {product.dimensions.depth} cm</p>
            </div>
            <div className="mt-4">
              <h4 className="mb-2 text-lg font-medium">Additional Info:</h4>
              <p>Category: {product.category}</p>
              <p>Brand: {product.brand}</p>
              <p>Stock: {product.stock} units</p>
              <p>Discount: {product.discountPercentage}%</p>
              <p>Minimum Order: {product.minimumOrderQuantity} units</p>
              <p>Warranty: {product.warrantyInformation}</p>
              <p>Shipping: {product.shippingInformation}</p>
              <p>Return Policy: {product.returnPolicy}</p>
            </div>
          </div>
          <div className="flex flex-col justify-between">
            <div>
              <h4 className="mb-2 text-lg font-medium">Reviews:</h4>
              {product.reviews && product.reviews.length > 0 ? (
                <ul className="space-y-2">
                  {product.reviews.map((review, index) => (
                    <li key={index} className="rounded bg-gray-700 p-2">
                      <p>
                        <strong>{review.reviewerName}</strong> ({review.rating}
                        /5):
                      </p>
                      <p>{review.comment}</p>
                      <p className="text-xs text-gray-400">
                        Date: {new Date(review.date).toLocaleDateString()}
                      </p>
                    </li>
                  ))}
                </ul>
              ) : (
                <p>No reviews available</p>
              )}
            </div>
            <div>
              {!isExist ? (
                <button
                  className="btn btn-wide mt-4 bg-amber-700 text-white hover:bg-amber-800"
                  onClick={() => dispatch(addCartItem(product))}
                >
                  Add to Cart
                </button>
              ) : (
                <button
                  className="btn btn-wide mt-4 bg-red-800 text-white hover:bg-red-900"
                  onClick={() => dispatch(removeCartItem(product.id))}
                >
                  Remove from Cart
                </button>
              )}
            </div>

            {isExist && (
              <div className="absolute top-[100px] left-[40px] flex flex-col items-center justify-center text-red-500">
                <p className="text-3xl">In Cart</p>
                <MdOutlineShoppingCart size={50} />
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductsDetails;
