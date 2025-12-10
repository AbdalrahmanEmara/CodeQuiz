import { Link, createFileRoute } from "@tanstack/react-router";

import MainLayout from "@components/layout/MainLayout";

export const Route = createFileRoute("/404")({
  component: NotFoundPage,
});

function NotFoundPage() {
  return (
    <MainLayout>
      <div className="flex flex-col items-center justify-center min-h-[60vh]">
        <h1 className="text-6xl font-bold text-purple-500">404</h1>
        <p className="text-2xl mt-4">Page Not Found</p>
        <Link to="/quizzes" className="mt-6 bg-purple-600 px-6 py-3 rounded-lg hover:bg-purple-700">
          Go Home
        </Link>
      </div>
    </MainLayout>
  );
}
