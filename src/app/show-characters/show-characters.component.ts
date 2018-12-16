import { Component, OnInit } from '@angular/core';
import { Character } from '../models/Character';
import { Item} from '../models/Item'
import { ShowCharactersServiceService } from '../services/show-characters-service.service';

@Component({
  selector: 'app-show-characters',
  templateUrl: './show-characters.component.html',
  styleUrls: ['./show-characters.component.scss']
})

export class ShowCharactersComponent implements OnInit {
charactersList : Character[];
  constructor(private charactersListService: ShowCharactersServiceService) { }

  ngOnInit() {
    this.charactersListService.getAllCharacters().subscribe( charactersList => this.charactersList = charactersList);
  }

}
