import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";

//const url ="https://zapahuira.uta.cl/negocio/INT/INT_abrir_sesion.php?usuario=17557632&id=7vdknuprfee6iqemdqmvjjr1cm&prf=2087&area=2&titulo=Gesti%C3%B3n&vi=http://localhost:4200/login-1/17557632/7vdknuprfee6iqemdqmvjjr1cm";
const url =
  "https://zapahuira.uta.cl/negocio/INT/INT_abrir_sesion.php?usuario=17557632&id=9euqf4o4h4sinv9am8d6qelu40&prf=2087&area=2&titulo=Gesti%C3%B3n&vi=http://localhost:4200/login-1/17557632/9euqf4o4h4sinv9am8d6qelu40";

@Injectable({
  providedIn: "root",
})
export class ResourcesService {
  constructor(private http: HttpClient) {}

  getPokemons() {
    console.log("getpoke,");
    return this.http.get(url, {
      observe: "response",
      responseType: "text",
      //withCredentials: true,
    });
  }
}
