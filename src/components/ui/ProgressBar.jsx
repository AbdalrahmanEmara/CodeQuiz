export default function ProgressBar({ value = 0, max = 100 }) {
  const percentageValue = Number((value / max) * 100);
  console.log(percentageValue);

  return (
    <div className="w-full bg-slate-800 h-2.5 rounded-2xl mt-2">
      <span
        className={`block h-full bg-linear-to-r from-purple-500 to-pink-500 rounded-2xl`}
        style={{ width: `${percentageValue}%` }}
      ></span>
    </div>
  );
}
