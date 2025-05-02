import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AuthService } from '../../service/auth.service';

@Component({
  selector: 'app-dashboard',
  imports: [CommonModule,FormsModule],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})
export class DashboardComponent {
  role: string = '';
  username: string = '';
  
  landEntries = [
    { owner: 'John Doe', area: '2 Acres', location: 'Springfield' },
    { owner: 'Jane Smith', area: '5 Acres', location: 'Riverdale' },
    { owner: 'Mark Lee', area: '1 Acre', location: 'Greenville' }
  ];

  private authService=inject(AuthService); // Injected service to get user info

  constructor() {}

  ngOnInit(): void {
    const currentUser = this.authService.getCurrentUser();
    if (currentUser) {
      this.role = currentUser.role;
      this.username = currentUser.username;
    }
  }

  getTotalArea(): number {
    return this.landEntries.reduce((sum, entry) => {
      const area = parseFloat(entry.area);
      return sum + (isNaN(area) ? 0 : area);
    }, 0);
  }

  getUniqueLocations(): string[] {
    return [...new Set(this.landEntries.map(e => e.location))];
  }
}
