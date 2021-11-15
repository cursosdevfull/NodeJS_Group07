import bcrypt from 'bcryptjs';

export class UserService {
  static async encrypt(text: string): Promise<string> {
    const hashed = await bcrypt.hash(text, 10);
    return hashed;
  }

  decrypt() {}
}
