import React, { useContext, useState } from "react";
import { Mystore } from "../context/MyContext";

const Product = ({ product}) => {
    let { setCartItem ,cartItem} =
      useContext(Mystore);
  const isAdded = cartItem.some((item) => item.id === product.id);

  return (
    <div className="w-2xs flex flex-col overflow-hidden rounded-xl border border-gray-200 bg-white shadow-sm hover:-translate-y-1 hover:shadow-lg">
      {/* Image */}
      <div className="flex h-64 items-center justify-center bg-gray-100 p-5">
        <img
          src={product.image}
          alt={product.title}
          className="h-full object-contain transition-transform duration-300 group-hover:scale-105"
        />
      </div>

      {/* Content */}
      <div className=" space-y-3 p-5">
        <span className="inline-block rounded-full bg-indigo-100 px-3 py-1 text-xs font-semibold capitalize text-indigo-700">
          {product.category}
        </span>

        <h2 className="line-clamp-2 text-lg font-semibold text-gray-800">
          {product.title}
        </h2>

        <p className="line-clamp-3 text-sm text-gray-600 ">
          {product.description}
        </p>

        {/* Rating & Price */}
        <div className="flex items-center justify-between ">
          <div className="flex items-center gap-1">
            <span className="text-yellow-500">⭐</span>
            <span className="font-medium">{product.rating.rate}</span>
            <span className="text-sm text-gray-500">
              ({product.rating.count})
            </span>
          </div>

          <span className="text-xl font-bold text-indigo-600">
            ${product.price}
          </span>
        </div>

        {/* Button */}
        <button
          className={`mt-auto w-full rounded-lg py-2 text-white ${
            isAdded
              ? "bg-green-600 cursor-not-allowed"
              : "bg-indigo-600 hover:bg-indigo-700"
          }`}
          onClick={() =>
            setCartItem([...cartItem, { ...product, quantity: 1 }])
          }
        >
          {isAdded ? "Added" : "Add to Cart"}
        </button>
      </div>
    </div>
  );
};

export default Product;
