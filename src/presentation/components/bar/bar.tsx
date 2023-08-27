import { IBar } from "./bar.types";

export const Bar: React.FC<IBar> = ({ total, value }) => {
  const barPercentage = (value * 100) / total;

  return (
    <div className="flex h-6 w-[100%] bg-slate-300 rounded-lg">
      <div
        className="flex h-6 bg-blue-600 rounded-lg"
        style={{ width: barPercentage }}
      />
    </div>
  );
};
