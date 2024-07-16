import "reflect-metadata";

import { User } from "../../entities/user.entity.js";
import { AppDataSource } from "../../data-source.js";

const userListService = async () => {
    const userRepository = AppDataSource.getRepository(User);

    const users = userRepository.find();
    return users;
};
export default userListService;