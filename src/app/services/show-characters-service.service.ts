import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import { Character } from '../models/Character';

@Injectable({
  providedIn: 'root'
})

export class ShowCharactersServiceService {

  constructor(private httpClient: HttpClient ) { }

  public getAllCharacters(): Observable<Character[]> {
    return this.httpClient.get<Character[]>('http://localhost:8080/api/characters');
  }

}
