import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { InventoryService } from '../../services/inventory.service';
import { InventoryItem } from '../../models/inventoryItem.model';
import { NgxPaginationModule } from 'ngx-pagination';

@Component({
  selector: 'app-inventory-list',
  standalone: true,
  imports: [CommonModule, NgxPaginationModule],
  templateUrl: './inventory-list.component.html',
  styleUrl: './inventory-list.component.css'
})
export class InventoryListComponent implements OnInit{
  inventoryData: InventoryItem[] = [];
  page = 1;
  pageSize = 10;
  
  constructor(private inventoryService: InventoryService) {}

  ngOnInit(): void {
    this.inventoryService.getInventoryData().subscribe(data => {
      this.inventoryData = data;
    });
}
}
