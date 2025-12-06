import { createFileRoute } from '@tanstack/react-router'
import { Link } from '@tanstack/react-router'
import MainLayout from '../../components/layout/MainLayout'
export const Route = createFileRoute('/quizzes/')({
  component: QuizzesPage,
})

function QuizzesPage() {
  
  return <MainLayout>
    Hello "/quizzes/"!
    <Link to="$quizId" params={{ quizId: '123'}}>Go to Id</Link>
  </MainLayout>
}
