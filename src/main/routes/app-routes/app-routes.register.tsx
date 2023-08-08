import { Home, Room } from "@presentation/pages";
import { TAppRoutes } from "./app-routes.types";
import { makeCreateRoom } from "@main/factories/pages";
export const appRoutes: TAppRoutes[] = [
  {
    element: <Home />,
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
