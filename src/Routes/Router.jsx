import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../MainLayout";
import Home from "../pages/Home/Home";
import About from "../pages/About/About";
import Services from "../pages/Services/Services";
import Blogs from "../pages/Blogs/Blogs";
import Contact from "../pages/Contact/Contact";
import Appointment from "../pages/Appointment/Appointment";
import Login from "../components/authentication/Login";
import Register from "../components/authentication/Register";
import PrivateRouter from "./PrivateRouter";
import Dashboard from "../pages/Dashboard/Dashboard";
import ManageServices from "../pages/Dashboard/ManageServices";
import UserProfile from "../components/UserProfile";
import AddService from "../pages/Dashboard/AddService";
import CreateBlog from "../pages/Dashboard/CreateBlog";
import UpdateProfile from "../components/UpdateProfile";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "about",
        element: <About />,
      },
      {
        path: "services",
        element: (
          <PrivateRouter>
            <Services />
          </PrivateRouter>
        ),
      },
      {
        path: "blogs",
        element: <Blogs />,
      },
      {
        path: "contact",
        element: <Contact />,
      },
      {
        path: "appointment",
        element: (
          <PrivateRouter>
            <Appointment />
          </PrivateRouter>
        ),
      },
      {
        path: "login",
        element: <Login />,
      },
      {
        path: "register",
        element: <Register />,
      },
    ],
  },
  {
    path: "/dashboard",
    element: <Dashboard />,
    children: [
      {
        path: "/dashboard",
        element: <ManageServices />,
      },
      {
        path: "manage-services",
        element: <ManageServices />,
      },
      {
        path: "profile",
        element: <UserProfile />,
      },
      {
        path: "profile/update-profile",
        element: <UpdateProfile />,
      },
      {
        path: "add-service",
        element: <AddService />,
      },
      {
        path: "create-blog",
        element: <CreateBlog />,
      },
    ],
  },
  {
    path: "*",
    element: <div>Not Found</div>,
  },
]);
export default router;
