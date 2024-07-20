import { Request, Response } from "express";
import userLoginService from "../../services/users/userLogin.services.js";
import { AppError } from "../../errors/appError.js";

const userLoginController = async (req: Request, res: Response) => {
    const { email, password } = req.body;
    try {
        const token = await userLoginService({ email, password });

        return res.status(200).json({ token });

    } catch (err) {
        if (err instanceof AppError) {
            console.log(err);
            return res.status(err.statusCode).json({ Erro: err.message });;
        }
        if (err instanceof Error) {
            return res.status(401).send({
                error: err.name,
                message: err.message,
            });
        }
    }

};
export default userLoginController;