import { makeUpdateUser } from "@main/factories/usecases";
import { Room } from "@presentation/pages";

export const makeRoomPage: React.FC = () => {
  return <Room updateUser={makeUpdateUser()} />;
};
