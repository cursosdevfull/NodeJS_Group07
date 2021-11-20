import { createConnection } from "typeorm";
import { Car } from "./entity/Car";
import { User } from "./entity/User";

createConnection().then(async (connection) => {
  console.log("Connected to database");

  const userRepository = connection.getRepository(User);
  const carRepository = connection.getRepository(Car);

  const listCars = await carRepository.find({ relations: ["users"] });
  const listUsers = await userRepository.find({ relations: ["cars"] });

  console.log("listCars", JSON.stringify(listCars, null, "\t"));
  console.log("listUsers", JSON.stringify(listUsers, null, "\t"));
});
