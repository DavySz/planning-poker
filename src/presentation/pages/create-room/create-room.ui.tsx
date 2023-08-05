import { Button, Input, InputSelector } from "@presentation/components";
import { options } from "./create-room.options";
import { ICreateRoomUI } from "./create-room.types";

export const CreateRoomUI: React.FC<ICreateRoomUI> = ({
  handleCreateRoom,
  updateVoting,
  updateRoom,
  updateName,
  pageState,
}) => {
  const buttonState = pageState === "loading" ? "loading" : "default";
  const isDisabled = pageState === "loading" || pageState === "error";

  return (
    <div className="absolute top-[50%] left-[50%] [transform:translate(-50%,-50%)]">
      <div className="mb-4">
        <Input
          onChange={(e) => updateRoom(e.target.value)}
          placeholder="Room name"
        />
      </div>
      <div className="mb-4">
        <Input
          onChange={(e) => updateName(e.target.value)}
          placeholder="Your name"
        />
      </div>
      <div className="mb-8">
        <InputSelector
          onChange={(e) => updateVoting(e!.label)}
          placeholder="Voting system"
          options={options}
        />
      </div>
      <Button
        full
        disabled={isDisabled}
        variant={buttonState}
        onClick={handleCreateRoom}
      >
        Create
      </Button>
    </div>
  );
};
