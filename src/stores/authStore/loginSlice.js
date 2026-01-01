export const createLoginSlice = (set) => ({
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
});
