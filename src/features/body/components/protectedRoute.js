// protected route component
import React from "react";
import auth from "../../authentication/auth";
import { useHistory } from "react-router-dom";
import { Route } from "react-router-dom";

function ProtectedRoute({ component: Component, ...rest }) {
  const history = useHistory();
  if (!auth.isAuthenticated()) {
    history.push("/login");
  }
  return <Route {...rest} render={(props) => <Component {...props} />} />;
}

export default ProtectedRoute;
