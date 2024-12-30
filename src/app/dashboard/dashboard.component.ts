import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MedicineService } from '../medicine.service';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent {
  totalMedicines: number = 0;
}
