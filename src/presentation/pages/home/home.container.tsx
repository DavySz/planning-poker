import { PageTemplate } from "@presentation/components";
import { useNavigate } from "react-router-dom";
import { HomeUI } from "./home.ui";
import { useState } from "react";
import { TPageState } from "@presentation/common/types/page-state";
import { useUserContext } from "@presentation/hooks";
import { IHome } from "./home.types";
import { ICreateUserDTO } from "@domain/dtos";
import { IUserModel } from "@domain/models";

export const Home: React.FC<IHome> = ({
  getRoom,
  createUser,
  createUserModel,
}) => {
  const { handleSetUser } = useUserContext();
  const navigate = useNavigate();

  const [pageState, setPageState] = useState<TPageState>("initial");
  const [roomCode, setRoomCode] = useState("");
  const [userName, setUserName] = useState("");

  const handleUpdateRoomCode = (code: string) => {
    setRoomCode(code);
  };

  const handleUpdateUserName = (user: string) => {
    setUserName(user);
  };

  const handleStartNewGame = () => {
    navigate("/create-room");
  };

  const validateFields = () => {
    if (roomCode === "" || userName === "") return false;
    return true;
  };

  const handleGetRoom = async () => {
    const roomRef = await getRoom.get({ room: roomCode });
    return roomRef;
  };

  const handleCreateUser = async (user: IUserModel) => {
    await createUser.create({ room: roomCode, user });
  };

  const handleJoinInRoom = async () => {
    const isValid = validateFields();
    if (!isValid) return;

    setPageState("loading");

    try {
      const roomRef = await handleGetRoom();

      if (!roomRef.exists()) {
        setPageState("ready");
        return;
      }

      const userParams: ICreateUserDTO = {
        name: userName,
        owner: false,
      };

      const user = createUserModel(userParams);

      await handleCreateUser(user);
      handleSetUser(user);

      navigate(`/room/${roomCode}`);
    } catch {
      setPageState("error");
    }
  };

  return (
    <PageTemplate onClick={handleStartNewGame} label="Start new game!">
      <HomeUI
        pageState={pageState}
        handleJoinInRoom={handleJoinInRoom}
        handleUpdateUserName={handleUpdateUserName}
        handleUpdateRoomCode={handleUpdateRoomCode}
      />
    </PageTemplate>
  );
};
