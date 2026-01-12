import { Link } from "react-router-dom";
import { useCartStore } from "../store/useCartStore";

const ProductCard = ({ product }) => {
  const addToCart = useCartStore((s) => s.addToCart);

  return (
    <div className="relative bg-white dark:bg-gray-800 rounded-2xl shadow-sm hover:shadow-lg transform hover:-translate-y-2 transition p-5 flex flex-col">
      <span className="absolute top-3 right-3 inline-block px-3 py-1 text-sm bg-blue-50 text-blue-700 rounded-full">
        {product.category}
      </span>

      <div>
        <h2 className="text-lg font-semibold mb-1">{product.name}</h2>
      </div>

      <div className="flex items-center justify-between mt-4">
        <div className="mt-4">
          <Link
            to={`/product/${product.id}`}
            className="inline-block text-sm text-blue-600 hover:underline"
          >
            View Details →
          </Link>
        </div>

        <div className="mt-auto flex items-center justify-end gap-3">
          <div className="text-lg font-semibold text-green-600">
            {product.price} THB
          </div>
          <button
            onClick={() => addToCart(product)}
            className="px-3 py-1 bg-blue-600 text-white rounded-md hover:bg-blue-500 transition"
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
