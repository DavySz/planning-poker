import { PageTemplate } from "@presentation/components";
import { CreateRoomUI } from "./create-room.ui";
import { useState } from "react";
import { TForm } from "./create-room.types";
import { useNavigate } from "react-router-dom";

export const CreateRoom = () => {
  const navigate = useNavigate();
  const [form, setForm] = useState<TForm>({} as TForm);

  const updateVoting = (voting: string) => {
    setForm((previous) => ({ ...previous, voting }));
  };

  const updateRoom = (room: string) => {
    setForm((previous) => ({ ...previous, room }));
  };

  const handleCreateRoom = () => {
    navigate("/room/123");
  };

  console.log(form);

  return (
    <PageTemplate>
      <CreateRoomUI
        handleCreateRoom={handleCreateRoom}
        updateVoting={updateVoting}
        updateRoom={updateRoom}
      />
    </PageTemplate>
  );
};
