import * as mysql from 'mysql2';
import yenv from 'yenv';

const env = yenv();

export default class DatabaseBootstrap {
  private static _instance: DatabaseBootstrap;
  private db: Promise<mysql.Connection>;
  private constructor() {
    this.getConnection();
  }

  private async getConnection() {
    this.db = new Promise((resolve, reject) => {
      const connection = mysql.createConnection(this.getCredentials());

      connection.connect((err: any) => {
        if (err) {
          return reject(err);
        }
        console.log('Connected to database');
        resolve(connection);
      });
    });
  }

  private getCredentials() {
    return {
      host: env.DATABASES.MYSQL.HOST,
      port: env.DATABASES.MYSQL.PORT,
      user: env.DATABASES.MYSQL.USER,
      password: env.DATABASES.MYSQL.PASSWORD.toString(),
      database: env.DATABASES.MYSQL.DATABASE,
    };
  }

  public static getInstance(): DatabaseBootstrap {
    if (!DatabaseBootstrap._instance) {
      DatabaseBootstrap._instance = new DatabaseBootstrap();
    }

    return DatabaseBootstrap._instance;
  }

  public getDB(): Promise<mysql.Connection> {
    return this.db;
  }

  static async executeStatement<T>(
    statement: string,
    bindParameters = {}
  ): Promise<T | T[]> {
    const connection: mysql.Connection = await this.getInstance().getDB();
    const query = this.bindQueryParameters(
      connection,
      statement,
      bindParameters
    );

    return new Promise((resolve, reject) => {
      connection.query(query, (err, result) => {
        if (err) {
          console.log(err);
          return reject(err);
        } else {
          return resolve(result as T[]);
        }
      });
    });
  }

  static bindQueryParameters(
    connection: mysql.Connection,
    statement: string,
    bindParameters: any
  ) {
    let bindSQL = statement;
    for (const prop in bindParameters) {
      if (bindParameters.hasOwnProperty(prop)) {
        const value = connection.escape(bindParameters[prop]);
        bindSQL = bindSQL.replace(`:${prop}`, value);
      }
    }
    return bindSQL;
  }
}
