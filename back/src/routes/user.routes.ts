import { Router } from "express";
import userCreateController from "../controllers/users/userCreate.controller.js";
import userListController from "../controllers/users/userList.controller.js";
import userLoginController from "../controllers/users/userLogin.controller.js";
import authUserMiddleware from "../middlewares/authUser.middleware.js";
import userDeleteSelfController from "../controllers/users/userDeleteSelf.controller.js";
import userUpdateController from "../controllers/users/userUpdate.controller.js";
import userListOneController from "../controllers/users/userListOne.controller.js";

const routes = Router();

export const userRoutes = () => {
    routes.post("/", userCreateController);
    routes.post("/login", userLoginController);

    routes.get("/me/:id", authUserMiddleware, userListOneController);
    routes.get("/", authUserMiddleware, userListController);

    routes.delete("/me/delete", authUserMiddleware, userDeleteSelfController);
    routes.patch("/me/update", authUserMiddleware, userUpdateController);

    return routes;
}


