import { Button, Input, InputSelector } from "@presentation/components";
import { options } from "./create-room.options";
import { ICreateRoomUI } from "./create-room.types";

export const CreateRoomUI: React.FC<ICreateRoomUI> = ({
  handleCreateRoom,
  updateVoting,
  updateRoom,
}) => {
  return (
    <div className="absolute top-[50%] left-[50%] [transform:translate(-50%,-50%)]">
      <div className="mb-4">
        <Input
          onChange={(e) => updateRoom(e.target.value)}
          placeholder="Room name"
        />
      </div>
      <div className="mb-8">
        <InputSelector
          onChange={(e) => updateVoting(e!.value)}
          placeholder="Voting system"
          options={options}
        />
      </div>
      <Button full variant="default" onClick={handleCreateRoom}>
        Create
      </Button>
    </div>
  );
};
