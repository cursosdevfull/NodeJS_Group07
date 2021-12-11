import * as bcryptjs from 'bcryptjs';
import { v4 as uuidv4 } from 'uuid';
import yenv from 'yenv';
import jwt from 'jwt-simple';
import moment from 'moment';

const env = yenv();

export default class UserService {
  static async cryptPassword(password: string): Promise<string> {
    return await bcryptjs.hash(password, 10);
  }

  static async decryptPassword(
    password: string,
    passwordHash: string
  ): Promise<boolean> {
    return await bcryptjs.compare(password, passwordHash);
  }

  static generateRefreshToken(): string {
    return uuidv4();
  }

  static generateAccessToken(name: string, roles: string[]): string {
    const iat = moment().unix();
    const exp = moment().add(env.TOKEN.TIMEOUT, 'seconds').unix();

    const payload = {
      name,
      roles,
      iat,
      exp,
    };

    return jwt.encode(payload, env.TOKEN.KEYWORD);
  }

  static validateAccessToken(accessToken: string): Promise<any> {
    return new Promise((resolve, reject) => {
      try {
        const payload = jwt.decode(accessToken, env.TOKEN.KEYWORD);
        resolve(payload);
      } catch (error) {
        if (error.message.toLowerCase() === 'token expired') {
          reject({ status: 409, message: 'El access token ha expirado' });
        } else {
          reject({ status: 401, message: 'El access token no es válido' });
        }
      }
    });
  }
}
