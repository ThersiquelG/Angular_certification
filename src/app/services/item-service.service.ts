import { Injectable, Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Item } from '../models/Item';

@Injectable({
  providedIn: 'root'
})
export class ItemServiceService {

  constructor(private httpClient: HttpClient) { }

  public getAllItems(): Observable<Item[]> {
    return this.httpClient.get<Item[]>('http://localhost:8080/api/items');
  }
}
