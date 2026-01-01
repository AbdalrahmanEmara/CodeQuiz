export const createRegisterSlice = (set) => ({
  user: null,
  isAuthenticated: false,
  loading: false,
  error: null,

  register: async (userData) => {
    try {
      set({ loading: true, error: null });

      await new Promise((resolve) => setTimeout(resolve, 500));

      const users = JSON.parse(localStorage.getItem("users") || "[]");

      // Check if email exists
      if (users.find((u) => u.email === userData.email)) throw new Error("Email already exists");

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
});
