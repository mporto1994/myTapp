import { Request, Response } from "express";
import userListOneService from "../../services/users/userListOne.services.js";

const userListOneController = async (req: Request, res: Response) => {
    try {
        const users = await userListOneService(req.params.id);
        return res.status(200).send(users);

    } catch (error) {
        if (error instanceof Error) {
            return res.status(400).send({
                error: error.name,
                message: error.message
            });
        }
    }
};
export default userListOneController;