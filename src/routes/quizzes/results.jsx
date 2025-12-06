import { createFileRoute, useNavigate } from '@tanstack/react-router'
import MainLayout from '../../components/layout/MainLayout';

export const Route = createFileRoute('/quizzes/results')({
  component: ResultsPage,
})

function ResultsPage() {
  const navigate = useNavigate();

  const handleGoToLeaderboard = () => {
    navigate({ to: "/leaderboard" });
  }

  return <MainLayout>
    <h1>Hello "/quizzes/results"!</h1>
    <button onClick={handleGoToLeaderboard}>Go To Leaderboard</button>
    </MainLayout>
}
