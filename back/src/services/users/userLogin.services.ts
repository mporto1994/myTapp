import "reflect-metadata";

import { AppDataSource } from "../../data-source.js";
import { User } from "../../entities/user.entity.js";
import { IUserLogin } from "../../interfaces/user";
import bcrypt from "bcrypt";
import Jwt from "jsonwebtoken";
import { AppError } from "../../errors/appError.js";

const userLoginService = async ({ email, password }: IUserLogin) => {

    const userRepository = AppDataSource.getRepository(User);

    const users = await userRepository.find();

    const account = users.find(user => user.email === email);

    if (!account) {
        throw new AppError(404, "User not found");
    }
    if (!bcrypt.compareSync(password, account.password)) {
        return "Invalid login or password";
    }
    const token = Jwt.sign(
        { email: email },
        String(process.env.JWT_SECRET),
        { expiresIn: '1d' });

    return token;
};
export default userLoginService;