import { createConnection } from "typeorm";
import { Car } from "./entity/Car";
import { User } from "./entity/User";

createConnection().then(async (connection) => {
  console.log("Connected to database");

  const userRepository = connection.getRepository(User);
  const carRepository = connection.getRepository(Car);

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

  const user = new User();
  user.name = "John";
  user.age = 30;
  user.cars = [car1, car2];
  user.lastname = "Doe";

  await userRepository.save(user);
});
