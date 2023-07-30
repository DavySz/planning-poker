import TeamSvg from "@presentation/assets/svgs/team.svg";

export const HomeUI: React.FC = () => {
  return (
    <div className="flex flex-col align-middle justify-center">
      <div className="flex align-middle justify-evenly">
        <div className="flex flex-col self-center">
          <h1 className="font-mono font-bold text-black text-4xl mb-2">
            Planning free solution
          </h1>
          <h1 className="font-mono font-bold text-black text-4xl mb-2">
            choose the t-shirts
          </h1>
          <h1 className="font-mono font-bold text-black text-4xl mb-2">
            and enjoy!
          </h1>
        </div>
        <div className="bg-white">
          <img src={TeamSvg} alt="team working" className="w-96 h-96" />
        </div>
        <div />
      </div>
    </div>
  );
};
