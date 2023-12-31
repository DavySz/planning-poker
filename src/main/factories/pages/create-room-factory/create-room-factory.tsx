import { makeRoom, makeUser } from "@main/factories/entities";
import { makeRemoteCreateRoom } from "@main/factories/usecases";
import { CreateRoom } from "@presentation/pages";

export const makeCreateRoomPage: React.FC = () => {
  return (
    <CreateRoom
      createRoom={makeRemoteCreateRoom()}
      createRoomModel={makeRoom}
      createUserModel={makeUser}
    />
  );
};
