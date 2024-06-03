/* eslint-disable react/prop-types */
import { useContext } from "react";
import { AuthContext } from "../ContextProvider/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";

const PrivateRouter = ({ Children }) => {
  const { user, loading } = useContext(AuthContext);
  const location = useLocation();
  console.log(user);

  if (loading)
    return (
      <div>
        <span className="loading loading-spinner loading-lg"></span>
      </div>
    );

  if (user) return Children;

  return <Navigate state={location.pathname} to="/login" />;
};
export default PrivateRouter;
