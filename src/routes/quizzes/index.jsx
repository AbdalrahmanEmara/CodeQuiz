import { useState } from "react";

import { createFileRoute, useNavigate } from "@tanstack/react-router";

import { Flame, Skull, Zap } from "lucide-react";

import MainLayout from "@components/layout/MainLayout";

import CategoryCard from "@/components/quiz/CategoryCard";
import Modal from "@/components/ui/Modal";

import { useQuizStore } from "@/stores/currentQuiz/quizStore";

import { requireAuth } from "@/utils/authGuard";

export const Route = createFileRoute("/quizzes/")({
  component: QuizzesPage,
  beforeLoad: ({ location }) => requireAuth(location),
  meta: () => [{ title: "Quizzes - CodeQuiz" }],
});

const categories = ["Linux", "BASH", "HTML", "DevOps", "Code", "Docker", "React", "nodeJS"];

const difficulties = [
  {
    name: "Easy",
    icon: Zap,
    description: "Perfect for beginners",
    questions: 10,
    timePerQuestion: 15,
    iconColor: "text-green-400",
    bgColor: "bg-green-600/50",
    hoverBg: "hover:bg-green-500/70",
    borderColor: "border-green-600",
  },
  {
    name: "Medium",
    icon: Flame,
    description: "Test your knowledge",
    questions: 15,
    timePerQuestion: 20,
    iconColor: "text-orange-400",
    bgColor: "bg-orange-700/50",
    hoverBg: "hover:bg-orange-500/70",
    borderColor: "border-orange-400",
  },
  {
    name: "Hard",
    icon: Skull,
    description: "For experts only",
    questions: 20,
    timePerQuestion: 25,
    iconColor: "text-red-400",
    bgColor: "bg-red-700/50",
    hoverBg: "hover:bg-red-600/60",
    borderColor: "border-red-500",
  },
];
function QuizzesPage() {
  const navigate = useNavigate();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [categorySelected, setCategorySelected] = useState("");
  const selectQuiz = useQuizStore((state) => state.selectQuiz);

  const handleCategoryClick = (category) => {
    setCategorySelected(category);
    setIsModalOpen(true);
  };

  const handleDifficultyLevel = (difficulty) => {
    navigate({
      to: "/quizzes/$quizId",
      params: { quizId: `${categorySelected}-${difficulty}`.toLowerCase() },
    });
    selectQuiz(difficulty, categorySelected);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setCategorySelected("");
  };

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
          {categories.map((category, index) => (
            <CategoryCard
              key={index}
              name={category}
              onClick={() => handleCategoryClick(category)}
            />
          ))}
        </div>
      </div>
      {isModalOpen ? (
        <Modal isOpen={isModalOpen} onClose={handleCloseModal}>
          <header className="flex justify-between items-start">
            <div className="about">
              <h1 className="text-2xl font-semibold mb-1">{categorySelected}</h1>
              <p className="text-slate-400 mb-3 ">Choose your challenge level</p>
            </div>
            <button className="cursor-pointer" onClick={() => setIsModalOpen(!isModalOpen)}>
              X
            </button>
          </header>
          <hr className="w-full text-slate-500" />
          <div className="py-5 flex flex-col gap-4">
            {difficulties.map((diff) => {
              const Icon = diff.icon;

              return (
                <button
                  className={`${diff.bgColor} ${diff.hoverBg} border ${diff.borderColor} p-5 transition-all duration-300 hover:scale-102 rounded-2xl flex gap-4  cursor-pointer`}
                  onClick={() => handleDifficultyLevel(diff.name)}
                >
                  <Icon className={`rounded-lg w-10 h-10 p-2 bg-slate-800 ${diff.iconColor}`} />
                  <div className="content text-start">
                    <p className="font-semibold text-lg">{diff.name}</p>
                    <p className="text-sm text-slate-300">{diff.description}</p>
                    <span className="text-xs bg-slate-900/50 py-1 px-2 rounded-2xl text-slate-400 mr-2">
                      {diff.questions} questions
                    </span>
                    <span className="text-xs bg-slate-900/50 py-1 px-2 rounded-2xl text-slate-400">
                      {diff.timePerQuestion} seconds each
                    </span>
                  </div>
                </button>
              );
            })}
          </div>
          <hr className="w-full text-slate-500" />
          <button
            className="w-full bg-slate-900 mt-6 rounded-xl p-3 text-slate-400 cursor-pointer"
            onClick={handleCloseModal}
          >
            Cancel
          </button>
        </Modal>
      ) : null}
    </MainLayout>
  );
}
