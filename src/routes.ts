import { GetAllGraduates } from "./controllers/GetAllGraduates";
import { createGraduate } from "./controllers/CreateGraduate";
// import { postSaveAction } from "./controllers/PostSaveAction";

/**
 * All application routes.
 */
export const AppRoutes = [
  {
    path: "/",
    method: "get",
    action: GetAllGraduates,
  },
  {
    path: "/signup",
    method: "post",
    action: createGraduate,
  },
  // {
  //   path: "/posts",
  //   method: "post",
  //   action: postSaveAction,
  // },
];
