import { useParams, useNavigate } from "react-router-dom";
import { products } from "../data/products";
import { useCartStore } from "../store/useCartStore";

const ProductDetail = () => {
  const { id } = useParams(); // ดึง ID จาก URL
  const navigate = useNavigate(); // ใช้สำหรับสั่งเปลี่ยนหน้า

  // ค้นหาสินค้าที่ ID ตรงกับใน URL
  const product = products.find((p) => p.id === id);
  const addToCart = useCartStore((s) => s.addToCart);

  if (!product)
    return (
      <div className="max-w-md mx-auto mt-20 p-8 bg-white dark:bg-gray-800 rounded-2xl shadow-lg text-center">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="mx-auto mb-4 h-12 w-12 text-red-500"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M6 18L18 6M6 6l12 12"
          />
        </svg>

        <h2 className="text-2xl font-semibold mb-2">Product not found</h2>
        <p className="text-gray-500 mb-6">
          We couldn't find the product you're looking for. It may have been
          removed or the link is incorrect.
        </p>

        <div className="flex justify-center gap-3">
          <button
            onClick={() => navigate(-1)}
            className="px-4 py-2 bg-gray-100 dark:bg-gray-700 rounded-md hover:bg-gray-200 transition"
          >
            Go back
          </button>
        </div>
      </div>
    );

  return (
    <div className="max-w-2xl mx-auto p-10 border mt-10 rounded-2xl shadow-sm relative flex flex-col">
      <div>
        <button
          onClick={() => navigate(-1)}
          className="mb-4 text-sm text-gray-500 hover:text-black"
        >
          ← Back to Catalog
        </button>
      </div>

      <span className="absolute top-20 right-4 inline-block px-3 py-1 text-sm bg-blue-50 text-blue-700 rounded-full">
        {product.category}
      </span>

      <h1 className="text-4xl font-bold mb-2">{product.name}</h1>

      <p className="text-gray-600 leading-relaxed mb-6">{product.desc}</p>

      <div className="mt-auto flex items-center justify-between gap-4">
        <button
          onClick={() => addToCart(product)}
          className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-500 transition"
        >
          Add to cart
        </button>

        <div className="text-2xl font-bold text-green-600">
          {product.price} THB
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
