import { Home, Room } from "@presentation/pages";
import { TAppRoutes } from "./app-routes.types";

export const appRoutes: TAppRoutes[] = [
  {
    element: <Home />,
    path: "/home",
  },
  {
    element: <Room />,
    path: "/room/:id",
  },
];
