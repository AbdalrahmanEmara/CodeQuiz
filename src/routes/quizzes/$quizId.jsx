import { createFileRoute } from "@tanstack/react-router";

import MainLayout from "@components/layout/MainLayout";

export const Route = createFileRoute("/quizzes/$quizId")({
  component: TakeQuiz,
});

function TakeQuiz() {
  const { quizId } = Route.useParams();

  return <MainLayout>Hello in Quiz ({quizId})</MainLayout>;
}
