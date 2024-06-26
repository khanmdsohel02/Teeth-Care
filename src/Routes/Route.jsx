import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../MainLayout";
import Home from "../pages/Home/Home";
import About from "../pages/About/About";
import Blogs from "../pages/Blogs/Blogs";
import Contact from "../pages/Contact/Contact";
import Appointment from "../pages/Appointment/Appointment";
import Login from "../components/authentication/Login";
import Register from "../components/authentication/Register";
import Dashboard from "../pages/Dashboard/Dashboard";
import UserProfile from "../components/UserProfile";
import CreateBlog from "../pages/Dashboard/CreateBlog";
import UpdateProfile from "../components/UpdateProfile";
import AddReview from "../pages/Dashboard/AddReview";
import AllUser from "../pages/Dashboard/AllUser";
import AddTreatment from "../pages/Dashboard/AddTreatment";
import Treatments from "../pages/Treatments/Treatments";
import ManageTreatments from "../pages/Dashboard/ManageTreatments";
import UpdateTreatment from "../components/UpdateTreatment";
import PrivateRoute from "./PrivateRoute";
import AllAppointments from "../pages/Dashboard/AllAppointments";
import NotFound from "../components/NotFound";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        index: true,
        element: <Home />,
        loader: () => fetch("https://teeth-care-backend.vercel.app/treatments"),
      },
      {
        path: "about",
        element: <About />,
      },
      {
        path: "treatments",
        element: <Treatments />,
      },
      {
        path: "blogs",
        element: <Blogs />,
        loader: () => fetch("https://teeth-care-backend.vercel.app/blogs"),
      },
      {
        path: "contact",
        element: <Contact />,
      },
      {
        path: "appointment",
        element: <Appointment />,
      },

      {
        path: "treatments/appointment/:id",
        element: (
          <PrivateRoute>
            <Appointment />
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(`https://teeth-care-backend.vercel.app/treatment/${params.id}`),
      },
      {
        path: "appointment/:id",
        element: (
          <PrivateRoute>
            <Appointment />
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(`https://teeth-care-backend.vercel.app/treatment/${params.id}`),
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
    element: (
      <PrivateRoute>
        <Dashboard />
      </PrivateRoute>
    ),
    children: [
      {
        path: "/dashboard",
        element: <ManageTreatments />,
        loader: () => fetch("https://teeth-care-backend.vercel.app/treatments"),
      },
      {
        path: "/dashboard/update-treatment/:id",
        element: <UpdateTreatment />,
        loader: ({ params }) =>
          fetch(`https://teeth-care-backend.vercel.app/treatment/${params.id}`),
      },
      {
        path: "manage-treatments",
        element: <ManageTreatments />,
        loader: () => fetch("https://teeth-care-backend.vercel.app/treatments"),
      },
      {
        path: "manage-treatments/update-treatment/:id",
        element: <UpdateTreatment />,
        loader: async ({ params }) =>
          await fetch(
            `https://teeth-care-backend.vercel.app/treatment/${params.id}`
          ),
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
        path: "add-treatment",
        element: <AddTreatment />,
      },
      {
        path: "create-blog",
        element: <CreateBlog />,
      },
      {
        path: "add-review",
        element: <AddReview />,
      },
      {
        path: "all-user",
        element: <AllUser />,
        loader: () => fetch("https://teeth-care-backend.vercel.app/users"),
      },
      {
        path: "all-appointments",
        element: <AllAppointments />,
        loader: () =>
          fetch("https://teeth-care-backend.vercel.app/appointments"),
      },
    ],
  },
  {
    path: "*",
    element: <NotFound />,
  },
]);
export default router;
