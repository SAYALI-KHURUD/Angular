import { CommonModule } from '@angular/common';
import { Component ,OnInit} from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

interface StockItem {
  id: number;
  name: string;
  category: string;
  quantity: number;
  price: number;
  expiryDate: Date;
}
@Component({
  selector: 'app-stock',
  standalone: true,
  imports: [CommonModule,ReactiveFormsModule],
  templateUrl: './stock.component.html',
  styleUrl: './stock.component.css'
})

export class StockComponent implements OnInit {
  currentYear: number = new Date().getFullYear();
  stockItems: StockItem[] = [];
  stockForm: FormGroup;
  editMode: boolean = false;
  selectedItemId: number | null = null;

  constructor(private fb: FormBuilder) {
    this.stockForm = this.fb.group({
      name: ['', [Validators.required]],
      category: ['', [Validators.required]],
      quantity: [0, [Validators.required, Validators.min(1)]],
      price: [0, [Validators.required, Validators.min(0.01)]],
      expiryDate: ['', [Validators.required]]
    });
  }

  ngOnInit(): void {
    this.loadInitialStock();
  }

  loadInitialStock() {
    this.stockItems = [
      { id: 1, name: 'Paracetamol', category: 'Tablets', quantity: 50, price: 1.5, expiryDate: new Date('2025-06-30') },
      { id: 2, name: 'Cough Syrup', category: 'Syrup', quantity: 30, price: 4.0, expiryDate: new Date('2024-12-15') },
      { id: 3, name: 'Antibiotic', category: 'Tablets', quantity: 100, price: 2.5, expiryDate: new Date('2026-03-20') }
    ];
  }

  addOrUpdateStock() {
    if (this.stockForm.invalid) return;

    const formData = this.stockForm.value;
    if (this.editMode && this.selectedItemId !== null) {
      const index = this.stockItems.findIndex(item => item.id === this.selectedItemId);
      if (index !== -1) {
        this.stockItems[index] = { id: this.selectedItemId, ...formData };
      }
      this.editMode = false;
      this.selectedItemId = null;
    } else {
      const newId = this.stockItems.length > 0 ? Math.max(...this.stockItems.map(item => item.id)) + 1 : 1;
      this.stockItems.push({ id: newId, ...formData });
    }

    this.stockForm.reset();
  }

  editStockItem(item: StockItem) {
    this.editMode = true;
    this.selectedItemId = item.id;
    this.stockForm.patchValue(item);
  }

  deleteStockItem(id: number) {
    this.stockItems = this.stockItems.filter(item => item.id !== id);
  }

  resetForm() {
    this.stockForm.reset();
    this.editMode = false;
    this.selectedItemId = null;
  }
}
