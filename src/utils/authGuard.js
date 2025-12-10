import { redirect } from "@tanstack/react-router";

import { useAuth } from "@/stores/authStore/useAuthStore";

export function requireAuth(location) {
  const { isAuthenticated } = useAuth.getState();

  if (!isAuthenticated) {
    throw redirect({
      to: "/login",
      search: {
        redirect: location.href,
      },
    });
  }
}

export function requireGuest() {
  const { isAuthenticated } = useAuth.getState();

  if (isAuthenticated) {
    throw redirect({
      to: "/profile",
    });
  }
}
