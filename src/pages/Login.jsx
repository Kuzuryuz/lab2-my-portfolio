import React from "react";
import { useNavigate } from "react-router-dom";
import { useAuthStore } from "../store/useAuthStore";

const Login = () => {
  const navigate = useNavigate();
  const { isAuthenticated, role, login, logout } = useAuthStore();

  const handleLogin = (r) => {
    login(r);
    navigate("/dashboard");
  };

  return (
    <div className="max-w-md mx-auto bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
      <h2 className="text-2xl font-semibold mb-4">Login</h2>

      {isAuthenticated ? (
        <div className="space-y-3">
          <p className="text-sm">
            Signed in as <strong>{role}</strong>
          </p>
          <div className="flex gap-3">
            <button
              onClick={() => navigate("/dashboard")}
              className="flex-1 py-2 bg-blue-600 text-white rounded-lg"
            >
              Go to Dashboard
            </button>
            <button onClick={logout} className="py-2 px-4 border rounded-lg">
              Logout
            </button>
          </div>
        </div>
      ) : (
        <div className="space-y-3">
          <div className="flex gap-3">
            <button
              onClick={() => handleLogin("user")}
              className="flex-1 py-2 bg-gray-200 rounded-lg hover:bg-gray-300"
            >
              Login as User
            </button>
            <button
              onClick={() => handleLogin("admin")}
              className="flex-1 py-2 bg-gradient-to-r from-indigo-600 to-indigo-500 text-white rounded-lg hover:from-indigo-700"
            >
              Login as Admin
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Login;
