import { createFileRoute } from "@tanstack/react-router";

import MainLayout from "@components/layout/MainLayout";

export const Route = createFileRoute("/profile/")({
  component: ProfilePage,
});

function ProfilePage() {
  return <MainLayout>Hello "/profile/"!</MainLayout>;
}
