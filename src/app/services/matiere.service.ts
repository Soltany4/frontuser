import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Matiere } from '../matiere';

@Injectable({
  providedIn: 'root'
})
export class MatiereService {

  url = "http://localhost:8080/matiere/matieres"

  constructor(private httpClient: HttpClient) { }

  getAllMatiere(): Observable<Matiere[]> {
    return this.httpClient.get<Matiere[]>(`${this.url}`)
  }
  /*updateMatiere(): Observable<Matiere> {
    return this.httpClient.put<Matiere>(`${this.url}`)
  }*/
}
