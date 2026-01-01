import { create } from "zustand";

export const useQuizStore = create((set, get) => ({
  id: "",
  title: "",
  difficulty: "",
  category: "",
  numQuestions: 0,
  currentIndex: 0,
  tags: [],
  questions: [],
  correctedAnswers: 0,
  questionsResult: [],
  Finished: false,

  chooseQuiz: (difficulty, category) =>
    set((state) => ({
      ...state,
      difficulty,
      category,
    })),

  newQuiz: (difficulty, category, numQuestions, data) =>
    set((state) => ({
      ...state,
      difficulty: difficulty,
      category: category,
      numQuestions: numQuestions,
      currentIndex: state.currentIndex,
      tags: [category],
      questions: data,
    })),

  chooseAnswer: (questionNumber, choiceNumber) => {
    if (get.questions[questionNumber].correct_answers[choiceNumber - 1]) {
      set((state) => ({
        ...state,
        questionsResult: [...state.questionsResult, true],
        correct_answers: state.correct_answers + 1,
      }));
    } else {
      set((state) => ({ ...state, questionsResult: [...state.questionsResult, false] }));
    }
  },

  nextQuestion: () => {
    if (get.currentIndex === get.numQuestions) {
      set((state) => ({
        ...state,
        Finished: true,
      }));
    }
    set((state) => ({
      ...state,
      currentIndex: state.currentIndex + 1,
    }));
  },
}));
