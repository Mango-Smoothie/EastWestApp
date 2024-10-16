import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { InventoryItem } from '../models/inventoryItem.model';

@Injectable({
  providedIn: 'root'
})
export class InventoryService {
  private apiURL = 'http://localhost:3000/data'
  constructor(private http: HttpClient) { }

  getInventoryData(): Observable<InventoryItem[]> {
    return this.http.get<InventoryItem[]>(this.apiURL);
  }
}
