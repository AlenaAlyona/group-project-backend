import { GetAllExperience } from "./controllers/GetAllExperience";
import { createGraduate } from "./controllers/CreateGraduate";
// import { postSaveAction } from "./controllers/PostSaveAction";

/**
 * All application routes.
 */
export const AppRoutes = [
  {
    path: "/",
    method: "get",
    action: GetAllExperience,
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
