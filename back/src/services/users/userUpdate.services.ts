import "reflect-metadata";

import { AppDataSource } from "../../data-source.js";
import { User } from "../../entities/user.entity.js";
import bcrypt from "bcrypt";

const userUpdateService = async (name: string, email: string, password: any) => {
    const userRepository = AppDataSource.getRepository(User);
    const users = await userRepository.find();

    const account = users.find(user => user.email === email);

    if (bcrypt.compareSync(password, account!.password)) {
        throw new Error("Please, inform a different password.");
    }
    const newPassword = bcrypt.hashSync(password, 10);
    await userRepository.update(account!.id, { name: name, password: newPassword });

    return true;
};

export default userUpdateService;