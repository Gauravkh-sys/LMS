import { Component, Inject, inject, OnInit } from '@angular/core';
import { Router, RouterOutlet ,NavigationEnd } from '@angular/router';
import { AuthService } from './service/auth.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {
  title = 'land-management-system';

  showLayout = true;
  username = '';
  role = '';

  // private authService = inject(AuthService); // Injected service to get user info
  // private router=inject(Router);

  constructor(private router: Router, private authService: AuthService) {
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        this.showLayout = !event.urlAfterRedirects.includes('/login');
        const user = this.authService.getCurrentUser();
        if (user) {
          this.username = user.username;
          this.role = user.role;
        }
      }
    });
  }

  ngOnInit(): void {}

  logout() {
    this.authService.logout();
    this.router.navigate(['/login']);
  }

  // toTitleCase(str: string): string {
  //   return str[0].toUpperCase() + str.slice(1);
  // }
}
