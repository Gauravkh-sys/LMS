import { Component } from '@angular/core';
import { UserModel } from '../../models/user.model';
import { UserService } from '../../service/user.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-usermanagement',
  imports: [CommonModule,FormsModule],
  templateUrl: './usermanagement.component.html',
  styleUrl: './usermanagement.component.scss'
})
export class UsermanagementComponent {

  users: UserModel[] = [];
  newUser: UserModel = { id: 0, username: '', email: '', role: 'user' };
  isEditing = false;

  constructor(private userService: UserService) {
    this.users = this.userService.getAll();
  }

  saveUser() {
    if (this.isEditing) {
      this.userService.update(this.newUser);
    } else {
      this.userService.add(this.newUser);
    }
    this.resetForm();
    this.users = this.userService.getAll();
  }

  edit(user:UserModel) {
    this.newUser = { ...user };
    this.isEditing = true;
  }

  delete(id: number) {
    this.userService.delete(id);
    this.users = this.userService.getAll();
  }

  resetForm() {
    this.newUser = { id: 0, username: '', email: '', role: 'user' };
    this.isEditing = false;
  }

}
