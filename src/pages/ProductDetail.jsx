import { useParams, useNavigate } from "react-router-dom";
import { products } from "../data/products";

const ProductDetail = () => {
  const { id } = useParams(); // ดึง ID จาก URL
  const navigate = useNavigate(); // ใช้สำหรับสั่งเปลี่ยนหน้า

  // ค้นหาสินค้าที่ ID ตรงกับใน URL
  const product = products.find((p) => p.id === id);

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
    <div className="max-w-2xl mx-auto p-10 border mt-10 rounded-2xl shadow-sm">
      <button
        onClick={() => navigate(-1)}
        className="mb-4 text-sm text-gray-500 hover:text-black"
      >
        ← Back to Catalog
      </button>

      <h1 className="text-4xl font-bold mb-2">{product.name}</h1>
      <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">
        {product.category}
      </span>

      <p className="text-2xl text-green-600 my-4">{product.price} THB</p>
      <p className="text-gray-600 leading-relaxed">{product.desc}</p>
    </div>
  );
};

export default ProductDetail;
