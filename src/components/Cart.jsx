import React from "react";
import { useCartStore } from "../store/useCartStore";

const Cart = () => {
  const {
    cart,
    removeFromCart,
    clearCart,
    increaseQuantity,
    decreaseQuantity,
  } = useCartStore();

  const subtotal = cart.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );
  const tax = subtotal * 0.07;
  const shipping = subtotal > 0 ? 100 : 0;
  const total = subtotal + tax + shipping;

  return (
    <div className="max-w-4xl mx-auto bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
      <div className="flex items-center justify-between mb-4">
        <div>
          <h1 className="text-2xl font-bold">Shopping Cart</h1>
          <p className="text-sm text-gray-500">
            You have {cart.length} item(s) in your cart
          </p>
        </div>
      </div>

      {cart.length === 0 ? (
        <div className="py-16 text-center text-gray-400">
          <p className="mb-2">Your cart is empty.</p>
          <p className="text-sm">Explore the catalog to add products.</p>
        </div>
      ) : (
        <div className="space-y-4">
          {cart.map((item) => (
            <div
              key={item.id}
              className="flex items-start justify-between gap-4 border-b dark:border-gray-700 pb-4"
            >
              <div className="flex-1">
                <p className="font-medium">{item.name}</p>
                <div className="flex items-center gap-3 mt-2">
                  <div className="inline-flex items-center border rounded-md overflow-hidden">
                    <button
                      onClick={() => decreaseQuantity(item.id)}
                      className="px-3 py-1 text-sm bg-gray-100 dark:bg-gray-700 hover:bg-gray-200"
                      aria-label={`Decrease ${item.name}`}
                    >
                      −
                    </button>
                    <div className="px-3 py-1 text-sm">{item.quantity}</div>
                    <button
                      onClick={() => increaseQuantity(item.id)}
                      className="px-3 py-1 text-sm bg-gray-100 dark:bg-gray-700 hover:bg-gray-200"
                      aria-label={`Increase ${item.name}`}
                    >
                      +
                    </button>
                  </div>

                  <div className="text-sm text-gray-500">
                    Unit: {item.price.toLocaleString()} THB
                  </div>
                </div>
              </div>

              <div className="text-right">
                <div className="font-semibold">
                  {(item.price * item.quantity).toLocaleString()} THB
                </div>
                <button
                  onClick={() => removeFromCart(item.id)}
                  className="mt-2 text-sm text-red-500 hover:underline"
                >
                  Remove
                </button>
              </div>
            </div>
          ))}

          <div className="mt-4 grid grid-cols-2 gap-4 items-center">
            <div className="text-sm text-gray-600 dark:text-gray-300">
              <div className="flex justify-between">
                <span>Subtotal</span>
                <span>{subtotal.toLocaleString()} THB</span>
              </div>
              <div className="flex justify-between mt-1">
                <span>VAT (7%)</span>
                <span>
                  {tax.toLocaleString(undefined, { minimumFractionDigits: 2 })}{" "}
                  THB
                </span>
              </div>
              <div className="flex justify-between mt-1">
                <span>Shipping</span>
                <span>{shipping} THB</span>
              </div>
              <div className="flex justify-between font-bold text-lg text-blue-600 dark:text-blue-400 mt-2">
                <span>Total</span>
                <span>{total.toLocaleString()} THB</span>
              </div>
            </div>

            <div className="space-y-3">
              <button
                onClick={clearCart}
                className="w-full py-2 border border-red-500 text-red-500 rounded-lg hover:bg-red-50 dark:hover:bg-red-900/20 transition"
              >
                Clear Cart
              </button>

              <button
                disabled
                className="w-full py-2 bg-green-600 text-white rounded-lg opacity-70 cursor-not-allowed"
                title="Checkout is disabled in the demo"
              >
                Checkout
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;
