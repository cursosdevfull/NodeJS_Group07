import IBootstrap from "./interfaces/bootstrap.interface";
import yenv from "yenv";
import { createConnection } from "typeorm";
import Logger from "../helpers/logger.helper";

const env = yenv();
let client: any;
export default class DatabaseBootstrap implements IBootstrap {
  async initialize(): Promise<any> {
    const promise = new Promise((resolve, reject) => {
      const parametersConnection = {
        host: env.DATABASES.MYSQL.HOST,
        type: env.DATABASES.MYSQL.TYPE,
        username: env.DATABASES.MYSQL.USERNAME,
        password: env.DATABASES.MYSQL.PASSWORD,
        database: env.DATABASES.MYSQL.DATABASE,
        port: env.DATABASES.MYSQL.PORT,
        entities: [env.DATABASES.MYSQL.ENTITIES],
        synchronize: env.DATABASES.MYSQL.SYNCHRONIZE,
      };

      createConnection(parametersConnection).then(
        (connection) => {
          Logger.info("Connected to database");
          client = connection;
          resolve(true);
        },
        (error) => {
          console.log(error);
          reject(error);
        }
      );
    });

    await promise;
  }

  getConnection() {
    return client;
  }
}
