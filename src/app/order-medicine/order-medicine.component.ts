import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-order-medicine',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './order-medicine.component.html',
  styleUrls: ['./order-medicine.component.css']
})
export class OrderMedicineComponent {
  currentYear: number = new Date().getFullYear();
  orderForm: FormGroup;

  constructor(private fb: FormBuilder) {
    // Initialize the formGroup correctly
    this.orderForm = this.fb.group({
      medicineName: ['', [Validators.required, Validators.minLength(2)]],
      quantity: [1, [Validators.required, Validators.min(1)]],
      dosage: ['', Validators.required],
      deliveryAddress: ['', [Validators.required, Validators.minLength(10)]],
      contactNumber: ['', [Validators.required, Validators.pattern(/^[0-9]{10}$/)]],
      deliveryDate: ['', Validators.required]
    });
  }

  onSubmit() {
    if (this.orderForm.valid) {
      console.log('Order placed successfully', this.orderForm.value);
      alert('Order placed successfully!');
      this.orderForm.reset();
    } else {
      alert('Please fill out all required fields.');
    }
  }

  // Define the formControls getter after the form is initialized
  get formControls() {
    return this.orderForm.controls;
  }
}
