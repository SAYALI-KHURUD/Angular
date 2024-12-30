import { Component } from '@angular/core';

@Component({
  selector: 'app-welcome',
  standalone: true,
  imports: [],
  templateUrl: './welcome.component.html',
  styleUrl: './welcome.component.css'
})
export class WelcomeComponent {
  constructor() { }
  
  navigateTo(path: string): void {
    // Simple navigation method if you want to handle navigation in the component
    window.location.href = path;
  }

  currentYear: number = new Date().getFullYear();
}
