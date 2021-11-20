import { createConnection } from "typeorm";
import { Car } from "./entity/Car";
import { User } from "./entity/User";

createConnection().then(async (connection) => {
  console.log("Connected to database");

  const userRepository = connection.getRepository(User);
  const user = await userRepository.findOne({
    where: { age: 25 },
    relations: ["cars"],
  });
  console.log("user", user);
});
