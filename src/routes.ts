import { GetAllExperience } from "./controllers/GetAllExperience";
// import { postGetByIdAction } from "./controllers/PostGetByIdAction";
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
  // {
  //   path: "/posts/:id",
  //   method: "get",
  //   action: postGetByIdAction,
  // },
  // {
  //   path: "/posts",
  //   method: "post",
  //   action: postSaveAction,
  // },
];
