import { useCartStore } from "../store/useCartStore";

const CartDrawer = ({ isOpen, onClose }) => {
  const { cart, removeFromCart, clearCart } = useCartStore();

  const subtotal = cart.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );
  const tax = subtotal * 0.07;
  const shipping = subtotal > 0 ? 100 : 0;
  const total = subtotal + tax + shipping;

  return (
    <>
      {isOpen && (
        <div className="fixed inset-0 bg-black/50 z-40" onClick={onClose} />
      )}

      <div
        className={`fixed top-0 right-0 h-full w-80 bg-white dark:bg-gray-800 z-50 shadow-2xl transform transition-transform duration-300 ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="p-6 flex flex-col h-full">
          <div className="flex justify-between items-center mb-4">
            <div>
              <h2 className="text-2xl font-bold">Your Cart</h2>
              <p className="text-sm text-gray-500">{cart.length} items</p>
            </div>
            <button
              onClick={onClose}
              className="text-gray-500 dark:text-gray-400 text-2xl"
              aria-label="Close cart"
            >
              &times;
            </button>
          </div>

          <div className="flex-1 overflow-y-auto space-y-4">
            {cart.length === 0 ? (
              <div className="py-12 text-center text-gray-400">
                <p className="mb-2">Your cart is empty.</p>
                <p className="text-xs">
                  Add products from the catalog to get started.
                </p>
              </div>
            ) : (
              cart.map((item) => (
                <div
                  key={item.id}
                  className="flex justify-between items-start gap-4 border-b dark:border-gray-600 pb-3"
                >
                  <div className="flex-1">
                    <p className="font-medium">{item.name}</p>
                    <div className="text-sm text-gray-500 dark:text-gray-400">
                      Qty: {item.quantity}
                    </div>
                    <div className="text-sm text-gray-500 dark:text-gray-400 mt-1">
                      Unit: {item.price.toLocaleString()} THB
                    </div>
                  </div>

                  <div className="text-right">
                    <div className="font-semibold">
                      {(item.price * item.quantity).toLocaleString()} THB
                    </div>
                    <button
                      onClick={() => removeFromCart(item.id)}
                      className="text-red-500 text-sm hover:underline mt-2"
                    >
                      Remove
                    </button>
                  </div>
                </div>
              ))
            )}
          </div>

          <div className="mt-6 border-t dark:border-gray-600 pt-4 space-y-3 text-sm">
            <div className="flex justify-between">
              <span>Subtotal</span>
              <span>{subtotal.toLocaleString()} THB</span>
            </div>
            <div className="flex justify-between">
              <span>VAT (7%)</span>
              <span>
                {tax.toLocaleString(undefined, { minimumFractionDigits: 2 })}{" "}
                THB
              </span>
            </div>
            <div className="flex justify-between">
              <span>Shipping</span>
              <span>{shipping} THB</span>
            </div>
            <div className="flex justify-between font-bold text-lg text-blue-600 dark:text-blue-400 pt-2">
              <span>Total</span>
              <span>{total.toLocaleString()} THB</span>
            </div>

            <div className="flex gap-3">
              <button
                onClick={clearCart}
                className="flex-1 py-2 border border-red-500 text-red-500 rounded-lg hover:bg-red-50 dark:hover:bg-red-900/20 transition"
              >
                Clear Cart
              </button>

              <button
                disabled
                className="flex-1 py-2 bg-green-600 text-white rounded-lg opacity-70 cursor-not-allowed"
                title="Checkout is disabled in the demo"
              >
                Checkout
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CartDrawer;
