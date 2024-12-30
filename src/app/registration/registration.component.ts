import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
@Component({
  selector: 'app-registration',
  standalone: true,
  imports: [CommonModule,ReactiveFormsModule,RouterLink,RouterLinkActive,RouterOutlet],
  templateUrl: './registration.component.html',
  styleUrl: './registration.component.css'
})
export class RegistrationComponent {
  currentYear: number = new Date().getFullYear();
  registrationForm: FormGroup;
  isSubmitted = false;

  constructor(private formBuilder: FormBuilder) {
    this.registrationForm = this.formBuilder.group({
      fullName: ['', [Validators.required, Validators.minLength(3)]],
      email: ['', [Validators.required, Validators.email]],
      phone: ['', [Validators.required, Validators.pattern('^[0-9]{10}$')]], // Ensures 10-digit phone numbers
      password: ['', [Validators.required, Validators.minLength(6)]],
      confirmPassword: ['', [Validators.required]],
      role: ['', [Validators.required]]
    }, { 
      validator: this.passwordMatchValidator('password', 'confirmPassword') 
    });
  }

  // Custom validator to check if password and confirmPassword match
  passwordMatchValidator(password: string, confirmPassword: string) {
    return (formGroup: FormGroup) => {
      const passControl = formGroup.controls[password];
      const confirmPassControl = formGroup.controls[confirmPassword];
      if (confirmPassControl.errors && !confirmPassControl.errors['passwordMismatch']) {
        return;
      }
      if (passControl.value !== confirmPassControl.value) {
        confirmPassControl.setErrors({ passwordMismatch: true });
      } else {
        confirmPassControl.setErrors(null);
      }
    };
  }

  // Handle form submission
  onSubmit() {
    this.isSubmitted = true;

    if (this.registrationForm.invalid) {
      console.log('Form is invalid.');
      return;
    }

    const userData = this.registrationForm.value;
    console.log('User Registered Successfully:', userData);

    // Simulate a back-end API call
    alert('Registration Successful!');
    this.registrationForm.reset();
    this.isSubmitted = false;
  }

  // Convenience getter for form controls
  get f() {
    return this.registrationForm.controls;
  }
}
