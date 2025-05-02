import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-landentry',
  imports: [CommonModule,FormsModule],
  templateUrl: './landentry.component.html',
  styleUrl: './landentry.component.scss'
})
export class LandentryComponent {
  entry: any;// = new LandEntry();

  constructor() {} //private landService: LandService

  saveEntry() {
    // if (this.entry.id) {
    //   this.landService.updateEntry(this.entry).subscribe();
    // } else {
    //   this.landService.createEntry(this.entry).subscribe();
    // }
  }
}
