import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';

import { AppointmentComponent } from './appointment/appointment.component';

import { FormBuilder, FormControl } from '@angular/forms';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,CommonModule,RouterOutlet,RouterLink,RouterLinkActive,AppointmentComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
 
  title = 'pharmacy-management';
  constructor() { }
  
  navigateTo(path: string): void {
    // Simple navigation method if you want to handle navigation in the component
    window.location.href = path;
  }
  // onLogout(): void {
  //   // Display an alert message on logout
  //   alert('Logout successfully!');
  //   // You can also handle any other logic related to logging out, like clearing session or token
  // }
  currentYear: number = new Date().getFullYear();
}
