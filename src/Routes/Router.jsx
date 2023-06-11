import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Login from "../Pages/Login/Login";
import Home from "../Layout/Home";
import Register from "../Pages/Login/Register";
import Dashboard from "../Layout/Dashboard";
import Instructors from "../Pages/Instructors/Instructors";
import Classes from "../Pages/Classes/Classes";
import ManageUsers from "../Pages/Dashboard/ManageUsers/ManageUsers";
import ManageClasses from "../Pages/Dashboard/ManageClasses/ManageClasses";
import PrivateRoute from "./PrivateRoute";
import AddClass from "../Pages/Dashboard/AddClass/AddClass";
import MyClasses from "../Pages/Dashboard/MyClasses/MyClasses";
import EditMyClass from "../Pages/Dashboard/MyClasses/EditMyClass";
import SelectedClass from "../Pages/Dashboard/SelectedClass/SelectedClass";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
      {
        path: "/instructors",
        element: <Instructors></Instructors>,
      },
      {
        path: "/classes",
        element: <Classes></Classes>,
      },
    ],
  },
  {
    path: "dashboard",
    element: (
      <PrivateRoute>
        <Dashboard></Dashboard>
      </PrivateRoute>
    ),
    children: [
      {
        path: "manageusers",
        element: <ManageUsers />,
      },
      {
        path: "selectedclass",
        element: <SelectedClass />,
      },
      {
        path: "manageclasses",
        element: <ManageClasses />,
      },
      {
        path: "addclass",
        element: <AddClass />,
      },
      {
        path: "myclasses",
        element: <MyClasses />,
      },
      {
        path: "myclasses/editmyclass/:id",
        element: <EditMyClass />,
        loader: ({ params }) =>
          fetch(`http://localhost:3000/classes/${params.id}`),
      },
    ],
  },
]);
