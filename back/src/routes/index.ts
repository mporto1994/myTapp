import { Express } from "express";
import { userRoutes } from "./user.routes.js";


export const appRoutes = (app: Express) => {
    app.use("/users", userRoutes());
};
