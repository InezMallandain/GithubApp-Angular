import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment as env } from "src/environments/environment";
import { SearchUserResponse, User } from '../models/user.model';
@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }

  getUsers(queryString:string){
   return this.http.get<SearchUserResponse>(`${env.apiURL}/search/users?q=${queryString}&page=1&per_page=1`)
  }

  getUser(userLogin: string){
    userLogin;
    return this.http.get<User>(`${env.apiURL}/users/${userLogin}`);
  }
}
