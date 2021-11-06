import * as mysql from 'mysql2';

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
      host: 'localhost',
      port: 3306,
      user: 'root',
      password: '12345',
      database: 'ambulance',
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
}
