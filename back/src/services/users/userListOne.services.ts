import "reflect-metadata";

import { User } from "../../entities/user.entity.js";
import { AppDataSource } from "../../data-source.js";

const userListOneService = async (id: string) => {
    const userRepository = AppDataSource.getRepository(User);

    const users = userRepository.findOne({
        where: {
            id: id,
        }
    });
    return users;
};
export default userListOneService;