import { create } from "zustand";

import { persist } from "zustand/middleware";

import { createLoginSlice } from "./loginSlice";
import { createRegisterSlice } from "./registerSlice";

export const useAuth = create(
  persist(
    (set) => ({
      user: null,
      isAuthenticated: false,
      loading: false,
      error: null,

      ...createLoginSlice(set),

      ...createRegisterSlice(set),

      logout: () => {
        set({ user: null, isAuthenticated: false, error: null });
      },

      clearError: () => set({ error: null }),
    }),
    {
      name: "quiz-auth",
      partialize: (state) => ({ user: state.user, isAuthenticated: state.isAuthenticated }),
    }
  )
);
