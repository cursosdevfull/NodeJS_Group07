export default interface UserModel {
  id?: number;
  name: string;
  email: string;
  password: string;
  refreshToken?: string;
  photo: string;
  roles: any[];
  active?: boolean;
}
