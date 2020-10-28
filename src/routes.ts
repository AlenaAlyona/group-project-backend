import { GetAllExperience } from "./controllers/GetAllExperience"
import { createGraduate } from "./controllers/CreateGraduate"
import { Login } from "./controllers/Login"
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
  {
    path: "/login",
    method: "post",
    action: Login,
  },
  // {
  //   path: "/posts",
  //   method: "post",
  //   action: postSaveAction,
  // },
]
