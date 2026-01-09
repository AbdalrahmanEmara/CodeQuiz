import { createFileRoute, useNavigate } from "@tanstack/react-router";

import MainLayout from "@components/layout/MainLayout";

import { requireAuth } from "@/utils/authGuard";

export const Route = createFileRoute("/quizzes/results")({
  component: ResultsPage,
  beforeLoad: ({ location }) => requireAuth(location),
});

function ResultsPage() {
  const navigate = useNavigate();

  const handleGoToLeaderboard = () => {
    navigate({ to: "/leaderboard" });
  };

  return (
    <MainLayout>
      <h1>Hello "/quizzes/results"!</h1>
      <button onClick={handleGoToLeaderboard}>Go To Leaderboard</button>
    </MainLayout>
  );
}
