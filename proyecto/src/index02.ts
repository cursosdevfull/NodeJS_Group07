import { createConnection } from "typeorm";
import { Car } from "./entity/Car";
import { User } from "./entity/User";

createConnection().then(async (connection) => {
  console.log("Connected to database");

  const userRepository = connection.getRepository(User);
  const carRepository = connection.getRepository(Car);

  const user = new User();
  user.name = "John";
  user.lastname = "Doe";
  user.age = 25;

  await userRepository.save(user);

  const car = new Car();
  car.manufacturer = "Ford";
  car.description = "New car";
  car.color = "Red";
  car.year = 2020;
  car.isSold = false;
  car.user = user;

  await carRepository.save(car);
});
