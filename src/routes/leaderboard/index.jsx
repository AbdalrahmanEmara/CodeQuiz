import { Navigate, createFileRoute } from "@tanstack/react-router";

import MainLayout from "@components/layout/MainLayout";

import { requireAuth } from "@/utils/authGuard";

export const Route = createFileRoute("/leaderboard/")({
  component: LeaderboardPage,
  beforeLoad: ({ location }) => requireAuth(location),
});

function LeaderboardPage() {
  return <MainLayout>Hello "/leaderboard/"!</MainLayout>;
}
