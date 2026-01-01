import React from "react";

import { Code2 } from "lucide-react";

function List({ icon, header, text }) {
  return (
    <li className="flex gap-2">
      <span className="flex text-2xl bg-purple-500/20 p-1.5 rounded-lg">{icon}</span>
      <div>
        <p className="text-md">{header}</p>
        <p className="text-xs text-slate-400">{text}</p>
      </div>
    </li>
  );
}

export default function AboutProject() {
  return (
    <div className="text-white hidden xl:flex flex-col gap-6 max-w-[500px]">
      <span className="flex items-center gap-3">
        <Code2 className="inline w-10 h-10 text-purple-400" />
        <span className="text-5xl">CodeQuiz</span>
      </span>
      <span className="text-[40px]">Test Your Programming Skills</span>
      <p className="text-xl text-slate-300">
        Join thousands of developers competing on programming challenges across multiple languages
        and topics.
      </p>
      <ul className="flex flex-col gap-3">
        <List icon={"🎯"} header={"100+ Questions"} text={"Across 7 programming categories"} />
        <List
          icon={"🏆"}
          header={"Global Leaderboard"}
          text={"Compete with developers worldwide"}
        />
        <List icon={"📊"} header={"Track Progress"} text={"Monitor your improvement over time"} />
      </ul>
    </div>
  );
}
