import { create } from "zustand";

import { persist } from "zustand/middleware";

export const useAuth = create(
  persist(
    (set) => ({
      user: null,
      isAuthenticated: false,
      loading: false,
      error: null,

      login: async (name, password) => {
        try {
          await new Promise((resolve) => setTimeout(resolve, 500));

          const users = JSON.parse(localStorage.getItem("users") || "[]");
          const user = users.find((u) => u.name === name && u.password === password);

          if (!user) throw new Error("Invalid username or password");

          const { password: _, ...userWithoutPassword } = user;
          set({
            user: userWithoutPassword,
            isAuthenticated: true,
            loading: false,
            error: null,
          });

          return { success: true };
        } catch (error) {
          set({
            error: error.message,
            loading: false,
          });
          throw error;
        }
      },

      register: async (userData) => {
        try {
          set({ loading: true, error: null });

          await new Promise((resolve) => setTimeout(resolve, 500));

          const users = JSON.parse(localStorage.getItem("users") || "[]");

          // Check if email exists
          if (users.find((u) => u.email === userData.email))
            throw new Error("Email already exists");

          // Create new user
          const newUser = {
            id: new Date().getSeconds(),
            name: userData.name,
            email: userData.email,
            password: userData.password,
            createdAt: new Date().toISOString(),
          };
          if (users.find((u) => u.email === userData.email)) {
            throw new Error("Email already exists");
          }

          // Save new user to local Storage
          users.push(newUser);
          localStorage.setItem("users", JSON.stringify(users));

          // Auto login after register
          const { password: _, ...userWithoutPassword } = newUser;
          set({ user: userWithoutPassword, isAuthenticated: true, loading: false, error: null });

          return { success: true };
        } catch (error) {
          set({
            error: error.message,
            loading: false,
          });
          throw error;
        }
      },

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
