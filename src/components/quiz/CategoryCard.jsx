import { ChevronsLeftRight } from "lucide-react";

export default function CategoryCard() {
  return (
    <div className="category bg-slate-800/50 rounded-xl p-5 border border-slate-700  hover:scale-105 hover:bg-slate-800/90 transition-all duration-300 relative">
      <span className="absolute right-5 text-xs bg-slate-900/50 py-1 px-2 rounded-2xl text-slate-400">
        20 questions
      </span>
      <ChevronsLeftRight className="bg-purple-900/50 text-purple-400 p-2 w-12 h-12 rounded-xl" />
      <p className="text-white my-2 text-xl">JavaScript</p>
      <p className="text-slate-400 text-[14px]">Test your JS knowledge with ES6+ questions</p>
    </div>
  );
}
