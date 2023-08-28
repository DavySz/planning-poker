import { IBar } from "./bar.types";

export const Bar: React.FC<IBar> = ({ total, value, label }) => {
  const barPercentage = ((value * 100) / total).toFixed(2);

  return (
    <div className="flex flex-col items-center justify-center gap-2">
      <span>{value}</span>
      <div className="flex items-end w-4 h-[100%] bg-slate-300 rounded-lg">
        <div
          className="w-4 bg-blue-600 rounded-lg"
          style={{ height: `${barPercentage}%` }}
        />
      </div>
      <span>{label}</span>
    </div>
  );
};
