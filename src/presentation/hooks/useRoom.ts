import { useCallback, useEffect, useState } from "react";
import { ref, onValue, off } from "firebase/database";
import { makeDatabase } from "main/factories/database-factory/database-factory";
import { TForm } from "@presentation/pages/create-room/create-room.types";

export const useRoom = (roomId: string) => {
  const [users, setUsers] = useState<TForm[]>([]);

  const makePath = useCallback(() => `rooms/${roomId}`, [roomId]);

  useEffect(() => {
    const database = makeDatabase();
    const roomRef = ref(database, makePath());

    onValue(roomRef, (room) => {
      const databaseRoom = room.val();
      const firebaseUsers = databaseRoom.users ?? [];
      console.log(firebaseUsers);
    });

    return () => {
      off(roomRef);
    };
  }, [roomId, makePath]);

  return users;
};
