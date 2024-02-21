import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";

import { RouterProvider, createBrowserRouter } from "react-router-dom";
import DashBoard from "./scenes/dashboard/index";
import Team from "./scenes/dashboard/Team";

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <DashBoard />,
      },
      {
        path: "/team",
        element: <Team />,
      },
      // {
      //   path: "/contacts",
      //   element: <Contacts />,
      // },
      // {
      //   path: "/invoices",
      //   element: <Invoices />,
      // },
      // {
      //   path: "/form",
      //   element: <Form />,
      // },
      // {
      //   path: "/bar",
      //   element: <Bar />,
      // },
      // {
      //   path: "/pie",
      //   element: <Pie />,
      // },
      // {
      //   path: "/line",
      //   element: <Line />,
      // },
      // {
      //   path: "/faq",
      //   element: <FAQ />,
      // },
      // {
      //   path: "/geography",
      //   element: <Geography />,
      // },
      // {
      //   path: "/calender",
      //   element: <Calender />,
      // },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RouterProvider router={appRouter}>
      <App />
    </RouterProvider>
  </React.StrictMode>
);
