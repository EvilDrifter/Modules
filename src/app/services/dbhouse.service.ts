import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { House } from '../models/house';

@Injectable({
  providedIn: 'root'
})
export class DbhouseService {

  constructor(private http: HttpClient) { }

  public getHouses(): Observable<House[]> {
    return this.http.get<House[]>('./assets/database/house/houses.json');
  }
}
