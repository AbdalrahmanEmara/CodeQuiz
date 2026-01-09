import { useState } from "react";

import { Link } from "@tanstack/react-router";

import { Code2, Home, Trophy, User } from "lucide-react";

export default function Header() {
  const [isActive, setIsActive] = useState("");

  return (
    <div className="bg-slate-900/95 border-b-slate-800 border-b px-2 py-1">
      <div className="container flex justify-between items-center md:px-2 m-auto min-h-[60px]">
        <span className="flex items-center justify-center gap-1.5">
          <Code2 className="inline w-6 h-6 lg:w-8 lg:h-8 text-purple-400" />
          <span className="text-[23px] lg:text-[26px] text-white">CodeQuiz</span>
        </span>
        <ul className="flex gap-1 min-h-8 ">
          <li>
            <Link
              to="/quizzes"
              activeProps={{
                style: {
                  backgroundColor: "oklch(55.8% 0.288 302.321)",
                },
              }}
              className={`flex flex-col gap-x-1 md:flex-row items-center ${isActive !== "quizzes" ? "hover:bg-slate-800" : ""} p-1.5 sm:p-2 md:p-2.5 text-xs rounded-xl transition-all duration-500 ${isActive === "quizzes" ? "bg-purple-600" : ""}`}
            >
              <Home className="w-5" />
              <span>Quizzes</span>
            </Link>
          </li>
          <li>
            <Link
              to="/leaderboard"
              activeProps={{
                style: {
                  backgroundColor: "oklch(55.8% 0.288 302.321)",
                },
              }}
              className="flex flex-col gap-x-1 md:flex-row items-center hover:bg-slate-800 p-1.5 sm:p-2 md:p-2.5 text-xs rounded-xl transition-all duration-500"
              onClick={() => setIsActive(() => "leaderboard")}
            >
              <Trophy className="w-5" />
              <span>Leaderboard</span>
            </Link>
          </li>
          <li>
            <Link
              to="/profile"
              activeProps={{
                style: {
                  backgroundColor: "oklch(55.8% 0.288 302.321)",
                },
              }}
              className="flex flex-col gap-x-1 md:flex-row items-center hover:bg-slate-800 p-1.5 sm:p-2 md:p-2.5 text-xs rounded-xl transition-all duration-500"
            >
              <User className="w-5" />
              <span>Profile</span>
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}
