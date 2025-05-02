import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AuthService } from '../../service/auth.service';
import { HttpClientModule } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  imports: [CommonModule,FormsModule,HttpClientModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  username = '';
  password = '';
  loginError: string | null = null;
  private authService=inject(AuthService);

  constructor(private router:Router) {}

  //this is sample login implementation
  login() {
    this.authService.login(this.username, this.password).subscribe({
      next: (res) => {
        console.log('Login successful:', res);
        this.loginError = null;
        this.router.navigate(['/dashboard']); // Navigate to dashboard or home
      },
      error: (err) => {
        console.error('Login failed:', err);
        this.loginError = 'Invalid credentials. Please try again.';
      }
    });
  }

}
