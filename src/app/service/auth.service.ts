import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of, throwError } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class AuthService {
  //mock Uesrs-data for demonstration purposes
  
  // Mock users with roles
  private users = [
    { username: 'admin', password: 'admin123', role: 'admin' },
    { username: 'user1', password: 'pass1', role: 'user' },
    { username: 'user2', password: 'pass2', role: 'user' },
    { username: 'user3', password: 'pass3', role: 'guest' }
  ];


  constructor() {}

  login(username: string, password: string): Observable<any> {
    const user = this.users.find(
      u => u.username === username && u.password === password
    );

    if (user) {
      // Store user info in localStorage
      const userData = { username: user.username, role: user.role };
      localStorage.setItem('currentUser', JSON.stringify(userData));

      return of({ status: 'success', user: userData });
    } else {
      return throwError(() => new Error('Invalid username or password'));
    }
  }

  logout(): void {
    localStorage.removeItem('currentUser');
  }

  getCurrentUser(): { username: string; role: string } | null {
    const user = localStorage.getItem('currentUser');
    return user ? JSON.parse(user) : null;
  }

  getCurrentRole(): string | null {
    const user = this.getCurrentUser();
    return user ? user.role : null;
  }

  isLoggedIn(): boolean {
    return !!this.getCurrentUser();
  }
}
