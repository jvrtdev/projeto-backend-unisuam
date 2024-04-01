
import Cadastro from "@/pages/Cadastro";
import ErrorPage from "@/pages/ErrorPage";
import Home from "@/pages/Home";
import Login from "@/pages/Login";
import RootLayout from "@/pages/RootLayout";

import { createBrowserRouter } from "react-router-dom"

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout/>,
    errorElement: <ErrorPage/>,
    children: [{
      index: true,
      element: <Home/>
    }, 
    {
      path:"/login",
      element: <Login/>
    },
    {
      path: "/cadastro",
      element: <Cadastro/>
    }
  
  ]
  },
])

export default router;