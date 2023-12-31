import TeamSvg from "@presentation/assets/svgs/team.svg";
import { Button, Input } from "@presentation/components";
import { IHomeUI } from "./home.types";

export const HomeUI: React.FC<IHomeUI> = ({
  pageState,
  handleJoinInRoom,
  handleUpdateRoomCode,
  handleUpdateUserName,
}) => {
  const buttonState = pageState === "loading" ? "loading" : "default";

  return (
    <div className="flex flex-col absolute top-[50%] left-[50%] [transform:translate(-50%,-50%)]">
      <div className="flex">
        <div className="flex flex-col">
          <h1 className="font-mono font-bold text-black text-4xl mb-2">
            Planning free solution
          </h1>
          <h1 className="font-mono font-bold text-black text-4xl mb-2">
            choose the t-shirts
          </h1>
          <h1 className="font-mono font-bold text-black text-4xl mb-10">
            and enjoy!
          </h1>
          <div className="flex flex-col mb-4">
            <Input
              onChange={(e) => handleUpdateUserName(e.target.value)}
              placeholder="Your name"
            />
          </div>
          <div className="flex flex-col mb-4">
            <Input
              onChange={(e) => handleUpdateRoomCode(e.target.value)}
              placeholder="Room code"
            />
          </div>
          <Button onClick={handleJoinInRoom} variant={buttonState}>
            Entrar
          </Button>
        </div>
        <div className="flex flex-col">
          <img src={TeamSvg} alt="team working" className="w-96 h-96" />
        </div>
        <div />
      </div>
    </div>
  );
};
