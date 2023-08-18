import { IGetRoundVotes } from "@domain/models/get-round-votes";

export namespace GetRoundVotesSpace {
  export type Model = IGetRoundVotes[];
}

export interface GetRoundVotes {
  get: (room: string) => Promise<GetRoundVotesSpace.Model>;
}
