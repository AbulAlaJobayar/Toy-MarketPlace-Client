import { createBrowserRouter } from "react-router-dom";
import Main from "../Component/Main/Main";
import Home from "../Component/Home/Home/Home";
import ErrorPage from "../Component/ErrorPage/ErrorPage";
import Login from "../Component/Login/Login";
import SingUp from "../Component/SingUp/SingUp";
import AddAToy from "../Component/AddAToy/AddAToy";
import PrivateRoute from "./PrivateRoute";
import AllToys from "../Component/AllToys/AllToys";
import MyToys from "../Component/MyToys/MyToys";


const router = createBrowserRouter([
    {
      path: "/",
      element:<Main></Main>,
      errorElement: <ErrorPage></ErrorPage>,
      children: [
        {
          path: "/",
          element: <Home></Home>,
        },
        {
          path:'/login',
          element:<Login></Login>
        },
        {
          path:'/singup',
          element:<SingUp></SingUp>
        },
        {
          path:'/addatoy',
          element:<PrivateRoute><AddAToy></AddAToy></PrivateRoute>

        },
        {
          path:'/alltoys',
          element:<AllToys></AllToys>
        },
        {
          path:'/mytoys',
          element:<PrivateRoute><MyToys></MyToys></PrivateRoute>
        }
       
      ],
    },
  ]);
  export default router