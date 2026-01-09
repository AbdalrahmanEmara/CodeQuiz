import { useEffect, useState } from "react";

import { Clock } from "lucide-react";

export default function QuizTimer({ timerPerQuestion, isActive, setIsActive }) {
  const [seconds, setSeconds] = useState(timerPerQuestion);

  function clear() {
    setSeconds(timerPerQuestion);
    setIsActive(false);
  }

  useEffect(() => {
    let interval = null;
    // console.log(seconds);

    if (isActive) {
      interval = setInterval(() => {
        setSeconds((s) => s - 1);
      }, 1000);
    } else if (!isActive) {
      interval = setInterval(() => {
        setSeconds(timerPerQuestion);
      }, 1000);
    }

    return () => clearInterval(interval);
  }, [isActive, seconds, timerPerQuestion]);

  if (seconds === 0) {
    clear();
  }

  return (
    <span className="flex gap-2 items-center text-slate-400">
      <Clock />
      {seconds} s
    </span>
  );
}
