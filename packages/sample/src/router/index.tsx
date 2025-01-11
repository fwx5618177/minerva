import React from "react";
import { createBrowserRouter, Navigate } from "react-router-dom";
import Layout from "@layout/Layout";
import ErrorBoundary from "@pages/ErrorBoundary";
import NotFoundPage from "@pages/NotFoundPage";
import { flattenedRoutes } from "./routes";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <ErrorBoundary />,
    children: [
      {
        index: true,
        element: <Navigate to="/overview" replace />,
      },
      ...flattenedRoutes,
      {
        path: "*",
        element: <NotFoundPage />,
      },
    ],
  },
]);

export default router;
