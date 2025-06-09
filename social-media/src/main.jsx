import React from "react";
import ReactDOM from "react-dom/client";
import App from "./router/App.jsx";
import "bootstrap/dist/css/bootstrap.min.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Createpost, { createpostaction } from "./components/Createpost.jsx";
import Postlist from "./components/Postlist.jsx";
import { postLoader } from "./components/Postlist.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: "/Post-list", element: <Postlist />, loader: postLoader },
      {
        path: "/create-post",
        element: <Createpost />,
        action: createpostaction,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>
);
