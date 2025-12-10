import * as React from "react";

import { Navigate, Outlet, createRootRoute, redirect } from "@tanstack/react-router";

import { Toaster } from "react-hot-toast";

import { useAuth } from "@/stores/authStore/useAuthStore";

export const Route = createRootRoute({
  component: RootComponent,
  pendingComponent: () => <div>Loading ...</div>,
  notFoundComponent: () => {
    return <Navigate to="/404" />;
  },
  beforeLoad: ({ location }) => {
    if (location.pathname === "/") {
      const { isAuthenticated } = useAuth.getState();
      throw redirect({
        to: isAuthenticated ? "/quizzes" : "/login",
      });
    }
  },
});

function RootComponent() {
  return (
    <div className="bg-primary text-purple-100 relative">
      <Outlet />

      <Toaster position="top-center" reverseOrder={false} />
    </div>
  );
}
