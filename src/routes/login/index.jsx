import { createFileRoute } from "@tanstack/react-router";
import AboutProject from "../../components/ui/AboutProject";
import Logo from "../../components/ui/Logo";
import { ArrowRight, Lock, Mail, User } from "lucide-react";

export const Route = createFileRoute("/login/")({
  component: LoginPage,
});

function LoginPage() {
  return (
    <div className="p-6 flex items-center gap-4 h-dvh min-h-fit max-w-[1200px] mx-auto">
      <AboutProject className="grow" />
      <div className="grow px-4 py-6 flex flex-col gap-5">
        <span className="xl:hidden">
          <Logo className="max-w-fit" />
        </span>
        <div className="bg-slate-800/50 mx-auto w-full max-w-[450px] rounded-lg text-white py-6 px-5">
          <p className="text-2xl text-center mb-2 ">Create Account</p>
          <p className="text-slate-400 text-center text-sm mb-4">
            Sign up to start your journey
          </p>
          <form action="">
            <label htmlFor="username" className="text-sm text-slate-200">
              Username
            </label>
            <div className="relative my-2">
              <User className="absolute top-3 left-2.5 w-5 h-5 text-slate-400" />
              <input
                type="text"
                id="username"
                placeholder="Enter your username"
                className="w-full px-10 py-2.5 placeholder-slate-500 border rounded-lg border-slate-700 focus:border-purple-700 outline-0 bg-slate-900/50"
              />
            </div>
            <label htmlFor="email" className="text-sm text-slate-200">
              Email
            </label>
            <div className="relative my-2">
              <Mail className="absolute top-3 left-2.5 w-5 h-5 text-slate-400" />
              <input
                type="mail"
                id="email"
                placeholder="Enter your email"
                className="w-full px-10 py-2.5 placeholder-slate-500 border rounded-lg border-slate-700 focus:border-purple-700 outline-0 bg-slate-900/50"
              />
            </div>
            <label htmlFor="password" className="text-sm text-slate-200">
              Password
            </label>
            <div className="relative my-2">
              <Lock className="absolute top-3 left-2.5 w-5 h-5 text-slate-400" />
              <input
                type="password"
                id="password"
                placeholder="Enter your password"
                className="w-full px-10 py-2.5 placeholder-slate-500 border rounded-lg border-slate-700 focus:border-purple-700 outline-0 bg-slate-900/50"
              />
            </div>
            <button className="bg-purple-600 text-md w-full my-3 p-2 rounded-lg">
              Sign up <ArrowRight className="inline" />{" "}
            </button>
            <p className="text-slate-400 text-sm text-center mt-5">
              Already have an account?{" "}
              <button className="text-purple-500">Sign in</button>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
}
