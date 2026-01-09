import { useState } from "react";

import { createFileRoute, useNavigate } from "@tanstack/react-router";

import { ArrowRight, Lock, Mail, User } from "lucide-react";

import AboutProject from "@components/ui/AboutProject";
import Logo from "@components/ui/Logo";
import toast from "react-hot-toast";

import { useAuth } from "@/stores/authStore/useAuthStore";

import { requireGuest } from "@/utils/authGuard";

export const Route = createFileRoute("/login/")({
  component: LoginPage,
  beforeLoad: ({ location }) => requireGuest(location),
});

function LoginPage() {
  const navigate = useNavigate();
  const [signin, setSignin] = useState(true);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { login, register, clearError } = useAuth();
  const { redirect } = Route.useSearch();

  async function handleLogin(e) {
    e.preventDefault();
    if (!name || !password) return;

    try {
      await login(name, password);
      clearError();
      navigate({ to: redirect || "/leaderboard" });
    } catch (err) {
      toast.error(err.message);
      console.error(err);
    }
  }

  async function handleRegister(e) {
    e.preventDefault();

    if (!name || !email || !password) return;

    if (password.length < 6) {
      toast.error("Password must be at least 6 chars");
      return;
    }

    try {
      await register({ name, email, password });
      clearError();
      navigate({ to: redirect || "/quizzes" });
    } catch (err) {
      toast.error(err);
      console.error(err);
    }
  }

  function handleSwitch(e) {
    e.preventDefault();
    setSignin((signin) => !signin);
    clearError();
    // clear form fields
    setName("");
    setEmail("");
    setPassword("");
  }

  return (
    <div className="p-6 flex items-center gap-4 h-dvh min-h-fit max-w-[1200px] mx-auto">
      <AboutProject className="grow" />
      <div className="grow px-4 py-6 flex flex-col gap-5">
        <span className="xl:hidden">
          <Logo className="max-w-fit" />
        </span>
        <div className="bg-slate-800/50 mx-auto w-full max-w-[450px] rounded-lg text-white py-6 px-5">
          <p className="text-2xl text-center mb-2 ">{signin ? "Welcome Back" : "Create Account"}</p>
          <p className="text-slate-400 text-center text-sm mb-4">
            {signin ? "Sign in to continue learning" : "Sign up to start your journey"}
          </p>
          <form action="" onSubmit={signin ? handleLogin : handleRegister}>
            <label htmlFor="username" className="text-sm text-slate-200">
              Username
            </label>
            <div className="relative my-2">
              <User className="absolute top-3 left-2.5 w-5 h-5 text-slate-400" />
              <input
                type="text"
                id="username"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Enter your username"
                className="w-full px-10 py-2.5 placeholder-slate-500 border rounded-lg border-slate-700 focus:border-purple-700 outline-0 bg-slate-900/50"
              />
            </div>
            {!signin ? (
              <>
                <label htmlFor="email" className="text-sm text-slate-200">
                  Email
                </label>
                <div className="relative my-2">
                  <Mail className="absolute top-3 left-2.5 w-5 h-5 text-slate-400" />
                  <input
                    type="mail"
                    id="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email"
                    className="w-full px-10 py-2.5 placeholder-slate-500 border rounded-lg border-slate-700 focus:border-purple-700 outline-0 bg-slate-900/50"
                  />
                </div>
              </>
            ) : null}
            <label htmlFor="password" className="text-sm text-slate-200">
              Password
            </label>
            <div className="relative my-2">
              <Lock className="absolute top-3 left-2.5 w-5 h-5 text-slate-400" />
              <input
                type="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Enter your password"
                className="w-full px-10 py-2.5 placeholder-slate-500 border rounded-lg border-slate-700 focus:border-purple-700 outline-0 bg-slate-900/50"
              />
            </div>
            <button
              type="submit"
              className="bg-purple-600 text-md w-full my-3 p-3 rounded-lg cursor-pointer"
            >
              {signin ? "Sign in " : "Sign up "}
              <ArrowRight className="inline" />
            </button>
            <p className="text-slate-400 text-sm text-center mt-5">
              {signin ? "Don't have and account?" : "Already have an account?"}{" "}
              <button className="text-purple-500" onClick={handleSwitch}>
                {signin ? "Sign up" : "Sign in"}
              </button>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
}
