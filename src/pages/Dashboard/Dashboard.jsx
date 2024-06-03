import React, { useContext } from "react";
import { Link, NavLink, Outlet, useNavigate } from "react-router-dom";
import { AuthContext } from "../../ContextProvider/AuthProvider";

const Dashboard = () => {
  const navigate = useNavigate();
  const { user, loading, logOut } = useContext(AuthContext);

  const Signout = () => {
    logOut();
    navigate("/login");
  };

  const links = (
    <>
      <li>
        <NavLink to={"manage-services"}>Manage Services</NavLink>
      </li>
      <li>
        <NavLink to={"profile"}>Profilr</NavLink>
      </li>
      <li>
        <NavLink to={"add-service"}>Add Service</NavLink>
      </li>
      <li>
        <NavLink to={"create-blog"}>Create Blog</NavLink>
      </li>
    </>
  );
  return (
    <div className="drawer lg:drawer-open bg-gradient-to-b from-blue-400 to-blue-300">
      <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content min-h-screen flex flex-col items-center justify-center w-[90%] mx-auto">
        {/* Page content here */}
        <Outlet />
        <label
          htmlFor="my-drawer-2"
          className="btn bg-red-300 hover:bg-red-500 text-black drawer-button lg:hidden my-10 px-10"
        >
          Open SideBar
        </label>
      </div>

      <div className="drawer-side">
        <label
          htmlFor="my-drawer-2"
          aria-label="close sidebar"
          className="drawer-overlay"
        ></label>
        <ul className="menu p-4 w-80 min-h-full bg-gradient-to-br	from-blue-700 to-blue-400 flex flex-col justify-between">
          {/* Sidebar content here */}
          <div className="text-lg font-semibold text-stone-100">{links}</div>
          <div className="flex justify-between">
            <li className="bg-blue-700 text-white text-xl rounded-md hover:bg-red-600">
              <Link to="/">Go To Home</Link>
            </li>
            <li className="bg-blue-700 text-white text-xl rounded-md hover:bg-red-600">
              <button onClick={Signout}>LogOut</button>
            </li>
          </div>
        </ul>
      </div>
    </div>
  );
};

export default Dashboard;
