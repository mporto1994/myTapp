import "reflect-metadata";

import express from "express";
import { AppError } from "./errors/appError.js";
import { Request, Response, NextFunction } from "express";
import { appRoutes } from "./routes/index.js";
import cors from "cors";


const app = express();

app.use(cors());

app.use(express.json());

appRoutes(app);

app.use((err: Error, request: Request, response: Response, _: NextFunction) => {
    if (err instanceof AppError) {
        return response.status(err.statusCode).json({
            status: "error",
            message: err.message
        });
    }
    console.log(err);

    return response.status(500).json({
        status: "error",
        message: "Internal server error."
    });
});

app.listen(3131);
