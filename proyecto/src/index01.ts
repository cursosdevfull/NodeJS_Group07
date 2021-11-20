import { createConnection } from "typeorm";
import { User } from "./entity/User";

createConnection().then(async (connection) => {
  console.log("Connected to database");
  const user = new User();
  user.name = "Sergio2";
  user.lastname = "Perez";
  user.age = 30;

  const userRepository = connection.getRepository(User);
  // await userRepository.save(user);

  const listUsers = await userRepository.find();
  console.log("listUsers", listUsers);

  const listOneUser = await userRepository.findOne();
  console.log("listOneUser", listOneUser);

  const user40 = await userRepository.find({ age: 40 });
  console.log("user40", user40);

  const [records, count] = await userRepository.findAndCount();
  console.log("records", records);
  console.log("count", count);
});
