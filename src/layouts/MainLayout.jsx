import { Link, Outlet } from "react-router-dom";
import { useTheme } from "../context/ThemeContext";
import { useState } from "react";
import CartDrawer from "../components/CartDrawer";
import { useCartStore } from "../store/useCartStore";

const MainLayout = () => {
  const { darkMode, toggleTheme } = useTheme();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [cartOpen, setCartOpen] = useState(false);
  const cartCount = useCartStore((s) =>
    s.cart.reduce((sum, i) => sum + (i.quantity || 0), 0)
  );

  return (
    <div className="min-h-screen transition-colors duration-300 bg-white dark:bg-gray-900 text-gray-900 dark:text-white">
      <nav className="p-4 flex flex-wrap md:flex-nowrap justify-between items-center border-b dark:border-gray-700">
        <h1 className="text-xl font-bold">MyPortfolio</h1>

        <div className="flex items-center gap-4">
          {/* Mobile menu button */}
          <button
            onClick={() => setMobileOpen((s) => !s)}
            className="md:hidden p-2 rounded-md hover:bg-gray-100 dark:hover:bg-gray-700"
            aria-label="Toggle menu"
            aria-expanded={mobileOpen}
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d={
                  mobileOpen
                    ? "M6 18L18 6M6 6l12 12"
                    : "M4 6h16M4 12h16M4 18h16"
                }
              />
            </svg>
          </button>

          {/* Nav links - hidden on mobile unless open */}
          <div
            className={`${
              mobileOpen ? "block" : "hidden"
            } w-full md:w-auto md:block`}
          >
            <div className="flex flex-col md:flex-row md:items-center md:space-x-4 space-y-2 md:space-y-0 mt-3 md:mt-0">
              <Link to="/" className="hover:text-blue-500">
                Home
              </Link>
              <Link to="/projects" className="hover:text-blue-500">
                Projects
              </Link>
              <Link to="/contact" className="hover:text-blue-500">
                Contact
              </Link>
              <Link to="/product" className="hover:text-blue-500">
                Product
              </Link>
              <Link to="/cart" className="hover:text-blue-500 relative">
                Cart
              </Link>
              <button
                onClick={toggleTheme}
                className="p-2 bg-gray-200 dark:bg-gray-700 rounded-full"
              >
                {darkMode ? "☀️ Light" : "🌙 Dark"}
              </button>
              <button
                onClick={() => setCartOpen(true)}
                className="relative p-2 bg-gray-200 dark:bg-gray-700 rounded-full"
                aria-label="Open cart"
              >
                🛒
                {cartCount > 0 && (
                  <span className="absolute -top-1 -right-1 text-xs bg-red-600 text-white rounded-full w-5 h-5 flex items-center justify-center">
                    {cartCount}
                  </span>
                )}
              </button>
            </div>
          </div>
        </div>
      </nav>
      <CartDrawer isOpen={cartOpen} onClose={() => setCartOpen(false)} />

      <main className="p-8">
        <Outlet />
      </main>
    </div>
  );
};

export default MainLayout;
