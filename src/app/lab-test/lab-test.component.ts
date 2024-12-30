import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
@Component({
  selector: 'app-lab-test',
  standalone: true,
  imports: [ReactiveFormsModule,CommonModule],
  templateUrl: './lab-test.component.html',
  styleUrl: './lab-test.component.css'
})
export class LabTestComponent {
  currentYear: number = new Date().getFullYear();
  labTestForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.labTestForm = this.fb.group({
      testName: ['', [Validators.required, Validators.minLength(3)]],
      patientName: ['', [Validators.required, Validators.minLength(3)]],
      contactNumber: ['', [Validators.required, Validators.pattern(/^[0-9]{10}$/)]],
      email: ['', [Validators.required, Validators.email]],
      preferredDate: ['', Validators.required],
      notes: ['']
    });
  }

  onSubmit() {
    if (this.labTestForm.valid) {
      console.log('Lab Test Request Submitted:', this.labTestForm.value);
      alert('Lab test request submitted successfully!');
      this.labTestForm.reset();
    } else {
      alert('Please fill out all required fields.');
    }
  }

  get formControls() {
    return this.labTestForm.controls;
  }
}
