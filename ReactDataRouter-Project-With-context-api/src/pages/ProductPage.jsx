import React, { useEffect, useState } from "react";
import { axiosInstance } from "../config/axios";

const ProductPage = () => {
  const [products, setProducts] = useState([]);
  const getProducts = async () => {
    try {
      let res = await axiosInstance.get("products");
      console.log("products ", res.data);
      setProducts(res.data);
    } catch (e) {
      console.log("error ", e);
    }
  };
  useEffect(() => {
    getProducts();
  }, []);
  return (
    <div className="p-6">
      <h2 className="text-3xl font-bold mb-6">Products</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {products.map((product) => (
          <div
            key={product.id}
            className="bg-white rounded-xl shadow-md hover:shadow-xl transition duration-300 border overflow-hidden"
          >
            {/* Product Image */}
            <div className="h-60 bg-gray-100 flex items-center justify-center p-6">
              <img
                src={product.image}
                alt={product.title}
                className="h-full object-contain"
              />
            </div>

            {/* Product Details */}
            <div className="p-5">
              <h3 className="text-lg font-semibold line-clamp-2">
                {product.title}
              </h3>

              <p className="text-sm text-blue-600 font-medium mt-2 capitalize">
                {product.category}
              </p>

              <p className="text-2xl font-bold text-green-600 mt-3">
                ${product.price}
              </p>

              <div className="flex items-center justify-between mt-3">
                <span className="bg-yellow-100 text-yellow-700 px-3 py-1 rounded-full text-sm font-medium">
                  ⭐ {product.rating.rate}
                </span>

                <span className="text-sm text-gray-500">
                  {product.rating.count} Reviews
                </span>
              </div>

              <p className="text-gray-600 text-sm mt-4 line-clamp-3">
                {product.description}
              </p>

              <button className="w-full mt-6 bg-blue-600 hover:bg-blue-700 text-white py-2.5 rounded-lg font-medium transition">
                View Details
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductPage;
