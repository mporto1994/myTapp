
import { Request, Response } from "express";
import userUpdatePasswordService from "../../services/users/userUpdate.services.js";

declare module 'express-serve-static-core' {
    interface Request {
        userEmail?: string;
    }
}

const userUpdateController = async (req: Request, res: Response) => {
    try {
        if (!req.userEmail || !req.body) return;

        const email = req.userEmail;
        const { name, password } = req.body;

        if (!password) {
            throw new Error("Password must be informed!");
        }

        const user = await userUpdatePasswordService(name, email, password);

        return res.status(200).json({
            message: "The user is sucessfully updated!",
            user: user
        });

    } catch (err) {
        if (err instanceof Error) {
            return res.status(401).send({
                error: err.name,
                message: err.message,
            });
        }
    }
};
export default userUpdateController;