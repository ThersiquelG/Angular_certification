import { Component, OnInit } from '@angular/core';
import { Character } from '../models/Character' ;
import { Item } from '../models/Item';
import { ItemServiceService } from '../services/item-service.service';
import  { FormcharacterServiceService } from '../services/formcharacter-service.service';

@Component({
  selector: 'app-form-characters',
  templateUrl: './form-characters.component.html',
  styleUrls: ['./form-characters.component.scss']
})
export class FormCharactersComponent implements OnInit {

  itemService: Item[];
  character = new Character();
  itemListCharacter: Item[] = [];
  constructor(private fmService: FormcharacterServiceService, private its: ItemServiceService ) { }

  ngOnInit() {
    this.its.getAllItems().subscribe(itemList => { this.itemService = itemList });
  }
  logCharacter(selectedItem) {
    console.log("logCharacter method")
    console.log(selectedItem);
    this.itemListCharacter.push(selectedItem);
    console.log("Log de la liste d'item");
    console.log(this.itemListCharacter);
    this.character.items = this.itemListCharacter;
    console.log("Log de la liste character.items");
    console.log(this.character);
  }
  newCharacter() {
    console.log("newcharacter method")
    console.log(this.character);
     this.fmService.addCharacter(this.character).subscribe( () => console.log('character added'));
   
   
  }
}
