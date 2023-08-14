import {
  makeUpdateRoom,
  makeUpdateUser,
  makeGetAllUsers,
  makeUpdateAllUsers,
  makeGetRoomEvents,
} from "@main/factories/usecases";
import { Room } from "@presentation/pages";

export const makeRoomPage: React.FC = () => {
  return (
    <Room
      updateAllUsers={makeUpdateAllUsers()}
      getRoomEvents={makeGetRoomEvents()}
      getAllUsers={makeGetAllUsers()}
      updateUser={makeUpdateUser()}
      updateRoom={makeUpdateRoom()}
    />
  );
};
