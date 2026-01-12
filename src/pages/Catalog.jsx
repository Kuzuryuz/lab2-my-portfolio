import { useState } from "react";
import { Link } from "react-router-dom";
import { products } from "../data/products";
import ProductCard from "../components/ProductCard";

const Catalog = () => {
  const [search, setSearch] = useState("");

  // Logic สำหรับการกรองสินค้าตามชื่อ
  const filteredProducts = products.filter((p) =>
    p.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="max-w-6xl mx-auto p-6">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-6 gap-4">
        <h1 className="text-3xl font-bold">Product Catalog</h1>
        <div className="text-sm text-gray-500">
          {filteredProducts.length} items
        </div>
      </div>

      <div className="mb-8">
        <label className="relative block">
          <span className="sr-only">Search products</span>
          <input
            type="text"
            placeholder="Search products..."
            className="w-full pl-4 pr-12 py-3 border rounded-lg bg-white dark:bg-gray-900 border-gray-200 dark:border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-300 transition"
            onChange={(e) => setSearch(e.target.value)}
          />
          <svg
            className="w-5 h-5 absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M21 21l-4.35-4.35M17 11a6 6 0 11-12 0 6 6 0 0112 0z"
            />
          </svg>
        </label>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {filteredProducts.length === 0 ? (
          <div className="col-span-full py-12 text-center text-gray-500">
            No products found. Try a different search.
          </div>
        ) : (
          filteredProducts.map((product) => (
            <div key={product.id}>
              <ProductCard product={product} />
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default Catalog;
