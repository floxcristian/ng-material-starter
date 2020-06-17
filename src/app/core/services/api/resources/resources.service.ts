import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

const url = "https://pokeapi.co/api/v2/pokemon/pikachukkks";

@Injectable({
  providedIn: "root",
})
export class ResourcesService {
  constructor(private http: HttpClient) {}

  getPokemons() {
    console.log("getpoke,");
    return this.http.get(url);
  }
}
