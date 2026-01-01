import { useState } from "react";

import { createFileRoute } from "@tanstack/react-router";

import { ArrowRight } from "lucide-react";
import { Clock } from "lucide-react";

import MainLayout from "@components/layout/MainLayout";

import ProgressBar from "@/components/ui/ProgressBar";

import { useQuizStore } from "@/stores/currentQuiz/quizStore";

import { requireAuth } from "@/utils/authGuard";
import { useQuiz } from "@/utils/useQuiz";

export const Route = createFileRoute("/quizzes/$quizId")({
  component: TakeQuiz,
  beforeLoad: ({ location }) => requireAuth(location),
});

function TakeQuiz() {
  const { quizId } = Route.useParams();
  const [isAnswered, setIsAnswered] = useState(false);
  const { category, difficulty } = useQuizStore();

  const { data, isPending, error, isError } = useQuiz(category, difficulty);

  if (isError) {
    console.log(error.message);
  }

  if (data) {
    console.log(data);
  }
  function handleAnswer() {
    setIsAnswered(true);
  }

  if (isPending) {
    return (
      <MainLayout>
        <div>Loading...</div>
      </MainLayout>
    );
  }

  if (isError) {
    return (
      <MainLayout>
        <div>{error.message}</div>
      </MainLayout>
    );
  }

  return (
    <MainLayout>
      Hello in Quiz ({quizId})
      <div className="max-w-[750px] m-auto px-4 relative pb-30">
        <div className="mb-5">
          <div className="w-full flex items-center justify-between pt-6 pb-3 text-sm ">
            <span>Question 1 of 10</span>
            <span className="flex gap-2 items-center text-slate-400">
              <Clock />
              20s
            </span>
          </div>
          <ProgressBar value={50} max={100} />
          {/* <TestComponent /> */}
        </div>
        <div className="p-5 bg-slate-800/50 rounded-2xl border border-slate-800">
          <p className="font-semibold">Question</p>
          <ul className="text-slate-300">
            <li
              className="p-3 md:p-4.5 bg-slate-900/50 my-3 rounded-lg border border-slate-700 hover:bg-slate-900/90 transition-all duration-200 cursor-pointer correct-answer"
              onClick={handleAnswer}
            >
              answer 1
            </li>
            <li
              className="p-3 md:p-4.5 bg-slate-900/50 my-3 rounded-lg border border-slate-700 hover:bg-slate-900/90 transition-all duration-200 cursor-pointer"
              onClick={handleAnswer}
            >
              answer 2
            </li>
            <li
              className="p-3 md:p-4.5 bg-slate-900/50 my-3 rounded-lg border border-slate-700 hover:bg-slate-900/90 transition-all duration-200 cursor-pointer"
              onClick={handleAnswer}
            >
              answer 3
            </li>
            <li
              className="p-3 md:p-4.5 my-3 rounded-lg border border-slate-700 hover:bg-slate-900/90 transition-all duration-200 cursor-pointer bg-red-600/65"
              onClick={handleAnswer}
            >
              answer 4
            </li>
            {isAnswered ? (
              <li className="p-3 md:p-4.5 bg-slate-900/50 mb-3 mt-7 rounded-lg border border-slate-700 hover:bg-slate-900/90 transition-all duration-200 cursor-pointer">
                <p className="text-purple-600 mb-2">Explanation</p>
                <p>The explanation of the answer</p>
              </li>
            ) : null}
          </ul>
        </div>
        <button className="flex bg-purple-700 px-5 py-3 text-sm rounded-xl mt-5 absolute right-0 w-fit h-fit -translate-x-4 font-semibold cursor-pointer hover:bg-purple-800 duration-200 transition-all">
          Next Question <ArrowRight className="w-5 h-5 ml-1 " />
        </button>
      </div>
    </MainLayout>
  );
}
