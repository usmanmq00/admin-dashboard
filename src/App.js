import { Routes, Route, useLocation } from "react-router-dom";
import Dashboard from "./pages/dashboard/dashboard";
import Login from "./pages/account/login/login";
import Reset from "./pages/account/reset/reset";
import Sidebar from "./components/layout/sidebar";
import Orders from "./pages/orders/orders";
import Inventory from "./pages/inventory/inventory";
import Coupon from "./pages/coupon/coupon";
import CreateProduct from "./pages/inventory/CreateProduct/createProduct";
import CreateCode from "./pages/coupon/createCode";
import Category from "./pages/category/category";
import RequireAuth from "./components/RequireAuth/RequireAuth";
import { ProductContextProvider } from "./context/ProductContext";
import CreateCategory from "./pages/category/CreateCategory";
import Customers from "./pages/customers/customers";
import CustomOrder from "./pages/cutsomOrder/customOrder";

const App = () => {
  const { pathname } = useLocation();
  const path = pathname !== "/" && pathname !== "/account/reset";

  return (
    <div className="flex">
      {path ? <Sidebar /> : null}
      <Routes>
        <Route index path="/" element={<Login />} />
        <Route path="/account/reset" element={<Reset />} />
        <Route
          path="/dashboard"
          element={
            <RequireAuth>
              <Dashboard />
            </RequireAuth>
          }
        />
        <Route
          path="/orders"
          element={
            <RequireAuth>
              <Orders />
            </RequireAuth>
          }
        />
        <Route
          path="/customers"
          element={
            <RequireAuth>
              <Customers />
            </RequireAuth>
          }
        />
        <Route
          path="/inventory"
          element={
            <RequireAuth>
              <Inventory />
            </RequireAuth>
          }
          exact
        />
        <Route
          path="/inventory/create-product"
          element={
            <RequireAuth>
              <ProductContextProvider>
                <CreateProduct />
              </ProductContextProvider>
            </RequireAuth>
          }
        />
        <Route
          path="/coupon"
          element={
            <RequireAuth>
              <Coupon />
            </RequireAuth>
          }
        />
        <Route
          path="/coupon/create-coupon"
          element={
            <RequireAuth>
              <CreateCode />
            </RequireAuth>
          }
        />
        <Route
          path="/category"
          element={
            <RequireAuth>
              <Category />
            </RequireAuth>
          }
        />
        <Route
          path="/category/create-category"
          element={
            <RequireAuth>
              <CreateCategory />
            </RequireAuth>
          }
        />
        <Route
          path="/custom-order"
          element={
            <RequireAuth>
              <CustomOrder />
            </RequireAuth>
          }
        />
      </Routes>
    </div>
  );
};

export default App;
