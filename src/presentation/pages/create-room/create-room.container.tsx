import { PageTemplate } from "@presentation/components";
import { CreateRoomUI } from "./create-room.ui";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { TPageState } from "@presentation/common/types/page-state";
import { ICreateRoom, TRoomForm } from "./create-room.types";
import { useUserContext } from "@presentation/hooks";
import { ICreateRoomDTO, ICreateUserDTO } from "@domain/dtos";

export const CreateRoom = ({
  createRoom,
  createRoomModel,
  createUserModel,
}: ICreateRoom) => {
  const { handleSetUser } = useUserContext();
  const navigate = useNavigate();

  const [form, setForm] = useState<TRoomForm>({} as TRoomForm);
  const [pageState, setPageState] = useState<TPageState>("initial");

  const updateVoting = (voting: string) => {
    setForm((previous) => ({ ...previous, voting }));
  };

  const updateName = (name: string) => {
    setForm((previous) => ({ ...previous, name }));
  };

  const updateRoom = (room: string) => {
    setForm((previous) => ({ ...previous, room }));
  };

  const validateRoom = () => {
    if (form.voting && form.voting.trim() === "") return false;
    if (form.name && form.name.trim() === "") return false;
    if (form.room && form.room.trim() === "") return false;

    return true;
  };

  const handleCreateRoom = async () => {
    setPageState("loading");

    const isValid = validateRoom();

    if (isValid) {
      const userParams: ICreateUserDTO = {
        name: form.name,
        owner: true,
      };

      const user = createUserModel(userParams);

      handleSetUser(user);

      const roomParams: ICreateRoomDTO = {
        voting: form.voting,
        room: form.room,
        user,
      };

      const newRoom = createRoomModel(roomParams);

      try {
        const key = await createRoom.create({ room: newRoom });

        setPageState("ready");

        navigate(`/room/${key}`);
      } catch {
        setPageState("error");
      }
    }
  };

  const handleNavigateToHome = () => {
    navigate("/");
  };

  return (
    <PageTemplate label="Join in room" onClick={handleNavigateToHome}>
      <CreateRoomUI
        handleCreateRoom={handleCreateRoom}
        updateVoting={updateVoting}
        updateRoom={updateRoom}
        updateName={updateName}
        pageState={pageState}
      />
    </PageTemplate>
  );
};
