import React from "react";
import { Routes, Route } from "react-router-dom";
import Login from "../../authentication/components/login";
import ProtectedRoute from "./protectedRoute";
import AdminDashboard from "../../adminPanel/view/adminPanel";
import About from "../view/about";
import Home from "../view/home";
import AboutUs from "../view/aboutUs";
import { useSelector } from "react-redux";
import CategoryContent from "./categoryContent";
import ProductContent from "./productContent";
import Product from "../view/product";
import Categories from "../view/categories";
import AddProduct from "../../adminPanel/components/addProduct";
import AddCategory from "../../adminPanel/components/addCategory";

function Navs() {
  const categories = useSelector((state) => state.categories).map(
    (category) => category
  );

  return (
    <Routes>
      <Route path="/home" element={<Home />} />
      <Route exact path="/about" element={<About />} />
      <Route exact path="/aboutUs" element={<AboutUs />} />
      <Route exact path="/categories" element={<Categories />} />

      {categories.map((category) => (
        <Route
          exact
          path={"/categories/" + category.name}
          element={<CategoryContent category={category} />}
        />
      ))}
        {categories.map((category) => {
          return (
            <Route path={category.name + "/products"} element={<Product product={category.products} />} >
            {category.products.map((product) => (
            <Route
              exact
              path={product.name}
              element={<ProductContent product={product} />}
            />
          ))}
          </Route>
          )
        }
          
        )}

      <Route
        path="/adminPage"
        element={
          <ProtectedRoute>
            <AdminDashboard />
          </ProtectedRoute>
        }
      >
        <Route path="addProduct" element={<AddProduct />} />
        <Route path="addCategory" element={<AddCategory />} />
      </Route>

      <Route exact path="/login" element={<Login />} />
    </Routes>
  );
}

export default Navs;
