import React from "react";
import { Routes, Route } from "react-router-dom";
import Login from "../../authentication/components/login.js";
import ProtectedRoute from "./protectedRoute.js";
import AdminPage from "../../adminPanel/components/adminPage.js";
import About from "../view/about.js";
import Home from "../view/home.js";
import AboutUs from "../view/aboutUs.js";
import { useSelector } from "react-redux";
import CategoryContent from "./categoryContent.jsx";
import ProductContent from "./productContent.jsx";
import Categories from "../view/categories.js";

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
      {categories.map((category) =>
        category.products.map((product) => (
          <Route
            exact
            path={"/products/" + product.name}
            element={<ProductContent product={product} />}
          />
        ))
      )}

      <Route
        exact
        path="/adminPage"
        element={
          <ProtectedRoute>
            <AdminPage />
          </ProtectedRoute>
        }
      />
      <Route exact path="/login" element={<Login />} />
    </Routes>
  );
}

export default Navs;
