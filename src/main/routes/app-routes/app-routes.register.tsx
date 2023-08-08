import { Room } from "@presentation/pages";
import { TAppRoutes } from "./app-routes.types";
import { makeCreateRoom, makeHome } from "@main/factories/pages";
export const appRoutes: TAppRoutes[] = [
  {
    element: makeHome({}),
    path: "/",
  },
  {
    element: <Room />,
    path: "/room/:id",
  },
  {
    element: makeCreateRoom({}),
    path: "/create-room",
  },
];
