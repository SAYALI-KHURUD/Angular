import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-appointment',
  standalone: true,
  imports: [CommonModule,ReactiveFormsModule],
  templateUrl: './appointment.component.html',
  styleUrl: './appointment.component.css'
})
export class AppointmentComponent {
  currentYear: number = new Date().getFullYear();
  appointmentform: FormGroup;

  constructor(private fb: FormBuilder) {
    // Create the form group and form controls
    this.appointmentform = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(3)]],
      date: ['', Validators.required],
      time: ['', Validators.required],
      notes: ['', [Validators.required, Validators.minLength(10)]]
    });
  }

  ngOnInit(): void {}

  onSubmit(): void {
    if (this.appointmentform.valid) {
      alert('Appointment submitted successfully!');
      this.appointmentform.reset(); // Optionally reset the form after submission
    } else {
      alert('Please fill in all required fields.');
    }
  }
}
