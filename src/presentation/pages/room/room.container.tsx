import { PageTemplate } from "@presentation/components";
import { RoomUI } from "./room.ui";

export const Room: React.FC = () => {
  return (
    <PageTemplate onClick={() => {}} label="Leave room">
      <RoomUI />
    </PageTemplate>
  );
};
