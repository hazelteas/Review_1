import * as React from "react";
import * as ReactDOM from "react-dom";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";


const router = createBrowserRouter([
  {
    path: "/",
    element: <h1>hhohiu</h1>,
    children: [
      {
        path: "login",
        element: <h1 />,
      },
    ],
  },
]);



ReactDOM.createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);