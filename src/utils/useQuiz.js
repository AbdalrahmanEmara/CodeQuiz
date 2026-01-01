import { useQuery } from "@tanstack/react-query";

import axios from "axios";

const TOKEN = "rCQgGwaCV51a96XBCIDMbAuuhURrgUacDgRdK2t1";

export function useQuiz(category, difficulty) {
  return useQuery({
    queryKey: ["quiz", category, difficulty],
    queryFn: async () => {
      const { data } = await axios.get("https://quizapi.io/api/v1/questions", {
        params: {
          limit: 10,
          category,
          difficulty,
        },
        headers: {
          "X-Api-Key": TOKEN,
        },
      });

      return {
        id: `quiz_${category}_${difficulty}_${Date.now()}`,
        category: category,
        difficulty: difficulty,
        title: `${category} Quiz - ${difficulty}`,
        questions: data.map((q) => ({
          id: q.id,
          question: q.question,
          options: Object.values(q.answers).filter((opt) => opt !== null),
          correctAnswer: Object.values(q.correct_answers).reduce((acc, cur, i) => {
            return cur === "true" ? i + 1 : acc;
          }, 0),
        })),
      };
    },
  });
}
