import { createFileRoute } from "@tanstack/react-router";

import MainLayout from "@components/layout/MainLayout";

import { requireAuth } from "@/utils/authGuard";

export const Route = createFileRoute("/quizzes/$quizId")({
  component: TakeQuiz,
  beforeLoad: ({ location }) => requireAuth(location),
});

function TakeQuiz() {
  const { quizId } = Route.useParams();

  return <MainLayout>Hello in Quiz ({quizId})</MainLayout>;
}
