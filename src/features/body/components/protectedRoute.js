// protected route component
import React from "react";
import auth from "../../authentication/auth/auth";
import { useNavigate } from "react-router-dom";
import { Route } from "react-router-dom";

function ProtectedRoute({ element: Component, path }) {
  const history = useNavigate();
  // if (!auth.isAuthenticated()) {
  //   history.push("/login");
  // }
  return <Route path={path} element={Component} />;
}

export default ProtectedRoute;
