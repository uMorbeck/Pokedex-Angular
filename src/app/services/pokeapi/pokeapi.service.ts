import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class PokeapiService {
  private url = "https://pokeapi.com/api/v2/"

  constructor(private http: HttpClient){  }

  private getData(endpoint: string): Observable<any> {
    return this.http.get(`${this.url}${endpoint}`);
  }

  public getPokemonList(pagination: string): Observable<any> {
    return this.getData(`pokemon?${pagination}`);
  }

  public getPokemonData(id: number): Observable<any> {
    return this.getData(`pokemon/${id}`);
  }
}
