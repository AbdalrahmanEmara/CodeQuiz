import { createFileRoute } from '@tanstack/react-router'
import MainLayout from '../../components/layout/MainLayout'

export const Route = createFileRoute('/leaderboard/')({
  component: LeaderboardPage,
})

function LeaderboardPage() {
  return <MainLayout>Hello "/leaderboard/"!</MainLayout>
}
