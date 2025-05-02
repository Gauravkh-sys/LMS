export interface UserModel {
    id: number;
  username: string;
  email: string;
  role: 'admin' | 'user' | 'guest';
}