import {
    createBrowserRouter,
    RouterProvider,
  } from "react-router-dom";
import MainLayout from "../Pages/MainLayout";
import Home from "../Pages/Home";
import Register from "../Pages/Register";
import Login from "../Pages/Login";
import Available from "../Pages/Available";
import AddCar from "../Pages/AddCar";
import Mycars from "../Pages/Mycars";
import PrivateRoute from "./PrivateRoute";
import MyBookings from "../Pages/MyBookings";

  const Router = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout></MainLayout>,
      children:[
        {
            path:"/",
            element:<Home></Home>
        },
        {
            path:"/register",
            element:<Register></Register>
        },
        {
            path:"/login",
            element:<Login></Login>
        },
        {
            path:"/available",
            element:<Available></Available>
        },
        {
            path:"/add-car",
            element:<PrivateRoute><AddCar/></PrivateRoute>
        },
        {
            path:"/my-cars",
            element:<PrivateRoute><Mycars/></PrivateRoute>
        },
        {
            path:"/my-bookings",
            element:<PrivateRoute><MyBookings/></PrivateRoute>
        },

      ]
    },
  ]);

  export default Router;