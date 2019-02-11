import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) { }

  // getUsers() {
  //   return this.http.get("https://reqres.in/api/users");
  // }

  getFilms() {
    return this.http.get("https://swapi.co/api/films");
  }
  getFilmDetails(id: number) {
    return this.http.get("https://swapi.co/api/films/" + id);

  }
}
