import React from "react";
import { Routes, Route } from "react-router-dom";
import Counter from "./counter.js";

function Navs() {
  return (
    <Routes>
      <Route path="/home" exact component={Counter} />
      <Route path="/about" exact component={Counter} />
      <Route path="/contact" exact component={Counter} />
    </Routes>
  );
}

export default Navs;
