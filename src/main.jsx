import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
// import { createRouter } from "@tanstack/router-plugin";
import { routeTree } from "./routeTree.gen";
import "./index.css";
// import App from "./App.jsx";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { RouterProvider, createRouter } from "@tanstack/react-router";

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
