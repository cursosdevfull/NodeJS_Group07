import { createConnection } from "typeorm";
import { Car } from "./entity/Car";
import { User } from "./entity/User";

createConnection().then(async (connection) => {
  console.log("Connected to database");

  const userRepository = connection.getRepository(User);
  const users = await userRepository.find({
    order: { age: "DESC" },
    relations: ["cars"],
  });
  console.log("user", users);
});
