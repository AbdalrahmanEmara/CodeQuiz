import { create } from "zustand";

export const useQuizStore = create((set, get) => ({
  numQuizzes: 0,
  totalPoints: 0,
  typesOfQuizzes: new Set(),

  currentIndex: 0,
  numCorrectedAnswers: 0,
  questionsForReview: [],
  currentQuizQuestions: [],
  difficulty: "",
  category: "",
  Finished: false,

  selectQuiz: (difficulty, category) =>
    set((state) => ({
      ...state,
      difficulty: difficulty,
      category: category,
    })),

  chooseQuiz: (questions) =>
    set((state) => ({
      ...state,
      currentQuizQuestions: questions,
      currentIndex: 0,
      numCorrectedAnswers: 0,
      Finished: false,
    })),

  // setCurrentQuiz: (quiz) => set({ currentQuizQuestions: quiz }),

  nextQuestion: () => {
    set((state) => ({
      ...state,
      currentIndex: state.currentIndex + 1,
    }));
  },

  submitAnswer: (ans, index) => {
    if (ans) {
      set((state) => ({
        ...state,
        numCorrectedAnswers: state.numCorrectedAnswers + 1,
      }));
    } else {
      const question = get().currentQuizQuestions[index];
      set((state) => ({
        ...state,
        questionsForReview: [
          ...state.questionsForReview,
          {
            question: question.question,
            correctAnswer: question.options[question.correctAnswer],
            explanation: question.explanation,
          },
        ],
      }));
    }
  },

  finishQuiz: (pointPerQuestion) => {
    set((state) => ({
      ...state,
      Finished: true,
      numQuizzes: state.numQuizzes + 1,
      totalPoints: state.totalPoints + pointPerQuestion * state.numCorrectedAnswers,
      typesOfQuizzes: new Set([
        ...state.typesOfQuizzes,
        { category: state.category, difficulty: state.difficulty },
      ]),
    }));
  },
}));
