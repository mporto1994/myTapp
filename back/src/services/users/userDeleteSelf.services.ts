import "reflect-metadata";

import { AppDataSource } from "../../data-source.js";
import { User } from "../../entities/user.entity.js";


const userDeleteSelfService = async (email: string) => {
    const userRepository = AppDataSource.getRepository(User);

    const users = await userRepository.find();

    const userToDeletion = users.find(user => user.email === email);

    userRepository.delete(userToDeletion!.id);

    return userToDeletion;
};

export default userDeleteSelfService;