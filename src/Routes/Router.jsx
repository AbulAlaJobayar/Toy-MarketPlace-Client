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
import UpdateToy from "../Component/UpdateToy/UpdateToy";
import Details from "../Component/Details/Details";
import Blogs from "../Component/Blog/Blogs";


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
        },
        {
          path:'/updatetoy/:id',
          element:<UpdateToy></UpdateToy>,
          loader:({params})=>fetch(`https://assingment-11-server-blue.vercel.app/postdata/${params.id}`)
        },
        {
          path:'/viewdetails/:id',
          element:<PrivateRoute><Details></Details></PrivateRoute>,
          loader:({params})=>fetch(`https://assingment-11-server-blue.vercel.app/postdata/${params.id}`)
        },
        {
          path:'/blog',
          element:<Blogs></Blogs>
        },
       
      ],
    },
  ]);
  export default router