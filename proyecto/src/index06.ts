import { createConnection } from "typeorm";
import { Car } from "./entity/Car";
import { User } from "./entity/User";

createConnection().then(async (connection) => {
  console.log("Connected to database");

  const userRepository = connection.getRepository(User);

  const car1 = new Car();
  car1.manufacturer = "Tesla";
  car1.description = "new";
  car1.color = "Red";
  car1.year = 2018;
  car1.isSold = false;

  const car2 = new Car();
  car2.manufacturer = "Hyundai";
  car2.description = "old";
  car2.color = "Black";
  car2.year = 2000;
  car2.isSold = true;

  const user1 = new User();
  user1.name = "John";
  user1.lastname = "Doe";
  user1.age = 30;
  user1.cars = [car1, car2];

  const user2 = new User();
  user2.name = "Jane";
  user2.lastname = "Doe";
  user2.age = 25;
  user2.cars = [car2];

  const usersToSave = [];
  usersToSave.push(user1);
  usersToSave.push(user2);

  await userRepository.save(usersToSave);
});
