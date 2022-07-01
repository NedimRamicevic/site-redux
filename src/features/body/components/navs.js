import React from "react";
import { Routes, Route } from "react-router-dom";
import { useSelector } from "react-redux";
import Content from "./content.js";
import Login from "../../authentication/components/login.js";
import ProtectedRoute from "./protectedRoute.js";
import AdminPage from "../../adminPanel/components/adminPage.js";
import About from "../view/about.js";
import AboutUs from "../view/aboutUs.js";

function Navs() {
  const pages = useSelector((state) => state.addPage);
  return (
    <Routes>
      <Route exact path="/" element={<Content />} />
      <Route exact path="about" element={<About />} />
      <Route exact path="/aboutUs" element={<AboutUs />} />
      <Route
        exact
        path="/adminPage"
        element={
          <ProtectedRoute>
            <About />
          </ProtectedRoute>
        }
      />
      <Route exact path="/login" element={<Login />} />
    </Routes>
  );
}

export default Navs;
