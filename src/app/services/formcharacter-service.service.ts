import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Character } from '../models/Character'

@Injectable({
  providedIn: 'root'
})
export class FormcharacterServiceService {

  constructor(private httpClient : HttpClient) { }

  public addCharacter (character: Character): Observable<Character> {
    return this.httpClient.post<Character>('http://localhost:8080/api/characters', character);
  }
}
