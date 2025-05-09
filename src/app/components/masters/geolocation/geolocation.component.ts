import { Component } from '@angular/core';
import { SafeUrlPipe } from "../../../../pipes/safeurl.pipe";
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-geolocation',
  imports: [SafeUrlPipe,CommonModule,FormsModule],
  templateUrl: './geolocation.component.html',
  styleUrl: './geolocation.component.scss'
})
export class GeolocationComponent {
  latitude: number | null = null;
  longitude: number | null = null;

  defaultlatitude = 31.41667000;
  defaultlongitude = 75.575164;
  locationStatus = '';

  getCurrentLocation() {
    if (navigator.geolocation) {
      this.locationStatus = 'Getting location...';
      navigator.geolocation.getCurrentPosition(
        (position) => {
          this.latitude = position.coords.latitude;
          this.longitude = position.coords.longitude;
          this.locationStatus = 'Location retrieved successfully.';
        },
        (error) => {
          this.locationStatus = 'Error retrieving location.';
        }
      );
    } else {
      this.locationStatus = 'Geolocation not supported by your browser.';
    }
  }

  get mapUrl(): string {
    if (!this.latitude || !this.longitude) return '';
    return `https://maps.google.com/maps?q=${this.latitude},${this.longitude}&z=15&output=embed`;
  }

  ngOnInit() {
    // latitude and longitude 31.41667000, 75.61667000.
    fetch('https://ipapi.co/json/')
      .then(response => response.json())
      .then(data => {
        this.latitude = 31.41667000;//data.latitude;
        this.longitude = 75.575164;//data.longitude;
        this.locationStatus = 'Location fetched via IP (approximate)';
        console.log(this.latitude,this.longitude);
      console.log(this.locationStatus);
      })
      .catch(() => {
        this.locationStatus = 'Could not fetch location via IP.';
      });

      
  }
}
