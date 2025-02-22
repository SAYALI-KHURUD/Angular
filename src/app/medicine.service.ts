import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class MedicineService {
  constructor(private http: HttpClient) {}

  getTotalMedicines(): Observable<number> {
    return this.http.get<number>('/api/medicines/total');
  }
}
