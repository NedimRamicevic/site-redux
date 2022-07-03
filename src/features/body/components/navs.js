import React from "react";
import { Routes, Route } from "react-router-dom";
import Login from "../../authentication/components/login.js";
import ProtectedRoute from "./protectedRoute.js";
import AdminPage from "../../adminPanel/components/adminPage.js";
import About from "../view/about.js";
import Home from "../view/home.js";
import AboutUs from "../view/aboutUs.js";
import { useSelector } from "react-redux";
import CategoryContent from "./categoryContent.js";
import ProductContent from "./productContent.js";

function Navs() {
  const categories = useSelector((state) => state.categories).map(
    (category) => category
  );
  const products = useSelector((state) => state.categories).map((category) =>
    category.products.map((product) => product.name)
  );
  return (
    <Routes>
      <Route path="/home" element={<Home />} />
      <Route exact path="/about" element={<About />} />
      <Route exact path="/aboutUs" element={<AboutUs />} />
      {categories.map(
        (category) => (
          console.log(category.name + "hooooop"),
          (
            <Route
              exact
              path={"/categories" + category.name}
              element={<AboutUs />}
            />
          )
        )
      )}
      {products.map(
        (product) => (
          console.log(product.name + "nabeeeeer"),
          (
            <Route
              exact
              path={"/products" + product.name}
              element={<AboutUs />}
            />
          )
        )
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
