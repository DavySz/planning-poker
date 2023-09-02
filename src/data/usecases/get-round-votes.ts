import { IDatabase } from "@data/database";
import { IGetRoundVotes, IUserModel } from "@domain/models";
import { GetRoundVotes, GetRoundVotesSpace } from "@domain/usecases";

export class RemoteGetRoundVotes implements GetRoundVotes {
  constructor(private readonly database: IDatabase) {}

  async get(room: string): Promise<GetRoundVotesSpace.Model> {
    const roundVotes: IGetRoundVotes[] = [];

    const users = await this.database.get(`rooms/${room}/users`);

    Object.entries(users.val()).forEach(([_, value]) => {
      const user = value as IUserModel;
      const userOption = user.option.optionSelected as string;

      const optionAlreadyExists = roundVotes.find(
        (item) => item.voting === userOption
      );

      if (optionAlreadyExists) {
        const index = roundVotes.findIndex(
          (item) => item.voting === userOption
        );

        roundVotes[index].count = roundVotes[index].count + 1;
      } else {
        roundVotes.push({
          voting: userOption,
          count: 1,
        });
      }
    });

    return roundVotes;
  }
}
