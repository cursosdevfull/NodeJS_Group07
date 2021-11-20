import { Brackets, createConnection, getManager, getRepository } from "typeorm";
import { Car } from "./entity/Car";
import { User } from "./entity/User";

createConnection().then(async (connection) => {
  console.log("Connected to database");

  const userRepository = getRepository(User);

  const userParameters = await userRepository
    .createQueryBuilder("user")
    .where("user.id = :id")
    .setParameters({ id: 1 })
    .getOne();

  console.log("userParameters", userParameters);

  const usersInRangeAge = await userRepository
    .createQueryBuilder("user")
    .where("user.age > 20 and user.age < 100")
    .getMany();

  console.log("usersInRangeAge", usersInRangeAge);

  const ages = [20, 25, 30, 40, 50, 60, 70, 80, 90];
  const usersInAge = await userRepository
    .createQueryBuilder("user")
    .where("user.age IN (:...ages)", { ages })
    .getMany();

  console.log("usersInAge", usersInAge);

  const usersUsingOrInWhere = await userRepository
    .createQueryBuilder("user")
    .select(["user.id", "user.name"])
    .where("user.name = :name", { name: "Jane" })
    .orWhere("user.age = :age", { age: 30 })
    .getMany();

  console.log("usersUsingOrInWhere", usersUsingOrInWhere);

  const usersInBrackets = await userRepository
    .createQueryBuilder("user")
    .where("(user.id >= :id)", { id: 1 })
    .andWhere(
      new Brackets((qb) => {
        qb.where("user.name = :name", { name: "Jane" }).orWhere(
          "user.age = :age",
          { age: 30 }
        );
      })
    )
    .getSql();

  console.log("usersInBrackets", usersInBrackets);

  const sum = await userRepository
    .createQueryBuilder("user")
    .select(["sum(user.age) suma", "count(*) total"])
    .where("user.age > :age", { age: 10 })
    .getRawOne();

  console.log("sum", sum);

  const userUsingHaving = await userRepository
    .createQueryBuilder("user")
    .having("user.id > :id", { id: 1 })
    .getRawMany();

  console.log("userUsingHaving", userUsingHaving);

  const usersSorted = await userRepository
    .createQueryBuilder("user")
    .orderBy("user.lastname", "ASC")
    .addOrderBy("user.age", "DESC")
    .limit(2)
    .offset(1)
    .getMany();

  console.log("usersSorted", usersSorted);

  const usersLefJoin = await userRepository
    .createQueryBuilder("user")
    .leftJoinAndSelect("user.cars", "cars")
    .getSql();

  console.log("usersLefJoin", usersLefJoin);

  const entityManager = getManager();
  const listCars = await entityManager.query("select * from car");
  console.log("listCars", listCars);

  const listCars2 = await entityManager.query("call listado(2)");
  console.log("listCars2", listCars2);
});
