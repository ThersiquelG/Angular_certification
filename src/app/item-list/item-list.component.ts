import { Component, OnInit } from '@angular/core';
import { Item } from '../models/Item';
import { ItemServiceService } from '../services/item-service.service'

@Component({
  selector: 'app-item-list',
  templateUrl: './item-list.component.html',
  styleUrls: ['./item-list.component.scss']
})
export class ItemListComponent implements OnInit {
  itemService: Item[];
  constructor(private itemListService:  ItemServiceService) { }

  ngOnInit() {
    this.itemListService.getAllItems().subscribe(itemList =>{ this.itemService = itemList});
  }

}
