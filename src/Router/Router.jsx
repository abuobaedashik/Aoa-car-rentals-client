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
            element:<AddCar/>
        },
        {
            path:"/my-cars",
            element:<Mycars/>
        },

      ]
    },
  ]);

  export default Router;