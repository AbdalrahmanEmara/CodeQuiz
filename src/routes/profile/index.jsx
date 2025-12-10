import { Navigate, createFileRoute } from "@tanstack/react-router";

import MainLayout from "@components/layout/MainLayout";

import { requireAuth } from "@/utils/authGuard";

export const Route = createFileRoute("/profile/")({
  component: ProfilePage,
  beforeLoad: ({ location }) => requireAuth(location),
});

function ProfilePage() {
  return <MainLayout>Hello "/profile/"!</MainLayout>;
}
