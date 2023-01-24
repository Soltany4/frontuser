import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { User } from '../user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  url = 'http://localhost:8080/user/signup';

  constructor(private httpClient:HttpClient) { }

  signUp(user?: User): Observable<Object>{
      return this.httpClient.post<Object>(`${this.url}`, user)
    }
  }