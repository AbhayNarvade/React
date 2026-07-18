import React, { useContext } from "react";
import { Mystore } from "../context/MyContext";

const CartScreen = () => {
  let { cartItem, setCartItem, incrementQuantity, decrementQuantity } =
    useContext(Mystore);
  const totalPrice = cartItem.reduce((total, item) => {
    if (item.quantity > 1) {
      return total + item.price * item.quantity;
    } else {
      return total + item.price;
    }
  }, 0);

  console.log(cartItem);

  const removedFromCart = (id) => {
    setCartItem((prev) => {
      return prev.filter((ele) => {
        if (ele.id != id) {
          return ele;
        }
      });
    });
  };

  return (
    <div className="max-w-7xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-8">Shopping Cart</h1>

      {cartItem.length === 0 ? (
        <div className="flex flex-col items-center justify-center h-96">
          <h2 className="text-2xl font-semibold text-gray-500">
            Your Cart is Empty 🛒
          </h2>
          <p className="text-gray-400 mt-2">
            Add some products to get started.
          </p>
        </div>
      ) : (
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Cart Items */}
          <div className="lg:col-span-2 space-y-5">
            {cartItem.map((item) => (
              <div
                key={item.id}
                className="flex items-center gap-5 border rounded-xl p-4 shadow-sm bg-white"
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-24 h-24 object-contain"
                />

                <div className="flex-1">
                  <h2 className="font-semibold text-lg line-clamp-2">
                    {item.title}
                  </h2>

                  <p className="text-sm text-gray-500 capitalize">
                    {item.category}
                  </p>

                  <p className="text-indigo-600 font-bold mt-2">
                    ${item.price}
                  </p>
                </div>

                {/* Quantity */}
                <div className="flex items-center gap-3">
                  <button
                    className="w-8 h-8 rounded bg-gray-200 hover:bg-gray-300"
                    onClick={() => {
                      decrementQuantity(item.id);
                    }}
                  >
                    -
                  </button>

                  <span className="font-semibold"> {item.quantity}</span>

                  <button
                    className="w-8 h-8 rounded bg-gray-200 hover:bg-gray-300"
                    onClick={() => {
                      incrementQuantity(item.id);
                    }}
                  >
                    +
                  </button>
                </div>

                <button
                  className="text-red-500 hover:text-red-700 font-semibold"
                  onClick={() => {
                    removedFromCart(item.id);
                  }}
                >
                  Remove
                </button>
              </div>
            ))}
          </div>

          {/* Order Summary */}
          <div className="border rounded-xl shadow-sm p-6 bg-white h-fit">
            <h2 className="text-2xl font-bold mb-6">Order Summary</h2>

            <div className="flex justify-between mb-3">
              <span>Items</span>
              <span>{cartItem.length}</span>
            </div>

            <div className="flex justify-between mb-3">
              <span>Shipping</span>
              <span>Free</span>
            </div>

            <hr className="my-4" />

            <div className="flex justify-between text-xl font-bold">
              <span>Total</span>
              <span>${totalPrice.toFixed(2)}</span>
            </div>

            <button className="w-full mt-6 bg-indigo-600 text-white py-3 rounded-lg hover:bg-indigo-700 transition">
              Checkout
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default CartScreen;
