/* eslint-disable react/prop-types */
import { useContext } from "react";
import { AuthContext } from "../ContextProvider/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";

const PrivateRoute = ({ children }) => {
  const { user, loading } = useContext(AuthContext);
  const location = useLocation();

  if (loading)
    return (
      <div>
        <span className="loading loading-spinner loading-lg"></span>
      </div>
    );

  if (user?.email) return children;

  return <Navigate state={location.pathname} to="/login" />;
};

export default PrivateRoute;
