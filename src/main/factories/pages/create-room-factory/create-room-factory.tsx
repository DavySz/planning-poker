import { makeRemoteCreateRoom } from "@main/factories/usecases/create-room-factory";
import { CreateRoom } from "@presentation/pages";

export const makeCreateRoom: React.FC = () => {
  return <CreateRoom createRoom={makeRemoteCreateRoom()} />;
};
