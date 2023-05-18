import { createBrowserRouter } from "react-router-dom";
import Main from "../Component/Main/Main";
import Home from "../Component/Home/Home/Home";

const router = createBrowserRouter([
    {
      path: "/",
      element:<Main></Main>,
      // errorElement: <ErrorPage />,
      children: [
        {
          path: "/",
          element: <Home></Home>,
        },
      ],
    },
  ]);
  export default router