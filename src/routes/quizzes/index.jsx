import { Navigate, createFileRoute } from "@tanstack/react-router";
import { Link } from "@tanstack/react-router";

import { ArrowLeftRight, ChevronsLeftRight } from "lucide-react";

import MainLayout from "@components/layout/MainLayout";

import CategoryCard from "@/components/quiz/CategoryCard";

import { requireAuth } from "@/utils/authGuard";

export const Route = createFileRoute("/quizzes/")({
  component: QuizzesPage,
  beforeLoad: ({ location }) => requireAuth(location),
  meta: () => [{ title: "Quizzes - CodeQuiz" }],
});

function QuizzesPage() {
  return (
    <MainLayout>
      <div className="container mx-auto p-5">
        <h1 className="text-[28px] md:text-4xl lg:text-5xl text-center my-1 md:my-3 lg:my-4">
          Choose Your Challenge
        </h1>
        <p className="text-[13px] md:text-sm lg:text-lg text-center mb-8 md:mb-10 ">
          Select a programming category and test your skills
        </p>
        <div className="categories grid grid-cols-[repeat(auto-fit,minmax(280px,_1fr))] gap-4">
          <CategoryCard />
          <CategoryCard />
          <CategoryCard />
          <CategoryCard />
          <CategoryCard />
          <CategoryCard />
          <CategoryCard />
          <CategoryCard />
        </div>
      </div>
    </MainLayout>
  );
}
