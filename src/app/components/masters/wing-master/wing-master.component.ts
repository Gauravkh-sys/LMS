import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators,ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-wing-master',
  imports: [CommonModule,ReactiveFormsModule],
  templateUrl: './wing-master.component.html',
  styleUrl: './wing-master.component.scss'
})
export class WingMasterComponent {
  wingForm: FormGroup;
  submitted = false;

  constructor(private fb: FormBuilder) {
    this.wingForm = this.fb.group({
      wingName: ['', [Validators.required, Validators.minLength(2)]],
      description: ['']
    });
  }

  onSubmit(): void {
    this.submitted = true;
    if (this.wingForm.valid) {
      console.log('Wing Data:', this.wingForm.value);
      // You can call a service here to save data
      alert('Wing added successfully!');
      this.wingForm.reset();
      this.submitted = false;
    }
  }

  get f() {
    return this.wingForm.controls;
  }
}
