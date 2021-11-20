import { createConnection } from "typeorm";
import { Car } from "./entity/Car";
import { User } from "./entity/User";

createConnection().then(async (connection) => {
  console.log("Connected to database");

  const userRepository = connection.getRepository(User);
  const users = await userRepository.findAndCount({
    relations: ["cars"],
    order: { age: "DESC" },
    skip: 1,
    take: 1,
  });
  console.log("users", users);
});
