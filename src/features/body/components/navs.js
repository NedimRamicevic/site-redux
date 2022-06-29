import React from "react";
import { Routes, Route } from "react-router-dom";
import { useSelector } from "react-redux";
import Content from "./content.js";
import AddPage from "../../adminPanel/components/addPage";
import AddComponent from "../../adminPanel/components/addComponent.js";
import Login from "../../authentication/components/login.js";

function Navs() {
  const pages = useSelector((state) => state.addPage);
  return (
    <Routes>
      {pages.map((page) => (
        <Route path={"/" + page.link} element={<Content page={page} />} />
      ))}
      <Route path="/ekle" element={<AddPage />} />
      <Route path="/ekleComponent" element={<AddComponent />} />
      <Route path="/login" element={<Login />} />
    </Routes>
  );
}

export default Navs;
