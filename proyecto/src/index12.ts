import { createConnection, getRepository } from "typeorm";
import { Car } from "./entity/Car";
import { User } from "./entity/User";

createConnection().then(async (connection) => {
  console.log("Connected to database");

  const userRepository = getRepository(User);

  const userUpdated = await userRepository
    .createQueryBuilder()
    .update(User)
    .set({ name: "Usuario 1" })
    .where("id = :id", { id: 1 })
    .execute();

  console.log("Usuario actualizado: ", userUpdated);

  const userDeleted = await userRepository
    .createQueryBuilder()
    .delete()
    .from(User)
    .where("id = :id and age = :age", { id: 3, age: 40 })
    .execute();

  console.log("user deleted", userDeleted);
});
