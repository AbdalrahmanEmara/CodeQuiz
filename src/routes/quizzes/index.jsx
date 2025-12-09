import { createFileRoute, useNavigate } from "@tanstack/react-router";
import { Link } from "@tanstack/react-router";

import MainLayout from "@components/layout/MainLayout";
import { useAuth } from "@stores/useAuthStore";

export const Route = createFileRoute("/quizzes/")({
  component: QuizzesPage,
});

function QuizzesPage() {
  const navigate = useNavigate();
  const logout = useAuth((state) => state.logout);

  function handleLogout(e) {
    e.preventDefault();
    logout();
    navigate({ to: "/login" });
  }

  return (
    <MainLayout>
      Hello "/quizzes/"!
      <Link to="$quizId" params={{ quizId: "123" }}>
        Go to Id
      </Link>
      <button onClick={handleLogout} className="block text-red-500 font-bold text-2xl">
        Logout
      </button>
    </MainLayout>
  );
}
