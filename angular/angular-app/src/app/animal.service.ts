import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Animal } from 'src/model/animal';
import { AnimalPost } from 'src/model/animal_post';


@Injectable({
  providedIn: 'root'
})
export class AnimalService {
  private _http: HttpClient

  constructor(httpClient: HttpClient) { 
    this._http = httpClient
  }

  put(animal: Animal){
    return this._http.put("https://localhost:7190/Animal", animal);
  }

  post(animal: AnimalPost){
    return this._http.post("https://localhost:7190/Animal", animal);
  }

  getAll(): Observable<Animal[]>{
    return this._http.get<Animal[]>("https://localhost:7190/Animal");
  }

  delete(id: number){
    return this._http.delete(`https://localhost:7190/Animal/${id}`);
  }
}
