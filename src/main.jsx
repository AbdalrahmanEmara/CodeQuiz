import { StrictMode } from "react";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
// import App from "./App.jsx";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { RouterProvider, createRouter } from "@tanstack/react-router";

import { createRoot } from "react-dom/client";

import "./index.css";
// import { createRouter } from "@tanstack/router-plugin";
import { routeTree } from "./routeTree.gen";

const queryClient = new QueryClient();

const router = createRouter({ routeTree });

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
      <ReactQueryDevtools />
    </QueryClientProvider>
  </StrictMode>
);
