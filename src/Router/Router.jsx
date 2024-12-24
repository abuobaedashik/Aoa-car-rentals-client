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
import Update from "../Pages/Update";
import Details from "../Pages/Details";


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
            element:<Available></Available>,
            loader:()=>fetch('http://localhost:4000/cars')
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
        {
            path:"/update/:id",
            element:<Update></Update>,
            loader:({params})=>fetch(`http://localhost:4000/update/${params.id}`)
        },
        {
            path:"available/details/:id",
            element:<Details></Details>,
            loader:({params})=>fetch(`http://localhost:4000/cars/${params.id}`)
        },
         
         {
          path:'*',
          element:<h2 className="text-3xl font-bold min-h-screen flex items-center justify-center text-red-700">Page Not Found</h2>
        }

      ]
    },
  ]);

  export default Router;