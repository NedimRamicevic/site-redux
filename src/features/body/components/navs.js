import React from "react";
import { Routes, Route } from "react-router-dom";
import { useSelector } from "react-redux";
import Content from "./content.js";
import Login from "../../authentication/components/login.js";
import ProtectedRoute from "./protectedRoute.js";
import AdminPage from "../../adminPanel/components/adminPage.js";

function Navs() {
  const pages = useSelector((state) => state.addPage);
  return (
    <Routes>
      {pages.map((page) => (
        <Route path={"/" + page.link} element={<Content page={page} />} />
      ))}
      <Route
        path="/adminPage"
        element={
          <ProtectedRoute>
            <AdminPage />
          </ProtectedRoute>
        }
      />
      {/* <Route path="/ekleComponent" element={<AddComponent />} /> */}
      {/* <ProtectedRoute path="/ekleComponent" element={<AddComponent />} /> */}
      <Route path="/login" element={<Login />} />
    </Routes>
  );
}

export default Navs;
