import { Component } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import * as XLSX from 'xlsx';
import {Violation} from '../../../../app/models/voilations.model'
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-voilation-master',
  imports: [CommonModule,ReactiveFormsModule,FormsModule],
  templateUrl: './voilation-master.component.html',
  styleUrl: './voilation-master.component.scss'
})
export class VoilationMasterComponent {
  violations: Violation[] = [];
  importedViolations: Violation[] = [];
  structuredViolations: Violation[] = [];
  isEditing: boolean = false;
  currentViolation: Partial<Violation> = {};

  onFileChange(evt: any): void {
    const target: DataTransfer = <DataTransfer>(evt.target);
    if (target.files.length !== 1) return alert('Only one file allowed');

    const reader: FileReader = new FileReader();
    reader.onload = (e: any) => {
      const bstr = e.target.result;
      const workbook = XLSX.read(bstr, { type: 'binary' });
      const sheet = workbook.Sheets[workbook.SheetNames[0]];
      const jsonData: any[] = XLSX.utils.sheet_to_json(sheet, { defval: '' });

      this.importedViolations = jsonData.map(row => ({
        id: +row['Voilation Id'],
        head: row['Voilation Head'],
        parentId: row['ParentVoilation'] ? +row['ParentVoilation'] : undefined,
        children: []
      }));
    };
    reader.readAsBinaryString(target.files[0]);
  }

  saveAllImported(): void {
    for (const v of this.importedViolations) {
      const existing = this.violations.find(e => e.id === v.id);
      if (existing) {
        Object.assign(existing, v); // Update
      } else {
        this.violations.push({ ...v });
      }
    }
    this.importedViolations = [];
    this.buildHierarchy();
  }

  buildHierarchy(): void {
    const map = new Map<number, Violation>();
    this.violations.forEach(v => map.set(v.id, { ...v, children: [] }));
    const roots: Violation[] = [];

    this.violations.forEach(v => {
      const current = map.get(v.id)!;
      if (v.parentId && map.has(v.parentId)) {
        map.get(v.parentId)!.children!.push(current);
      } else {
        roots.push(current);
      }
    });

    this.structuredViolations = roots;
  }

  saveViolation(): void {
    if (!this.currentViolation.id || !this.currentViolation.head) return;

    const index = this.violations.findIndex(v => v.id === this.currentViolation.id);
    if (index !== -1) {
      this.violations[index] = { ...this.currentViolation } as Violation;
    } else {
      this.violations.push({ ...(this.currentViolation as Violation), children: [] });
    }

    this.resetForm();
    this.buildHierarchy();
  }

  editViolation(v: Violation): void {
    this.currentViolation = { ...v };
    this.isEditing = true;
  }

  deleteViolation(v: Violation): void {
    this.violations = this.violations.filter(item => item.id !== v.id && item.parentId !== v.id);
    this.buildHierarchy();
  }

  resetForm(): void {
    this.currentViolation = {};
    this.isEditing = false;
  }
}
