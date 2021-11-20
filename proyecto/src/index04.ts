import { createConnection } from "typeorm";
import { Car } from "./entity/Car";
import { User } from "./entity/User";

createConnection().then(async (connection) => {
  console.log("Connected to database");

  const userRepository = connection.getRepository(User);
  const user = await userRepository.findOne({ id: 5 });

  const carRepository = connection.getRepository(Car);
  const car = new Car();
  car.manufacturer = "Hyundai";
  car.description = "Old car";
  car.year = 2000;
  car.color = "Black";
  car.isSold = false;
  car.user = user;

  await carRepository.save(car);

  /*  const userRepository = connection.getRepository(User);
  const user = new User();
  user.name = "John";
  user.lastname = "Doe2";
  user.age = 25;

  await userRepository.save(user); */
});
