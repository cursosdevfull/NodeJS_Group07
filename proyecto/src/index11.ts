import { createConnection, getRepository } from "typeorm";
import { Car } from "./entity/Car";
import { User } from "./entity/User";

createConnection().then(async (connection) => {
  console.log("Connected to database");

  const userRepository = getRepository(User);
  const sql = await userRepository
    .createQueryBuilder("usuario") // select * from user as usuario
    .where("usuario.id = :id", { id: 2 })
    .getSql();
  //.getOne();

  console.log("sql", sql);

  const user = await userRepository
    .createQueryBuilder()
    .select(["usuario.name", "usuario.lastname", "usuario.age"])
    .from(User, "usuario")
    .where("usuario.id = :id", { id: 2 })
    .getOne();
  console.log("user", user);
});
