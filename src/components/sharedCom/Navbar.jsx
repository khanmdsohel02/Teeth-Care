import { Link, NavLink, useNavigate } from "react-router-dom";
import ContactNav from "./ContactNav";
import { useContext } from "react";
import { AuthContext } from "../../ContextProvider/AuthProvider";
import { toast } from "react-toastify";

const Navbar = () => {
  const navigate = useNavigate();
  const { user, logOut } = useContext(AuthContext);

  const handleLogOut = () => {
    logOut();
    toast.success("Thank you for visiting! Teeth Care");
    navigate("/login");
  };

  const links = (
    <>
      <li>
        <NavLink
          className="text-white text-lg font-semibold hover:bg-blue-700"
          to="/about"
        >
          About
        </NavLink>
      </li>
      <li>
        <NavLink
          className="text-white text-lg font-semibold hover:bg-blue-700"
          to="/treatments"
        >
          Treatments
        </NavLink>
      </li>
      <li>
        <NavLink
          className="text-white text-lg font-semibold hover:bg-blue-700"
          to="/blogs"
        >
          Blogs
        </NavLink>
      </li>
      <li>
        <NavLink
          className="text-white text-lg font-semibold hover:bg-blue-700"
          to="/contact"
        >
          Contact
        </NavLink>
      </li>
      {user && (
        <li>
          <NavLink
            className="text-white text-lg font-semibold hover:bg-blue-700"
            to="dashboard"
          >
            Dashboard
          </NavLink>
        </li>
      )}
    </>
  );
  return (
    <>
      <div className=" navbar bg-gradient-to-r from-blue-700 to-blue-400 h-20 fixed top-0 left-0 z-[100] shadow-lg">
        <div className="navbar lg:w-[80%] mx-auto">
          <div className="navbar-start">
            <div className="dropdown">
              <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost lg:hidden"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h8m-8 6h16"
                  />
                </svg>
              </div>
              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content mt-4 z-[1] p-2 shadow rounded-b-md w-52  bg-gradient-to-b from-blue-400 to-blue-700"
              >
                {links}
              </ul>
            </div>
            <Link to="/" className="text-2xl h-20 w-24">
              <img
                className="h-full w-full"
                src="https://i.ibb.co/CWFQYmM/logo.png"
                alt="mainLogo"
              />
            </Link>
          </div>
          <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal px-1 ">{links}</ul>
          </div>
          <div className="navbar-end space-x-3">
            {user ? (
              <>
                <button
                  onClick={handleLogOut}
                  className="btn bg-red-600 hover:bg-blue-700 text-white text-lg font-semibold border-none"
                >
                  Logout
                </button>
                <div className="avatar online hidden md:block">
                  <div className="w-14 rounded-full">
                    <img className="w-full" src={user?.photoURL} />
                  </div>
                </div>
              </>
            ) : (
              <Link
                to="/login"
                className="btn bg-blue-600 hover:bg-blue-700 text-white text-lg font-semibold border-none"
              >
                Login
              </Link>
            )}
          </div>
        </div>
      </div>
      <div className="bg-blue-700 mt-20">
        <div className="lg:min-h-16">
          <ContactNav />
        </div>
      </div>
    </>
  );
};

export default Navbar;
