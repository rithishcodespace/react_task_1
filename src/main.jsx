import ReactDOM from "react-dom/client";
import "./index.css";
import Header from "./components/Header";
import {createBrowserRouter,RouterProvider,Outlet} from "react-router-dom";
import About from "./components/About";
import Contact from "./components/Contact";
import Login from "./components/Login";
import Service from "./components/Service";
import Home from "./components/Home";

let root = ReactDOM.createRoot(document.getElementById("root"));

let App_layout = () =>{
  return(
    <div>
     <Header/>
     <Outlet/>
    </div>
  )
}

let route = createBrowserRouter([
  {
    path:"/",
    element:<App_layout/>,
    children:[
      {
        path:"/about",
        element:<About/>
      },
      {
        path:"/contact",
        element:<Contact/>
      },
      {
        path:"/login",
        element:<Login/>
      },
      {
        path:"/service",
        element:<Service/>
      },
      {
        path:"/",
        element:<Home/>
      }
    ]
  },
])

root.render(
  <RouterProvider router={route}/>  
)
