import { Injectable } from '@angular/core';
import { UserModel } from '../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private users: UserModel[] = [
    { id: 1, username: 'admin', email: 'admin@example.com', role: 'admin' },
    { id: 2, username: 'user1', email: 'user1@example.com', role: 'user' },
    { id: 3, username: 'guest1', email: 'guest1@example.com', role: 'guest' }
  ];

  constructor() { }

  getAll() {
    return this.users;
  }


  add(user: UserModel) {
    user.id = Date.now();
    this.users.push(user);
  }

  update(user: UserModel) {
    const index = this.users.findIndex(u => u.id === user.id);
    if (index > -1) this.users[index] = user;
  }

  delete(id: number) {
    this.users = this.users.filter(u => u.id !== id);
  }

}
