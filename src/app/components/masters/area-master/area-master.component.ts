import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import {AreaModel} from '../../../models/area.model'
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-area-master',
  imports: [CommonModule,ReactiveFormsModule],
  templateUrl: './area-master.component.html',
  styleUrl: './area-master.component.scss'
})
export class AreaMasterComponent {
  areaForm: FormGroup;
  submitted = false;
  areas: AreaModel[] = [
    { areaName: 'Andheri East', city: 'Mumbai', state: 'Maharashtra' },
    { areaName: 'Koramangala', city: 'Bengaluru', state: 'Karnataka' },
  ];

  constructor(private fb: FormBuilder) {
    this.areaForm = this.fb.group({
      areaName: ['', [Validators.required]],
      city: ['', [Validators.required]],
      state: ['', [Validators.required]]
    });
  }

  get f() {
    return this.areaForm.controls;
  }

  onSubmit(): void {
    this.submitted = true;

    if (this.areaForm.invalid) return;

    const newArea: AreaModel = this.areaForm.value;
    this.areas.push(newArea);

    alert('Area added successfully!');
    this.areaForm.reset();
    this.submitted = false;
  }
}
