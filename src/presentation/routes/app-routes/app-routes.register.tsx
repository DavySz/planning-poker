import { Home, Room } from "@presentation/pages";
import { TAppRoutes } from "./app-routes.types";
import { CreateRoom } from "@presentation/pages/create-room/create-room.container";

export const appRoutes: TAppRoutes[] = [
  {
    element: <Home />,
    path: "/home",
  },
  {
    element: <Room />,
    path: "/room/:id",
  },
  {
    element: <CreateRoom />,
    path: "/create-room",
  },
];
