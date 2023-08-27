import { IDatabase } from "@data/protocols/database";
import { IRoomModel, IUserModel } from "@domain/models";
import {
  StartNewGame,
  StartNewGameSpace,
} from "@domain/usecases/start-new-game";

export class RemoteStartNewGame implements StartNewGame {
  constructor(private readonly database: IDatabase) {}

  async start({ room, roomId }: StartNewGameSpace.Params): Promise<void> {
    try {
      const batchUpdates: Promise<void>[] = [];

      const roomUpdated: IRoomModel = {
        ...room,
        cardsVisible: false,
      };

      await this.database.update(roomUpdated, `rooms/${roomId}`);

      const snapshot = await this.database.get(`rooms/${roomId}/users`);
      const users = snapshot.val();

      for (const [key, item] of Object.entries(users)) {
        const user = item as IUserModel;

        const pathUpdated = `rooms/${roomId}/users/${key}`;

        const userUpdated: IUserModel = {
          ...user,
          option: {
            isSelected: false,
          },
        };

        const updateMethod = this.database.update(userUpdated, pathUpdated);

        batchUpdates.push(updateMethod);
      }

      await Promise.all(batchUpdates);
    } catch {
      throw new Error("Failed to create new game");
    }
  }
}
