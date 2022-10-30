import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject } from 'rxjs';


const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  
  list: BehaviorSubject<any> = new BehaviorSubject<any>([])
  
  public url: string;



  constructor( public _http: HttpClient) { 
    this.url = "https://pokeapi.co/api/v2/pokemon";
  }

  getPokemon(number: number): Observable<any[]> {
    return this._http.get<any[]>(this.url + '/' + number, httpOptions);
  }
}
