import { useEffect, useState } from "react";

import { createFileRoute } from "@tanstack/react-router";

import { ArrowRight, CircleCheck, CircleX, TruckElectric } from "lucide-react";

import MainLayout from "@components/layout/MainLayout";

import ErrorQuiz from "@/components/quiz/ErrorQuiz";
import QuizTimer from "@/components/quiz/QuizTimer";
import RubiksCubeLoader from "@/components/quiz/RubiksCubeLoader";
import ProgressBar from "@/components/ui/ProgressBar";

import { useQuizStore } from "@/stores/currentQuiz/quizStore";

import { requireAuth } from "@/utils/authGuard";
import { useQuiz } from "@/utils/useQuiz";

export const Route = createFileRoute("/quizzes/$quizId")({
  component: TakeQuiz,
  beforeLoad: ({ location }) => requireAuth(location),
});

function TakeQuiz() {
  const [isActive, setIsActive] = useState(true);
  const [choosedAnswer, setChoosedAnswer] = useState(null);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const {
    currentIndex,
    difficulty,
    category,
    nextQuestion,
    finishQuiz,
    submitAnswer,
    // chooseQuiz,
    currentQuizQuestions,
    Finished,
  } = useQuizStore();
  const timerPerQuestion = difficulty === "easy" ? 20 : difficulty === "medium" ? 30 : 40;

  const { data: quiz, isPending, error, isError } = useQuiz(category, difficulty);

  const pointPerQuestion = difficulty === "easy" ? 10 : difficulty === "medium" ? 20 : 30;

  useEffect(() => {
    console.log(currentQuizQuestions);
  }, [quiz, currentQuizQuestions]);

  // function handleChooseQuiz() {
  //   chooseQuiz(quiz.questions);
  //   console.log(currentQuizQuestions);
  // }

  function handleChooseAnswer(optionIndex) {
    setChoosedAnswer(optionIndex);
  }

  function handleSubmitAnswer() {
    const answer = choosedAnswer === quiz.questions[currentIndex].correctAnswer;
    submitAnswer(answer, currentIndex);
    setIsActive(false);
    setIsSubmitted(true);
  }

  function handleNextQuestion() {
    setIsActive(true);
    setChoosedAnswer(null);
    nextQuestion();
  }

  function handleFinishQuiz() {
    finishQuiz(pointPerQuestion);
  }

  if (isError) {
    console.log(error.message);
  }

  if (isPending) {
    return (
      <MainLayout>
        <RubiksCubeLoader />
      </MainLayout>
    );
  }

  if (isError) {
    console.log(error);
    return (
      <MainLayout>
        <ErrorQuiz error={error} errorNumber={error.status} />
      </MainLayout>
    );
  }

  return (
    <MainLayout>
      <div className="max-w-[750px] m-auto px-4 relative pb-30">
        <div className="mb-5">
          <div className="w-full flex items-center justify-between pt-6 pb-3 text-sm ">
            <span>Question {currentIndex + 1} of 10</span>
            <QuizTimer
              timerPerQuestion={timerPerQuestion}
              isActive={isActive}
              setIsActive={setIsActive}
            />
          </div>
          <ProgressBar value={currentIndex + 1} max={quiz.questions.length} />
        </div>
        <div className="p-5 bg-slate-800/50 rounded-2xl border border-slate-800">
          <p className="font-semibold">{quiz.questions[currentIndex].question}</p>
          <div className="text-slate-300">
            {quiz.questions[currentIndex].options.map((opt, index) => (
              <button
                className={`w-full flex flex-row justify-between align-middle gap-2 p-3 md:p-4.5 text-white text-sm md:text-[16px] ${isSubmitted && index === quiz.questions[currentIndex].correctAnswer ? "bg-green-500/20 border-green-500" : isSubmitted && index === choosedAnswer ? "bg-red-500/20 border-red-500" : "bg-slate-900/50 border-slate-700"} my-3 rounded-lg border ${isSubmitted && "hover:bg-slate-900/90"} transition-all duration-200 ${isActive ? "cursor-pointer" : "cursor-not-allowed"}`}
                onClick={() => handleChooseAnswer(index)}
                disabled={isSubmitted}
              >
                {opt} $
                {!isActive && index === quiz.questions[currentIndex].correctAnswer ? (
                  <CircleCheck className="text-green-500 w-6 h-6" />
                ) : !isActive && index === choosedAnswer ? (
                  <CircleX className="text-red-500 w-6 h-6" />
                ) : null}
              </button>
            ))}

            {!isActive ? (
              <li className="p-3 md:p-4.5 bg-slate-900/50 mb-3 mt-7 rounded-lg border border-slate-700 hover:bg-slate-900/90 transition-all duration-200">
                <p className="text-purple-600 mb-2">Explanation</p>
                <p>{quiz.questions[currentIndex].explanation}</p>
              </li>
            ) : null}
          </div>
        </div>
        <div className="flex flex-row w-full justify-between ">
          {choosedAnswer !== null && isSubmitted && currentIndex === quiz.question.length - 1 ? (
            <button
              className="flex bg-purple-700 px-5 py-3 text-sm rounded-xl mt-5 w-fit h-fit font-semibold cursor-pointer hover:bg-purple-800 duration-200 transition-all"
              onClick={handleFinishQuiz}
              disabled={currentIndex === 9}
            >
              Finish <ArrowRight className="w-5 h-5 ml-1 " />
            </button>
          ) : choosedAnswer !== null && isSubmitted ? (
            <button
              className={`flex bg-purple-700 px-5 py-3 text-sm rounded-xl mt-5 w-fit h-fit font-semibold hover:bg-purple-800 duration-200 transition-all ${!isActive ? "cursor-pointer" : "cursor-not-allowed"}`}
              onClick={handleNextQuestion}
              disabled={currentIndex === 9 || isActive === true}
            >
              Next <ArrowRight className="w-5 h-5 ml-1 " />
            </button>
          ) : choosedAnswer !== null && !isSubmitted ? (
            <button
              className={`flex bg-purple-700 px-5 py-3 text-sm rounded-xl mt-5 w-fit h-fit font-semibold hover:bg-purple-800 duration-200 transition-all`}
              onClick={handleSubmitAnswer}
              // disabled={choosedAnswer === null}
            >
              Submit
              <ArrowRight className="w-5 h-5 ml-1 " />
            </button>
          ) : null}
        </div>
      </div>
    </MainLayout>
  );
}
