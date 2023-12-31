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
import ErrorPage from "../Shared/ErrorPage/ErrorPage";
import Contact from "../Pages/Contact/Contact";
import Payment from "../Pages/Dashboard/Payment/Payment";
import PaymentHistory from "../Pages/Dashboard/PaymentHistory/PaymentHistory";
import EnrolledClass from "../Pages/Dashboard/EnrolledClass/EnrolledClass";
import AdminRoute from "../Routes/AdminRoute";
import InstructorRoute from "../Routes/InstructorRoute";
export const router = createBrowserRouter([
  {
    path: "/",
    errorElement: <ErrorPage />,
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
      {
        path: "/contact",
        element: <Contact></Contact>,
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
        element: (
          <AdminRoute>
            <ManageUsers></ManageUsers>
          </AdminRoute>
        ),
      },
      {
        path: "manageclasses",
        element: (
          <AdminRoute>
            <ManageClasses />
          </AdminRoute>
        ),
      },
      {
        path: "selectedclass",
        element: <SelectedClass />,
      },
      {
        path: "enrolledclass",
        element: <EnrolledClass />,
      },
      {
        path: "selectedclass/payment",
        element: <Payment />,
      },
      {
        path: "paymenthistory",
        element: <PaymentHistory />,
      },

      {
        path: "addclass",
        element: (
          <InstructorRoute>
            <AddClass />
          </InstructorRoute>
        ),
      },
      {
        path: "myclasses",
        element: (
          <InstructorRoute>
            <MyClasses />
          </InstructorRoute>
        ),
      },
      {
        path: "myclasses/editmyclass/:id",
        element: (
          <InstructorRoute>
            <EditMyClass />
          </InstructorRoute>
        ),
      },
    ],
  },
]);
