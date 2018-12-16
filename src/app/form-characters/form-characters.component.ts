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
  characters : Character[];
  character = new Character();
  constructor(private fmService: FormcharacterServiceService, private its: ItemServiceService ) { }

  ngOnInit() {
    this.its.getAllItems().subscribe(itemList =>{ this.itemService = itemList});
  }

  newCharacter(){
    this.fmService.addCharacter(this.character).subscribe(character => this.characters.push(character));
    console.log("character added");
  }

}
