import { Link, NavLink, Outlet, useNavigate } from "react-router-dom";
import { AuthContext } from "../../ContextProvider/AuthProvider";
import { useContext } from "react";

const Dashboard = () => {
  const navigate = useNavigate();
  const { logOut } = useContext(AuthContext);

  const Signout = () => {
    logOut();
    navigate("/login");
  };

  const links = (
    <>
      <li>
        <NavLink className="hover:bg-blue-800" to={"manage-treatments"}>
          Manage Treatments
        </NavLink>
      </li>
      <li>
        <NavLink className="hover:bg-blue-800" to={"profile"}>
          Profilr
        </NavLink>
      </li>
      <li>
        <NavLink className="hover:bg-blue-800" to={"add-treatment"}>
          Add Treatment
        </NavLink>
      </li>
      <li>
        <NavLink className="hover:bg-blue-800" to={"create-blog"}>
          Create Blog
        </NavLink>
      </li>
      <li>
        <NavLink className="hover:bg-blue-800" to={"add-review"}>
          Add Review
        </NavLink>
      </li>
      <li>
        <NavLink className="hover:bg-blue-800" to={"all-user"}>
          All User
        </NavLink>
      </li>
      <li>
        <NavLink className="hover:bg-blue-800" to={"all-appointments"}>
          All Appointments
        </NavLink>
      </li>
    </>
  );
  return (
    <div className="drawer lg:drawer-open ">
      <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content min-h-screen flex flex-col items-center justify-center min-w-[100%] mx-auto bg-gradient-to-b from-blue-400 to-blue-300 overflow-auto">
        {/* Page content here */}
        <Outlet />
        <label
          htmlFor="my-drawer-2"
          className="btn bg-red-300 hover:bg-red-500 text-black drawer-button lg:hidden my-10 px-10"
        >
          Open SideBar
        </label>
      </div>

      <div className="drawer-side z-10 h-[100vh]">
        <label
          htmlFor="my-drawer-2"
          aria-label="close sidebar"
          className="drawer-overlay"
        ></label>
        <ul className="menu p-4 md:w-80 min-h-full bg-gradient-to-br	from-blue-700 to-blue-400 flex flex-col justify-between">
          {/* Sidebar content here */}
          <div className="text-lg font-semibold text-stone-100">{links}</div>
          <div className="flex justify-between gap-2">
            <li className="bg-blue-700 text-white text-lg md:text-xl rounded-md hover:bg-blue-800">
              <Link to="/">Go To Home</Link>
            </li>
            <li className="bg-blue-700 text-white text-lg md:text-xl rounded-md hover:bg-blue-800">
              <button onClick={Signout}>LogOut</button>
            </li>
          </div>
        </ul>
      </div>
    </div>
  );
};

export default Dashboard;
