import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "./context/ThemeContext";
import MainLayout from "./layouts/MainLayout";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";
import Catalog from "./pages/Catalog";
import ProductDetail from "./pages/ProductDetail";
import CartPage from "./pages/Cart";
import FormLayout from "./layouts/FormLayout";
import Step1 from "./pages/Step1";
import Step2 from "./pages/Step2";
import Review from "./pages/Review";
import ApplySuccess from "./pages/ApplySuccess";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import AdminSettings from "./pages/AdminSettings";
import ProtectedRoute from "./components/ProtectedRoute";

function App() {
  return (
    <BrowserRouter>
      <ThemeProvider>
        <Routes>
          <Route path="/" element={<MainLayout />}>
            <Route index element={<Home />} />
            <Route path="projects" element={<Projects />} />
            <Route path="contact" element={<Contact />} />
            <Route path="product" element={<Catalog />} />
            <Route path="product/:id" element={<ProductDetail />} />
            <Route path="cart" element={<CartPage />} />
            <Route path="login" element={<Login />} />

            <Route
              path="dashboard"
              element={
                <ProtectedRoute>
                  <Dashboard />
                </ProtectedRoute>
              }
            />

            <Route
              path="admin-settings"
              element={
                <ProtectedRoute requiredRole="admin">
                  <AdminSettings />
                </ProtectedRoute>
              }
            />

            <Route path="/apply" element={<FormLayout />}>
              <Route path="step-1" element={<Step1 />} />
              <Route path="step-2" element={<Step2 />} />
              <Route path="review" element={<Review />} />
              <Route path="success" element={<ApplySuccess />} />
            </Route>
          </Route>
        </Routes>
      </ThemeProvider>
    </BrowserRouter>
  );
}

export default App;
