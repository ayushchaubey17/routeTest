import * as React from "react";
import { useState } from "react";
import * as ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import "./index.css";
import Header from "./component/Header";
import Home from "./component/Home";
import About from "./About";
import Contact from "./component/Contact";
import More from "./component/More";


let router = createBrowserRouter([
{
  path:'/',
  element: <Home  />,
 
},{
  path:'/contact',
  element: <Contact />,
}
,{
  path:'/about',
  element: <About/>
},{
  path:'/more',
  element:<More/>
}
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);