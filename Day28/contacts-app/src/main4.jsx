import React from "react";
import ReactDOM from "react-dom/client";
import { Layout } from "./App2";
import "./index.css";
import { createBrowserRouter } from "react-router-dom";
import { createRoutesFromElements } from "react-router-dom";
import { Route } from "react-router-dom";
import { RouterProvider } from "react-router-dom";
import { loadContacts } from "./loaders";
import Contact from "./Contact";


const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
   <Route path="/contacts" element={<Contact />} loader={loadContacts} />
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);



// Benefits of using this approach to create browser router that we can load the data 
// associated with the route before that component is rendered and then that data can 
// be made available inside that component using some special hooks

// Data provided by loader is available using this 
// useLoaderData hook