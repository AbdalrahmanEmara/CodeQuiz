import * as React from "react";

import { Outlet, createRootRoute, redirect } from "@tanstack/react-router";

import { Toaster } from "react-hot-toast";

export const Route = createRootRoute({
  component: RootComponent,
  beforeLoad: ({ location }) => {
    if (location.pathname === "/") {
      throw redirect({
        to: "/login",
      });
    }
  },
});

function RootComponent() {
  return (
    <div className="bg-primary">
      <Outlet />

      <Toaster position="top-center" reverseOrder={false} />
    </div>
  );
}
